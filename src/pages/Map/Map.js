import React from 'react';

import { Box, Container, Grid } from '@mui/material';
import GMap from '../../components/gMap/gMap';
import { MapSelection } from '../../components';
import { styles } from '../styles/styles';

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
        <Grid item xs={12} sm={4} sx={styles.outerGridItem}>
          <MapSelection
            selectedAEmployee={selectedAEmployee}
            selectedAttribute={selectedAttribute}
            handleEmployeeChange={handleEmployeeChange}
            handleAttributeChange={handleAttributeChange}
            setMarkerSelected={setMarkerSelected}
          />
        </Grid>

        <Grid item xs={12} sm={8} sx={styles.gridItem}>
          <Box ref={containerRef} sx={styles.box}>
            <GMap selected={markerSelected} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default React.memo(EmployeesMap);
