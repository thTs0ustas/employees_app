import React from 'react';
import { Button, ButtonGroup, Form } from 'react-bootstrap';
import { useEmployeeForm } from './hooks/useEmployeeForm';
import attributeList from '../../data/ATTRIBUTE_LIST';
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import employeeList from '../../data/EMPLOYEE_LIST';

const EmployeeForm = ({ addEmployee, isAdding, setIsAdding }) => {
  console.log(employeeList);
  const formik = useEmployeeForm(addEmployee);
  const options = attributeList.map((item) => item.name);
  console.log(formik);
  return (
    <Form noValidate>
      <h3>NEW EMPLOYEE</h3>
      <Form.Group controlId="formFullName">
        <Form.Label>Full Name:</Form.Label>
        <Form.Control
          onChange={formik.handleChange}
          name="fullName"
          type="text"
          value={formik.values.fullName}
          isInvalid={!!formik.errors.fullName}
          placeholder="Enter full name"
        />
        <Form.Control.Feedback type="invalid">{formik.errors.fullName}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formBasicText" className="mt-3">
        <Form.Label>Address:</Form.Label>
        <Form.Control
          onChange={formik.handleChange}
          name="address"
          type="address"
          value={formik.values.address}
          isInvalid={!!formik.errors.address}
          placeholder="Enter Address"
        />
        <Form.Control.Feedback type="invalid">{formik.errors.address}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formBasicText" className="mt-3">
        <Form.Label>Date of Birth:</Form.Label>
        <Form.Control
          onChange={formik.handleChange}
          name="birthDate"
          type="date"
          value={formik.values.birthDate}
          isInvalid={!!formik.errors.birthDate}
          placeholder="Enter date of birth"
        />
        <Form.Control.Feedback type="invalid">{formik.errors.birthDate}</Form.Control.Feedback>
      </Form.Group>
      <FormControl sx={{ mt: 5, width: 300 }}>
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
      <Form.Group controlId="formBasicText" className="mt-3">
        <Form.Check
          onChange={formik.handleChange}
          name="hasCar"
          type="checkbox"
          id="hasCar"
          label="Has Car"
          value={formik.values.hasCar}
          isInvalid={!!formik.errors.hasCar}
        />
      </Form.Group>
      <ButtonGroup aria-label="button group" className="mt-5">
        <Button
          disabled={!!formik.errors.attribute}
          type="submit"
          onClick={formik.handleSubmit}
          variant="outline-primary"
        >
          Add
        </Button>
        <Button onClick={() => setIsAdding(!isAdding)} variant="outline-secondary">
          Close
        </Button>
      </ButtonGroup>
    </Form>
  );
};

export { EmployeeForm };
