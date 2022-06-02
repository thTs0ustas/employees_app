import React from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import attributeList from '../../data/ATTRIBUTE_LIST';
import { useEmployeeEdit } from './hooks/useEmployeeEdit';

const EmployeeEdit = ({
  editEmployee,
  deleteEmployee,
  employees,
  setIsEditing,
  isEditing: { id },
}) => {
  const formik = useEmployeeEdit(employees, editEmployee, id);

  const options = attributeList.map((item) => item.name);
  return (
    <Box component="form">
      <Typography variant="h2" component="h3" sx={{ fontSize: 24, fontWeight: 700 }}>
        EDIT EMPLOYEE
      </Typography>
      <TextField
        name="fullName"
        sx={{ width: '90%' }}
        type="text"
        margin="normal"
        onChange={formik.handleChange}
        error={!!formik.errors.fullName}
        label="Full Name: "
        value={formik.values.fullName}
        helperText={formik.errors.fullName}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        name="address"
        sx={{ width: '90%' }}
        type="text"
        margin="normal"
        onChange={formik.handleChange}
        error={!!formik.errors.address}
        label="Address: "
        value={formik.values.address}
        helperText={formik.errors.address}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        name="town"
        sx={{ width: '90%' }}
        type="text"
        margin="normal"
        onChange={formik.handleChange}
        error={!!formik.errors.town}
        label="Town: "
        value={formik.values.town}
        helperText={formik.errors.town}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        name="birthDate"
        sx={{ width: '90%' }}
        type="date"
        margin="normal"
        onChange={formik.handleChange}
        error={!!formik.errors.birthDate}
        label="Date of Birth: "
        value={formik.values.birthDate}
        helperText={formik.errors.birthDate}
        InputLabelProps={{ shrink: true }}
      />

      <FormControl sx={{ width: 300, '&.MuiFormControl-root': { marginTop: '16px' } }}>
        <InputLabel id="selectAtr">Attributes</InputLabel>
        <Select
          labelId="selectAtr"
          multiple
          onChange={formik.handleChange}
          name="attributes"
          value={formik.values.attributes}
          placeholder="Select attributes"
          input={<OutlinedInput label="Attributes" />}
          MenuProps={options}
        >
          {attributeList.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ mt: 5, width: 300, display: 'block' }}>
        <FormControlLabel
          name="hasCar"
          control={<Checkbox />}
          label="Has a Car"
          labelPlacement="end"
          onChange={formik.handleChange}
          value={formik.values.hasCar}
          isInvalid={!!formik.errors.hasCar}
        />
      </FormControl>
      <ButtonGroup aria-label="button group" sx={{ mt: 5 }}>
        <Button
          disabled={!!formik.errors.attribute}
          type="submit"
          onClick={formik.handleSubmit}
          variant="contained"
          color="primary"
        >
          Update
        </Button>
        <Button onClick={() => deleteEmployee(id)} variant="contained" color="error">
          Delete
        </Button>
        <Button
          onClick={() => setIsEditing({ open: false, id: null })}
          variant="contained"
          color="secondary"
        >
          Close
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export { EmployeeEdit };
