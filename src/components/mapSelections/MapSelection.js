import React from 'react';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  List,
  ListItemButton,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import attributeList from '../../data/ATTRIBUTE_LIST';
import employeeList from '../../data/EMPLOYEE_LIST';
import { isNull } from 'lodash';

const MapSelection = ({
  selectedAttribute,
  selectedAEmployee,
  handleAttributeChange,
  handleEmployeeChange,
  setMarkerSelected,
}) => {
  return (
    <Box>
      <Typography variant="h4" component="h2" gutterBottom>
        Attribute Selection
      </Typography>
      <FormControl
        variant="standard"
        sx={{ margin: '1px 1px 10px 1px ', minWidth: 120, width: '100%' }}
      >
        <InputLabel id="attribute-list">Attributes</InputLabel>
        <Select
          labelId="attribute-list"
          id="attribute-list"
          value={selectedAttribute}
          onChange={handleAttributeChange}
          label="Attributes"
        >
          <MenuItem value={null}>-</MenuItem>
          {attributeList.map((attribute, index) => (
            <MenuItem key={index.id} value={attribute.id}>
              {attribute.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Typography variant="p" component="h3" gutterBottom>
        Employees With Selected Attribute
      </Typography>
      <List sx={{ marginTop: 5, bgcolor: 'gray.600', height: '90%' }}>
        {employeeList
          .filter((employee) => employee.info.attributes.includes(selectedAttribute))
          .map((employee) => (
            <ListItemButton
              sx={{
                marginTop: 1,
                borderRadius: '5px',
                width: '100%',
                bgcolor: 'grey.300',
              }}
              key={employee.id}
              selected={selectedAEmployee === employee.id}
              onClick={() => handleEmployeeChange(employee)}
            >
              {employee.info.fullName}
            </ListItemButton>
          ))}
      </List>

      <Button
        onClick={() => setMarkerSelected(!isNull(selectedAEmployee) ? selectedAEmployee : null)}
        variant="contained"
      >
        Continue
      </Button>
    </Box>
  );
};

export { MapSelection };
