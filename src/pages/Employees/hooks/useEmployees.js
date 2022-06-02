import React from 'react';
import employeeList from '../../../data/EMPLOYEE_LIST';
import { remove } from 'lodash';

const useEmployees = () => {
  const [isAdding, setAdd] = React.useState(false);
  const [isEditing, setEdit] = React.useState({ open: false, id: null });
  const [employees, setEmployees] = React.useState(employeeList);

  const addEmployee = (input) => {
    let employee = { id: employeeList.length, info: input };
    setEmployees((prev) => [...prev, employee]);
    employeeList.push(employee);
    setIsAdding(!isAdding);
  };

  const editEmployee = (id, input) => {
    let employee = employees.find((employee) => employee.id === id);
    employee.info = { ...employee.info, ...input };
    setEmployees((prev) => [...prev, employee]);
    setIsEditing({ open: false, id: null });
  };

  const deleteEmployee = (id) => {
    const newEmployees = employees.filter((attribute) => attribute.id !== id);
    setEmployees([...newEmployees]);
    remove(employeeList, (employee) => employee.id === id);
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
