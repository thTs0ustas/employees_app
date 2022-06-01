import React from 'react';
import employeeList from '../../../data/EMPLOYEE_LIST';

const useEmployees = () => {
  const [isAdding, setAdd] = React.useState(false);
  const [isEditing, setEdit] = React.useState({ open: false, id: null });
  const [employees, setEmployees] = React.useState(employeeList);

  const addEmployee = (input) => {
    console.log('Hook', input);
    let employee = { id: employeeList.length, info: input };
    setEmployees((prev) => [...prev, employee]);
    employeeList.push(employee);
    setIsAdding(!isAdding);
  };

  const editEmployee = (id, input) => {
    let attribute = employees.find((attribute) => attribute.id === id);
    attribute.name = input;
    setEmployees([...employees]);
    setIsEditing({ open: false, id: null });
  };

  const deleteEmployee = (id) => {
    const newAttributes = employees.filter((attribute) => attribute.id !== id);
    setEmployees([...newAttributes]);
    employeeList.splice(id, 1);
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
    deleteEmployee,
    editEmployee,
    employeeList,
    isAdding,
    setIsAdding,
    isEditing,
    setIsEditing,
    employees,
    setEmployees,
    addEmployee,
  };
};

export { useEmployees };
