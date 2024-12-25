import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

const Statistics = () => {
  const stats = [
    { label: "Retailers", value: 60000, suffix: "+" },
    { label: "Deals", value: 75000, suffix: "+" },
    { label: "Active Users", value: 2, suffix: "M+" },
    { label: "App Downloads", value: 1.3, suffix: "M+" },
  ];

  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-center p-6 border-t border-primary pt-6 mt-12"
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-4 w-full h-40"
        >
          <h3 className="text-primary text-4xl font-bold">
            {animate && ( // Only start animation when component is in view
              <CountUp
                start={0}
                end={stat.value}
                duration={2.5}
                separator=","
                decimals={stat.value % 1 !== 0 ? 1 : 0} // Add a decimal if needed
              />
            )}
            {stat.suffix}
          </h3>
          <p className="text-gray-700 text-lg mt-2">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
