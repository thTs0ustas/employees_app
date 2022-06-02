import React from 'react';
import { Typography, Button, Divider, ListItemButton, List } from '@mui/material';

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
        sx={{ width: 100, marginTop: 2 }}
        color="primary"
        disabled={isAdding}
        onClick={() => setIsAdding(!isAdding)}
        variant="contained"
      >
        Add
      </Button>
      <List sx={{ marginTop: 5, bgcolor: 'gray.600' }}>
        {employeeList.map((employee) => (
          <ListItemButton
            sx={{
              marginTop: 1,
              borderRadius: '5px',
              width: '100%',
              bgcolor: 'grey.300',
            }}
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
