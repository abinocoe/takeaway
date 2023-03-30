import React, { useEffect, useRef, useState } from 'react';
import './index.css';

const Map = ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  const ref = useRef(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new google.maps.Map(ref.current, {
          zoomControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          center: {
            lat: latitude ?? 0,
            lng: longitude ?? 0,
          },
          zoom: 11,
        })
      );
    }
  }, [ref, map, latitude, longitude]);

  return <div ref={ref} className="map" />;
};

export default Map;
