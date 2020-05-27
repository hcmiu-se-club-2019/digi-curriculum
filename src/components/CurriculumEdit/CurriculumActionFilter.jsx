import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styled from "styled-components";

const SelectGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

function EnglishLevelButton(props) {
  return (
    <Button
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "40px",
        padding: "0px",
      }}
    >
      {props.name}
    </Button>
  );
}

const Select = styled.div`
  text-align: center;
  font-size: 12px;
  /* padding-top: 10px; */
  padding-bottom: 5px;
`;

function SelectItem(props) {
  return (
    <Select>
      <div style={{ fontSize: "20px", fontWeight: "bold" }}>Major</div>
      <div>
        <Form.Control as="select" custom style={{ maxWidth: "220px" }}>
          <option>BA - Business Administration</option>
          <option>IT - Information Technology</option>
          <option>EE - Electrical Engineering</option>
        </Form.Control>
      </div>
    </Select>
  );
}

const ActionButton = props => {
  return (
    <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
      <Button
        variant={"outline-success"}
        style={{
          width: "140px",
          height: "40px",
          fontSize: "16px",
          wordWrap: true,
        }}
      >
        {props.name ?? "Button"}
      </Button>
    </div>
  );
};

class CurriculumActionFilter extends Component {
  render() {
    return (
      <Row noGutters>
        <Col xl={5}>
          <Container fluid>
            <Row as={SelectGroup}>
              <Col sm={"auto"} md={"auto"} lg={"auto"} xl={"auto"}>
                <SelectItem />
              </Col>
              <Col sm={"auto"} md={"auto"} lg={"auto"} xl={"auto"}>
                <SelectItem />
              </Col>
              <Col sm={"auto"} md={"auto"} lg={"auto"} xl={"auto"}>
                <SelectItem />
              </Col>
            </Row>
          </Container>
        </Col>
        <Col
          xl={2}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Row style={{ textAlign: "center" }}>
            <Col xl={12} style={{ fontWeight: "bold", fontStyle: "italic" }}>
              English Entrance
            </Col>
            <Col
              xl={12}
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "5px",
              }}
            >
              <EnglishLevelButton name="IE1" />
              <EnglishLevelButton name="IE2" />
              <EnglishLevelButton name="IE3" />
            </Col>
          </Row>
        </Col>
        <Col xl={5}>
          <Container fluid>
            <Row as={SelectGroup}>
              <Col sm={"auto"} md={"auto"} lg={"auto"} xl={"auto"}>
                <ActionButton name="Reset" />
              </Col>
              <Col sm={"auto"} md={"auto"} lg={"auto"} xl={"auto"}>
                <ActionButton name="Discard Change" />
              </Col>
              <Col sm={"auto"} md={"auto"} lg={"auto"} xl={"auto"}>
                <ActionButton name="Save Change" />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    );
  }
}

export default CurriculumActionFilter;
