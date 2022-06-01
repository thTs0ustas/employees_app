import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

const EmployeeList = ({ setIsEditing, isAdding, setIsAdding, employeeList }) => {
  console.log('EmployeeList', employeeList);
  return (
    <>
      <h3>Employee List</h3>
      <Button disabled={isAdding} onClick={() => setIsAdding(!isAdding)} variant={'outline-info'}>
        Add
      </Button>
      <ListGroup className="mt-5">
        {employeeList?.map((employee) => (
          <ListGroup.Item
            as={'button'}
            variant="success"
            action
            key={employee.id}
            onClick={() => setIsEditing({ open: true, id: employee.id })}
          >
            {employee.info.fullName}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export { EmployeeList };
