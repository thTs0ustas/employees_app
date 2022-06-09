import React from 'react';
import { EmployeeList, EmployeeEdit, EmployeeForm } from '../../components';

import { useEmployees } from './hooks/useEmployees';

import { Box, Grid, Slide, Container, Snackbar, Alert } from '@mui/material';
import { styles } from '../styles/styles';

const Employees = () => {
  const props = useEmployees();
  const containerRef = React.useRef(null);

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={4} sx={styles.outerGridItem}>
          <EmployeeList {...props} />
        </Grid>
        {props.isAdding && (
          <Grid item xs={12} sm={8} sx={styles.gridItem}>
            <Box ref={containerRef} sx={styles.box}>
              <Slide direction="right" container={containerRef.current} in={props.isAdding}>
                <Grid item xs={12}>
                  <EmployeeForm {...props} />
                </Grid>
              </Slide>
            </Box>
          </Grid>
        )}
        {props.isEditing.open && (
          <Grid item xs={12} sm={8} sx={styles.gridItem}>
            <Box ref={containerRef} sx={styles.box}>
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
