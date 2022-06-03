import React from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { Box } from '@mui/material';
import employeeList from '../../data/EMPLOYEE_LIST';
import axios from 'axios';
import { isNull } from 'lodash';

const GMap = ({ selected }) => {
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
  let marker;
  const addMarker = (position, employee) => {
    const information = new window.google.maps.InfoWindow({
      content: employee.info.fullName,
    });
    marker = !isNull(selected)
      ? new window.google.maps.Marker({
          animation: window.google.maps.Animation.DROP,
          clickable: true,
          icon: selected === employee.id ? iconBase : null,
          position: {
            lat: position.lat,
            lng: position.lng,
          },
          map,
        })
      : null;
    marker?.addListener('click', () => {
      information.open(map, marker);
    });
  };
  const initMap = async () => {
    loader.load().then(() => {
      map = new window.google.maps.Map(mapRef.current, {
        center,
        zoom: 12,
      });
    });
    await Promise.all(
      employeeList.map(async (employee) => {
        const { data } = await axios.get(
          `https://api.geoapify.com/v1/geocode/search?text=${employee.info.address} ${employee.info.town} gr&apiKey=cee786390cea4f71b6f93c0285ebd9bf`
        );
        const lat = data.features.at(-1).geometry.coordinates.at(1);
        const lng = data.features.at(-1).geometry.coordinates.at(0);
        addMarker({ lat, lng }, employee);
      })
    );
  };
  React.useEffect(() => {
    initMap();

    return () => {
      marker = null;
    };
  }, [selected]);

  return <Box as="div" ref={mapRef} style={{ height: '80vh', width: '100%' }} id="map" />;
};

export default GMap;
