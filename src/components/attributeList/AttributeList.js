import React from 'react';
import { List, Button, ListItemButton, Typography, Divider } from '@mui/material';
const AttributeList = ({ setIsEditing, isAdding, setIsAdding, attributeList }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <Typography variant="h4" component="h2" gutterBottom>
        Attribute List
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
        {attributeList.map((attribute) => (
          <>
            <ListItemButton
              sx={{
                marginTop: 1,
                borderRadius: '5px',
                width: '100%',
                bgcolor: 'grey.300',
              }}
              key={attribute.id}
              selected={selectedIndex === attribute.id}
              onClick={(event) => {
                handleListItemClick(event, attribute.id);
                setIsEditing({ open: true, id: attribute.id });
              }}
            >
              {attribute.name}
            </ListItemButton>
          </>
        ))}
      </List>
    </>
  );
};

export { AttributeList };
