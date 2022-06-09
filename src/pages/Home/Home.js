import { Chip, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { homeStyles } from './homeStyles';

const Home = () => {
  return (
    <Container maxWidth="lg" sx={homeStyles.container}>
      <Typography sx={homeStyles.topHeader} variant="h5" component="h1">
        Employees with Attributes App
      </Typography>
      <Typography sx={homeStyles.subHeader} variant="h6" component="h2">
        Technologies used:
      </Typography>
      <Box sx={homeStyles.chipBox}>
        <Chip color="primary" label="React" />
        <Chip color="primary" label="React-Router" />
        <Chip color="primary" label="Material-UI" />
        <Chip color="primary" label="Formik" />
        <Chip color="primary" label="Yup" />
        <Chip color="primary" label="Moment" />
        <Chip color="primary" label="GoogleMaps" />
        <Chip color="primary" label="Axios" />
      </Box>
      <Box>
        <Typography variant="h6">
          React:
          <Typography variant="subtitle1">
            A JavaScript library for building user interfaces.
          </Typography>
        </Typography>
        <Typography variant="h6">
          React-Router:
          <Typography variant="subtitle1">A JavaScript routing library for React.</Typography>
        </Typography>
        <Typography variant="h6">
          Material-UI:
          <Typography variant="subtitle1">A library for building user interfaces.</Typography>
        </Typography>
        <Typography variant="h6">
          Formik:
          <Typography variant="subtitle1">A library for building forms in React.</Typography>
        </Typography>
        <Typography variant="h6">
          Yup:
          <Typography variant="subtitle1">A library for validating forms in React.</Typography>
        </Typography>
        <Typography variant="h6">
          Moment:
          <Typography variant="subtitle1">
            A JavaScript date library for parsing, validating, and formatting dates.
          </Typography>
        </Typography>
        <Typography variant="h6">
          GoogleMaps:
          <Typography variant="subtitle1">A JavaScript API for Google Maps.</Typography>
        </Typography>
        <Typography variant="h6">
          Axios:
          <Typography variant="subtitle1">
            A Promise based HTTP client for the browser and node.js.
          </Typography>
        </Typography>
      </Box>
    </Container>
  );
};

export { Home };
