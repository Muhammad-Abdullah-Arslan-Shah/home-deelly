import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import { FaMapMarkerAlt } from 'react-icons/fa';

const MapBox = () => {
  const [map, setMap] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

    // Initialize Map
    const mapInstance = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [55.2708, 25.2048], 
      zoom: 10,
    });

    setMap(mapInstance);

    // Fetch user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([longitude, latitude]);

          // Fly to user location
          mapInstance.flyTo({
            center: [longitude, latitude],
            zoom: 14,
          });

          // Add user marker
          new mapboxgl.Marker({ color: 'blue' })
            .setLngLat([longitude, latitude])
            .setPopup(new mapboxgl.Popup().setHTML('<h1>Your Location</h1>'))
            .addTo(mapInstance);
        },
        (error) => console.error('Error fetching user location:', error),
      );
    }

    // Fetch deals and add markers
    fetch('https://deelly.com/api/nearby_deals/')
      .then((res) => res.json())
      .then((response) => {
        const features = response.data.map((deal) => ({
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
            logo: deal.store.business_logo,
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
            clusterRadius: 50,
          });

          // Add cluster layer
          mapInstance.addLayer({
            id: 'clusters',
            type: 'circle',
            source: 'deals',
            filter: ['has', 'point_count'],
            paint: {
              'circle-color': '#51bbd6',
              'circle-radius': 20,
            },
          });

          // Add cluster count labels
          mapInstance.addLayer({
            id: 'cluster-count',
            type: 'symbol',
            source: 'deals',
            filter: ['has', 'point_count'],
            layout: {
              'text-field': '{point_count_abbreviated}',
              'text-size': 12,
            },
          });

          // Add individual points layer
          mapInstance.addLayer({
            id: 'unclustered-point',
            type: 'symbol',
            source: 'deals',
            filter: ['!', ['has', 'point_count']],
            layout: {
              'icon-image': 'custom-marker',
              'icon-size': 0.5,
            },
          });

          // Add custom marker icon using React-Icons
          features.forEach((feature) => {
            const { coordinates } = feature.geometry;
            const { title, description, address, image, logo } = feature.properties;

            const el = document.createElement('div');
            el.className = 'marker';
            el.style.width = '30px';
            el.style.height = '30px';
            el.style.display = 'flex';
            el.style.alignItems = 'center';
            el.style.justifyContent = 'center';
            el.style.backgroundColor = 'white';
            el.style.borderRadius = '50%';
            el.style.boxShadow = '0 2px 6px rgba(0,0,0,0.3)';

            // Use React-Icons FaMapMarkerAlt
            const markerIcon = document.createElement('div');
            markerIcon.style.color = '#FF6347';
            markerIcon.style.fontSize = '16px';
            markerIcon.innerHTML = `<div>${FaMapMarkerAlt().props.children}</div>`;

            el.appendChild(markerIcon);

            new mapboxgl.Marker(el)
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
      })
      .catch((error) => console.error('Error fetching deals:', error));

    return () => mapInstance.remove();
  }, []);

  return <div id="map" className="w-full h-screen"></div>;
};

export default MapBox;
