import React from 'react';

import { Box, Container, Grid } from '@mui/material';
import GMap from '../../components/gMap/gMap';
import { MapSelection } from '../../components';

const EmployeesMap = () => {
  const containerRef = React.useRef(null);

  const [selectedAttribute, setSelectedAttribute] = React.useState('');
  const [selectedAEmployee, setSelectedAEmployee] = React.useState(null);
  const [markerSelected, setMarkerSelected] = React.useState(null);

  const handleAttributeChange = (event) => {
    setSelectedAttribute(event.target.value);
    if (!event.target.value) setSelectedAEmployee(null);
  };
  const handleEmployeeChange = (employee) => {
    if (selectedAEmployee === null || selectedAEmployee !== employee.id) {
      setSelectedAEmployee(employee.id);
    } else setSelectedAEmployee(null);
  };
  return (
    <Container>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            padding: '5em 2em 0 2em',
            boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
            height: '90vh',
          }}
        >
          <MapSelection
            selectedAEmployee={selectedAEmployee}
            selectedAttribute={selectedAttribute}
            handleEmployeeChange={handleEmployeeChange}
            handleAttributeChange={handleAttributeChange}
            setMarkerSelected={setMarkerSelected}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={8}
          sx={{
            padding: '2em',
            height: '90vh',
          }}
        >
          <Box ref={containerRef} sx={{ overflow: 'hidden', width: '100%' }}>
            <GMap selected={markerSelected} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default React.memo(EmployeesMap);
