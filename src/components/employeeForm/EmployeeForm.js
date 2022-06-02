import React from 'react';

import { useEmployeeForm } from './hooks/useEmployeeForm';
import attributeList from '../../data/ATTRIBUTE_LIST';
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
  Button,
  ButtonGroup,
} from '@mui/material';

const EmployeeForm = ({ addEmployee, isAdding, setIsAdding }) => {
  const formik = useEmployeeForm(addEmployee);
  const options = attributeList.map((item) => item.name);

  return (
    <Box component="form">
      <Typography variant="h2" component="h3" sx={{ fontSize: 24, fontWeight: 700 }}>
        NEW EMPLOYEE
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
        error={!!formik.errors.address}
        label="Town: "
        value={formik.values.address.town}
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
          Add
        </Button>
        <Button onClick={() => setIsAdding(!isAdding)} variant="contained" color="secondary">
          Close
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export { EmployeeForm };
