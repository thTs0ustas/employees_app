import React from 'react';
import { Typography, Button, Divider, ListItemButton, List } from '@mui/material';
import { empListStyles } from './styles/empFormStyles';

const EmployeeList = ({ setIsEditing, isAdding, setIsAdding, employeeList }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <Typography variant="h4" component="h2" gutterBottom>
        Employee List
      </Typography>

      <Divider />
      <Button
        sx={empListStyles.button}
        color="primary"
        disabled={isAdding}
        onClick={() => setIsAdding(!isAdding)}
        variant="contained"
      >
        Add
      </Button>
      <List sx={empListStyles.list}>
        {employeeList.map((employee) => (
          <ListItemButton
            sx={empListStyles.listItem}
            key={employee.id}
            selected={selectedIndex === employee.id}
            onClick={(event) => {
              handleListItemClick(event, employee.id);
              setIsEditing({ open: true, id: employee.id });
            }}
          >
            {employee.info.fullName}
          </ListItemButton>
        ))}
      </List>
    </>
  );
};

export { EmployeeList };
