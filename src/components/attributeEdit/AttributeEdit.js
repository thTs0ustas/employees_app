import React from 'react';

import { useAttributeEdit } from './hooks/useAttributeEdit';
import { TextField, Typography, Button, ButtonGroup, Box } from '@mui/material';
import { attrEditStyles } from './styles/attrEditStyles';

const AttributeEdit = ({
  editAttribute,
  deleteAttribute,
  attributes,
  setIsEditing,
  isEditing: { id },
}) => {
  const formik = useAttributeEdit(attributes, editAttribute, id);
  return (
    <Box component="form">
      <Typography variant="h2" component="h3" sx={attrEditStyles.typo}>
        EDIT ATTRIBUTE
      </Typography>
      <TextField
        name="attribute"
        sx={attrEditStyles.textField}
        type="text"
        margin="normal"
        onChange={formik.handleChange}
        error={!!formik.errors.attribute}
        label="Attribute Name:"
        value={formik.values.attribute}
        helperText={
          formik.errors.attribute ? formik.errors.attribute : 'This attribute will be updated.'
        }
      />

      <ButtonGroup sx={{ marginTop: 5 }}>
        <Button
          disabled={!!formik.errors.attribute}
          type="submit"
          onClick={formik.handleSubmit}
          variant="contained"
          color="primary"
        >
          Update
        </Button>
        <Button onClick={() => deleteAttribute(id)} variant="contained" color="error">
          Delete
        </Button>
        <Button
          onClick={() => setIsEditing({ open: false, id: null })}
          variant="contained"
          color="info"
        >
          Close
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export { AttributeEdit };
