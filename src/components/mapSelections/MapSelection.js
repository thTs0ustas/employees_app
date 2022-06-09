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
import { mapSelectionStyles } from './styles/mapSelectionStyles';

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
      <FormControl variant="standard" sx={mapSelectionStyles.attrSelections}>
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
      <List sx={mapSelectionStyles.list}>
        {employeeList
          .filter((employee) => employee.info.attributes.includes(selectedAttribute))
          .map((employee) => (
            <ListItemButton
              sx={mapSelectionStyles.listItem}
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
