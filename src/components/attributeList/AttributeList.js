import React from 'react';
import { List, Button, ListItemButton, Typography, Divider } from '@mui/material';
import { attrListStyles } from './styles/attrListStyles';

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
        sx={attrListStyles.button}
        color="primary"
        disabled={isAdding}
        onClick={() => setIsAdding(!isAdding)}
        variant="contained"
      >
        Add
      </Button>
      <List sx={attrListStyles.list}>
        {attributeList.map((attribute) => (
          <>
            <ListItemButton
              sx={attrListStyles.listItem}
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
