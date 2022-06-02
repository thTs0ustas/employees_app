import React from 'react';

import { Box, Container, Grid } from '@mui/material';
import GMap from '../../components/gMap/gMap';

const EmployeesMap = () => {
  const containerRef = React.useRef(null);

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
          Employee List
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
            {/*<Slide direction="right" container={containerRef.current}>*/}
            {/*<Grid item xs={12}>*/}
            <GMap />
            {/*</Grid>*/}
            {/*</Slide>*/}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default React.memo(EmployeesMap);
