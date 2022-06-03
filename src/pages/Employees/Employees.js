import React from 'react';
import { EmployeeList, EmployeeEdit, EmployeeForm } from '../../components';

import { useEmployees } from './hooks/useEmployees';

import { Box, Grid, Slide, Container, Snackbar, Alert } from '@mui/material';

const Employees = () => {
  const props = useEmployees();
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
          <EmployeeList {...props} />
        </Grid>
        {props.isAdding && (
          <Grid
            item
            xs={12}
            sm={8}
            sx={{
              padding: '5em 2em 0 2em',
              height: '90vh',
            }}
          >
            <Box ref={containerRef} sx={{ overflow: 'hidden', width: '100%' }}>
              <Slide direction="right" container={containerRef.current} in={props.isAdding}>
                <Grid item xs={12}>
                  <EmployeeForm {...props} />
                </Grid>
              </Slide>
            </Box>
          </Grid>
        )}
        {props.isEditing.open && (
          <Grid
            item
            xs={12}
            sm={8}
            sx={{
              padding: '5em 2em 0 2em',
              height: '90vh',
            }}
          >
            <Box ref={containerRef} sx={{ overflow: 'hidden', width: '100%' }}>
              <Slide direction="right" container={containerRef.current} in={props.isEditing.open}>
                <Grid item xs={12}>
                  <EmployeeEdit {...props} />
                </Grid>
              </Slide>
            </Box>
          </Grid>
        )}
      </Grid>
      <Snackbar open={props.open} autoHideDuration={6000} onClose={() => props.setOpen(false)}>
        <Alert onClose={() => props.setOpen(false)} severity="success" sx={{ width: '100%' }}>
          Successfully saved
        </Alert>
      </Snackbar>
    </Container>
  );
};

export { Employees };
