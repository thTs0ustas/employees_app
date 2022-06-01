import React from 'react';
import attributeList from '../../../data/ATTRIBUTE_LIST';

const useAttribute = () => {
  const [isAdding, setAdd] = React.useState(false);
  const [isEditing, setEdit] = React.useState({ open: false, id: null });
  const [attributes, setAttributes] = React.useState(attributeList);

  const addAttribute = (input) => {
    let attribute = { id: attributeList.length, name: input };
    setAttributes([...attributes, attribute]);
    attributeList.push(attribute);
    setIsAdding(!isAdding);
  };

  const editAttribute = (id, input) => {
    let attribute = attributes.find((attribute) => attribute.id === id);
    attribute.name = input;
    setAttributes([...attributes]);
    setIsEditing({ open: false, id: null });
  };

  const deleteAttribute = (id) => {
    const newAttributes = attributes.filter((attribute) => attribute.id !== id);
    setAttributes([...newAttributes]);
    attributeList.splice(id, 1);
    setIsEditing({ open: false, id: null });
  };

  const setIsAdding = () => {
    setAdd(!isAdding);
    setEdit({ ...isEditing, open: false });
  };
  const setIsEditing = ({ open = true, id }) => {
    setEdit({ open, id });
    isAdding && setAdd(false);
  };

  return {
    deleteAttribute,
    editAttribute,
    attributeList,
    isAdding,
    setIsAdding,
    isEditing,
    setIsEditing,
    attributes,
    setAttributes,
    addAttribute,
  };
};

export { useAttribute };
