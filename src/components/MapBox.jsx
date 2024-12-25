import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import { FaMapMarkerAlt } from 'react-icons/fa';
import logo2 from '../assets/logo2.png'; // Import default business logo
import diningIcon from '../assets/dining.png'; // Import the dining icon for restaurants

const MapBox = ({ deals }) => {
  const [map, setMap] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [locationAllowed, setLocationAllowed] = useState(false); // To check if location is allowed
  const [userMarker, setUserMarker] = useState(null); // Marker for user location

  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

    // Initialize Map
    const mapInstance = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [55.2708, 25.2048], // Default center (Dubai)
      zoom: 10,
    });

    setMap(mapInstance);

    // Fetch user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const coords = [longitude, latitude];
          setUserLocation(coords);
          setLocationAllowed(true); // Set locationAllowed to true when location is fetched

          // Create a marker for user location
          const marker = new mapboxgl.Marker({ color: 'blue' })
            .setLngLat(coords)
            .setPopup(
              new mapboxgl.Popup().setHTML(`
                <div>
                  <h3 class="font-bold">Your Location</h3>
                  <p>Latitude: ${latitude.toFixed(4)}</p>
                  <p>Longitude: ${longitude.toFixed(4)}</p>
                </div>
              `)
            )
            .addTo(mapInstance);

          setUserMarker(marker);
        },
        (error) => console.error('Error fetching user location:', error)
      );
    }

    // Convert deals prop into geojson format
    const features = deals.map((deal) => ({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          parseFloat(deal.location.lng),
          parseFloat(deal.location.lat),
        ],
      },
      properties: {
        title: deal.business_deal.title,
        description: `${deal.store.name} - ${deal.store.category.name}`,
        address: deal.location.location_detail,
        image: deal.images.image,
        logo: logo2, // Always use the default logo for all businesses
      },
    }));

    mapInstance.on('load', () => {
      mapInstance.addSource('deals', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features,
        },
        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius: 20,
      });

      // Add cluster layer
      mapInstance.addLayer({
        id: 'clusters',
        type: 'circle',
        source: 'deals',
        filter: ['has', 'point_count'],
        paint: {
          'circle-color': 'green',
          'circle-radius': 15,
        },
      });

      // Add individual points layer (restaurant icon)
      mapInstance.addLayer({
        id: 'unclustered-point',
        type: 'symbol',
        source: 'deals',
        filter: ['!', ['has', 'point_count']],
        layout: {
          'icon-image': 'dining-icon', // Custom dining icon for restaurants
          'icon-size': 0.3,
        },
      });

      // Register custom dining marker icon
      mapInstance.loadImage(diningIcon, (error, image) => {
        if (error) throw error;
        mapInstance.addImage('dining-icon', image);
      });

      // Add custom marker icons for individual points (restaurant icons)
      features.forEach((feature) => {
        const { coordinates } = feature.geometry;
        const { title, description, address, image, logo } = feature.properties;

        new mapboxgl.Marker({ color: 'green' })
          .setLngLat(coordinates)
          .setPopup(
            new mapboxgl.Popup().setHTML(`
              <div>
                <img src="${logo}" alt="Business Logo" class="w-10 h-10 mb-2"/>
                <h3 class="text-lg font-bold">${title}</h3>
                <p>${description}</p>
                <p class="text-sm text-gray-600">${address}</p>
                <img src="${image}" alt="Deal Image" class="w-full h-20 object-cover mt-2"/>
              </div>
            `)
          )
          .addTo(mapInstance);
      });
    });

    return () => mapInstance.remove();
  }, [deals]);

  // Update user marker position when userLocation changes
  useEffect(() => {
    if (userMarker && userLocation) {
      userMarker.setLngLat(userLocation);
    }
  }, [userLocation]);

  const handleGoToMyLocation = () => {
    if (userLocation && map) {
      map.flyTo({
        center: userLocation,
        zoom: 14,
      });
    }
  };

  return (
    <div className="relative">
      <div id="map" className="w-full h-screen"></div>

      {locationAllowed && (
        <button
          onClick={handleGoToMyLocation}
          className="absolute top-4 left-4 bg-blue-500 text-white p-2 rounded"
        >
          Go to My Location
        </button>
      )}
    </div>
  );
};

export default MapBox;
