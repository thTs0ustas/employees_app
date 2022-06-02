import React from 'react';
import { AttributeForm, AttributeList, AttributeEdit } from '../../components';
import './attributeList.css';

import { useAttribute } from './hooks/useAttribute';
import { Box, Container, Grid, Slide } from '@mui/material';

const Attributes = () => {
  const containerRef = React.useRef(null);
  const props = useAttribute();
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
          <AttributeList {...props} />
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
                  <AttributeForm {...props} />
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
                  <AttributeEdit {...props} />
                </Grid>
              </Slide>
            </Box>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export { Attributes };
