import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

const SelectGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

function EnglishLevelButton(props) {
  return (
    <Button
      style={{
        width: '40px',
        height: '40px',
        borderRadius: '40px',
        margin: '2px',
        padding: '0px',
        textAlign: 'center',
      }}
    >
      {props.name}
    </Button>
  );
}

const Select = styled.div`
  text-align: center;
  font-size: 12px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

function SelectItem(props) {
  return (
    <Select>
      <Form.Control as="select" key={props.title} custom style={{ maxWidth: '200px' }}>
        <option hidden>{props.title}</option>
        {props.orders ? props.orders.map((order) => <option key={order}>{props.options[order].name}</option>) : ''}
      </Form.Control>
    </Select>
  );
}

const ActionButton = (props) => {
  return (
    <div style={{ paddingTop: '5px', paddingBottom: '5px' }}>
      <Button
        variant={'outline-success'}
        style={{
          width: '140px',
          height: '38px',
          fontSize: '16px',
          wordWrap: true,
        }}
      >
        {props.name ?? 'Button'}
      </Button>
    </div>
  );
};

const filterData = {
  majors: {
    IT: {
      id: 'IT',
      name: 'IT - Information Technology',
    },
    BA: {
      id: 'BA',
      name: 'BA - Business Administration',
    },
    EE: {
      id: 'EE',
      name: 'EE - Electrical Engineering',
    },
  },
  majorOrders: ['BA', 'IT', 'EE'],
};

class CurriculumActionFilter extends Component {
  render() {
    return (
      <Row noGutters style={{ padding: '5px', backgroundColor: 'white' }}>
        <Col xl={5}>
          <Container fluid>
            <Row as={SelectGroup}>
              <Col sm={'auto'} md={'auto'} lg={'auto'} xl={'auto'}>
                <SelectItem title="Major" options={filterData.majors} orders={filterData.majorOrders} />
              </Col>
              <Col sm={'auto'} md={'auto'} lg={'auto'} xl={'auto'}>
                <SelectItem title="Specialized Major" options={filterData.majors} orders={filterData.majorOrders} />
              </Col>
              <Col sm={'auto'} md={'auto'} lg={'auto'} xl={'auto'}>
                <SelectItem title="Program Type" options={filterData.majors} orders={filterData.majorOrders} />
              </Col>
            </Row>
          </Container>
        </Col>
        <Col
          xl={2}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Row style={{ textAlign: 'center' }}>
            <Col
              style={{
                display: 'flex',
                justifyContent: 'center',
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
              <Col sm={'auto'} md={'auto'} lg={'auto'} xl={'auto'}>
                <ActionButton name="Reset" />
              </Col>
              <Col sm={'auto'} md={'auto'} lg={'auto'} xl={'auto'}>
                <ActionButton name="Discard Change" />
              </Col>
              <Col sm={'auto'} md={'auto'} lg={'auto'} xl={'auto'}>
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
