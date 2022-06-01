import React from 'react';
import { Form } from 'react-bootstrap';
import { useAttributeEdit } from './hooks/useAttributeEdit';
import { TextField, Typography, Button, ButtonGroup } from '@mui/material';

const AttributeEdit = ({
  editAttribute,
  deleteAttribute,
  attributes,
  setIsEditing,
  isEditing: { id },
}) => {
  const formik = useAttributeEdit(attributes, editAttribute, id);
  return (
    <Form noValidate>
      <Typography variant="h2" component="h3" sx={{ fontSize: 24, fontWeight: 700 }}>
        EDIT ATTRIBUTE
      </Typography>
      <TextField
        name="attribute"
        sx={{ width: '90%' }}
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
    </Form>
  );
};

export { AttributeEdit };
