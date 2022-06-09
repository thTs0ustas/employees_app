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
import { empFormStyles } from './styles/empFormStyles';

const EmployeeForm = ({ addEmployee, isAdding, setIsAdding }) => {
  const formik = useEmployeeForm(addEmployee);
  const options = attributeList.map((item) => item.name);

  return (
    <Box component="form">
      <Typography variant="h2" component="h3" sx={empFormStyles.typo}>
        NEW EMPLOYEE
      </Typography>
      <TextField
        name="fullName"
        sx={empFormStyles.textField}
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
        sx={empFormStyles.textField}
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
        sx={empFormStyles.textField}
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
        sx={empFormStyles.textField}
        type="date"
        margin="normal"
        onChange={formik.handleChange}
        error={!!formik.errors.birthDate}
        label="Date of Birth: "
        value={formik.values.birthDate}
        helperText={formik.errors.birthDate}
        InputLabelProps={{ shrink: true }}
      />

      <FormControl sx={empFormStyles.select}>
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
      <FormControl sx={empFormStyles.checkbox}>
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
      <ButtonGroup aria-label="button group" sx={empFormStyles.button}>
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
