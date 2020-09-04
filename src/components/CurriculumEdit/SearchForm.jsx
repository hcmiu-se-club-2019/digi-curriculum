import React from "react";
import { Form, Row, Col } from "react-bootstrap";

function SearchForm() {
  return (
    <Row>
      <Col lg={6} xl={6}>
        <Form.Control as="input" type="text" placeholder="Find course" />
      </Col>
      <Col lg={6} xl={6}>
        <Form.Control as="select">
          <option>All major</option>
          <option>BA - Business Administration</option>
          <option>IT - Information Technology</option>
          <option>EE - Electrical Engineering</option>
        </Form.Control>
      </Col>
    </Row>
  );
}

export default SearchForm;
