import React from 'react';

import { useAttributeForm } from './hooks/useAttributeForm';
import { TextField, Typography, ButtonGroup, Button, Box } from '@mui/material';
import { attrFormStyles } from './styles/attrFormStyles';

const AttributeForm = ({ attributes, addAttribute, isAdding, setIsAdding }) => {
  const formik = useAttributeForm(attributes, addAttribute);

  return (
    <Box component="form">
      <Typography variant="h2" component="h3" sx={attrFormStyles.typo}>
        ADD NEW ATTRIBUTE
      </Typography>
      <TextField
        name="attribute"
        sx={attrFormStyles.textField}
        type="text"
        margin="normal"
        onChange={formik.handleChange}
        error={formik.errors.attribute}
        label="Attribute Name:"
        value={formik.values.attribute}
        helperText={formik.errors.attribute}
      />

      <ButtonGroup aria-label="button group">
        <Button
          disabled={!!formik.errors.attribute}
          type="submit"
          onClick={formik.handleSubmit}
          variant="contained"
          color="primary"
        >
          Add
        </Button>
        <Button onClick={() => setIsAdding(!isAdding)} variant="contained" color="secondary">
          Close
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export { AttributeForm };
