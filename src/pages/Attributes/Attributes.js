import React from 'react';
import { AttributeForm, AttributeList, AttributeEdit } from '../../components';
import './attributeList.css';

import { useAttribute } from './hooks/useAttribute';
import { Box, Container, Grid, Slide } from '@mui/material';
import { styles } from '../styles/styles';

const Attributes = () => {
  const containerRef = React.useRef(null);
  const props = useAttribute();
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={4} sx={styles.outerGridItem}>
          <AttributeList {...props} />
        </Grid>
        {props.isAdding && (
          <Grid item xs={12} sm={8} sx={styles.gridItem}>
            <Box ref={containerRef} sx={styles.box}>
              <Slide direction="right" container={containerRef.current} in={props.isAdding}>
                <Grid item xs={12}>
                  <AttributeForm {...props} />
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
