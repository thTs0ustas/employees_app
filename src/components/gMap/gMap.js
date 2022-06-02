import React from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { Box } from '@mui/material';
import employeeList from '../../data/EMPLOYEE_LIST';
import axios from 'axios';

const GMap = ({ selected = 0 }) => {
  const iconBase = 'http://maps.google.com/mapfiles/kml/paddle/grn-circle.png';

  let map;
  const mapRef = React.useRef();

  const loader = new Loader({
    apiKey: 'AIzaSyDgRKnGF4RQtIpFsEVYPdNPMI9WBflthmc',
    version: 'weekly',
  });

  // Athens
  const center = {
    lng: 23.7275,
    lat: 37.9838,
  };

  React.useEffect(() => {
    loader.load().then(() => {
      map = new window.google.maps.Map(mapRef.current, {
        center,
        zoom: 8,
      });
    });
  }, []);

  React.useEffect(() => {
    employeeList.forEach(async (employee) => {
      const information = new window.google.maps.InfoWindow({
        content: employee.info.fullName,
      });
      const { data } = await axios.get(
        `https://api.geoapify.com/v1/geocode/search?text=${employee.info.address} ${employee.info.town} gr&apiKey=cee786390cea4f71b6f93c0285ebd9bf`
      );
      const lat = data.features.at(-1).geometry.coordinates.at(1);
      const lng = data.features.at(-1).geometry.coordinates.at(0);

      let marker = new window.google.maps.Marker({
        animation: window.google.maps.Animation.DROP,
        clickable: true,
        icon: selected === employee.id ? iconBase : null,
        position: {
          lat,
          lng,
        },
        map,
      });
      marker.addListener('click', () => {
        information.open(map, marker);
      });
    });
  }, []);

  return <Box as="div" ref={mapRef} style={{ height: '80vh', width: '100%' }} id="map" />;
};

export default React.memo(GMap);
