import React from 'react';
import { AttributeForm, AttributeList, AttributeEdit } from '../../components';
import './attributeList.css';

import { Col, Container, Row } from 'react-bootstrap';
import { useAttribute } from './hooks/useAttribute';

const Attributes = () => {
  const props = useAttribute();
  return (
    <Container>
      <Row bsPrefix="attribute-list">
        <Col xs={4} className="shadow p-2 pt-5 front">
          <AttributeList {...props} />
        </Col>
        {props.isAdding && (
          <Col xs={8} className="p-4 pt-5 transition-fadeIn">
            <AttributeForm {...props} />
          </Col>
        )}
        {props.isEditing.open && (
          <Col xs={8} className=" p-4 pt-5 transition-fadeIn">
            <AttributeEdit {...props} />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export { Attributes };
