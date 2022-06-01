import React from 'react';
import { EmployeeList, AttributeEdit, EmployeeForm } from '../../components';

import { Col, Container, Row } from 'react-bootstrap';
import { useEmployees } from './hooks/useEmployees';

const Employees = () => {
  const props = useEmployees();
  return (
    <Container>
      <Row bsPrefix="attribute-list">
        <Col xs={12} sm={4} className="shadow p-2 pt-5 front">
          <EmployeeList {...props} />
        </Col>
        {props.isAdding && (
          <Col xs={12} sm={8} className="p-4 pt-5 transition-fadeIn">
            <EmployeeForm {...props} />
          </Col>
        )}
        {props.isEditing.open && (
          <Col xs={12} sm={8} className=" p-4 pt-5 transition-fadeIn">
            <AttributeEdit {...props} />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export { Employees };
