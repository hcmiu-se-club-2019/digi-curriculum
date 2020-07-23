import React, { Component, Fragment } from "react";
import { Table, Form, FormGroup, Label, Input, Button, InputGroup } from "reactstrap";

// import { Field } from 'formik';

// import FormModal from '../../common/FormModal'
// import Input from '../../common/FormModal/Input'

const TabDisplayForm = (props) => {
  const { values } = props;
  return (
    <div className="row mt-2">
      <div className="col-md-5">
        <div>
          <h5>COURSE IMPLEMENTATION</h5>
        </div>
        <div className="course-detail-fields">
          <Table bordered>
            <caption className='text-center'>Course Time Implementation</caption>
            <thead>
              <tr>
                <th scope='col'>Type</th>
                <th scope='col'>Number of Weeks</th>
                <th scope='col'>Periods Per Week</th>
              </tr>
            </thead>
            <tbody>
              {
                typeof values.implementation === 'object' 
                && typeof values.implementation.times === 'object' 
                && values.implementation.times.map((time, index) => 
                  <tr key={index}>
                    <td>{time.type}</td>
                    <td>{time.weekNum}</td>
                    <td>{time.periodsPerWeek}</td>
                  </tr>
                )
              }
            </tbody>
          </Table>
          <Table bordered>
            <caption className='text-center'>Teaching and Learning Activities</caption>
            <thead>
              <tr>
                <th scope='col'>Type</th>
                <th scope='col'>Forms</th>
              </tr>
            </thead>
            <tbody>
              {
                typeof values.implementation === 'object' 
                && typeof values.implementation.activities === 'object' 
                && values.implementation.activities.map((activity, index) => 
                  <tr key={index}>
                    <td>{activity.type}</td>
                    <td>{activity.forms ?? 'null'}</td>
                  </tr>
                )
              }
            </tbody>
          </Table>
        </div>
        <span class="d-md-none"><hr></hr></span>
      </div>
      <div className="col-md-6 offset-sm-1">
        <div>
          <h5>COURSE OUTLINE</h5>
        </div>
        <div className="course-detail-fields">
          <Table bordered >
            <thead>
              <tr>
                <th scope='col'>Week</th>
                <th scope='col'>Topics</th>
              </tr>
            </thead>
            <tbody>
              {
                typeof values.implementation === 'object' 
                && typeof values.implementation.outlines === 'object' 
                && values.implementation.outlines.map((outline, index) => 
                  <Fragment key={index}>
                    <tr>
                      <td rowSpan={outline.topics.length}>{outline.week}</td>
                      <td>{outline.topics[0]}</td>
                    </tr>
                    {
                      typeof outline.topics === 'object' && [...outline.topics].slice(1, outline.topics.length).map((topic, index) =>
                        <tr key={index}>
                          <td>{topic}</td>
                        </tr>
                      )
                    }
                  </Fragment>
                )
              }
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

const TabEditForm = props => {
  const { implementation } = props.values
  return (
    <Form>
      <div className="row mt-2">
        <div className="col-md-12">
          <div>
            <h5>COURSE IMPLEMENTATION</h5>
          </div>
          <div className="course-detail-fields">
            <h6>Time Implementation</h6>
            {
              typeof implementation.times === 'object' && implementation.times.map((time, index) => 
                <Fragment key={index}>
                  <InputGroup className='mb-2'>
                    <Label for='type'>Time Type</Label>
                    <Input
                      className='ml-2'
                      name='type'
                      type='text'
                      value={time.type}
                    />
                    <Label className='ml-2' for='weekNum'>Number of Weeks</Label>
                    <Input
                      className='ml-2'
                      name='weekNum'
                      type='number'
                      value={time.weekNum}
                    />
                    <Label className='ml-2' for='periodsPerWeek'>Number of Periods per Week</Label>
                    <Input
                      className='ml-2'
                      name='periodsPerWeek'
                      type='number'
                      value={time.periodsPerWeek}
                    />
                  </InputGroup>
                </Fragment>
              )
            }
          </div>
          <div className="course-detail-fields">
            <h6>Activities Implementation</h6>
            {
              typeof implementation.activities === 'object' && implementation.activities.map((activity, index) => 
                <div className='row-12' key={index}>
                  <InputGroup className='col-lg-12 mb-2'>
                    <Label className='ml-2' for='type'>Activity Type</Label>
                    <Input
                      className='ml-2'
                      name='type'
                      type='text'
                      value={activity.type}
                    />
                    <Label className='ml-2' for='forms'>Forms</Label>
                    <Input
                      className='ml-2'
                      name='forms'
                      type='text'
                      value={activity.forms}
                    />
                  </InputGroup>
                </div>
              )
            }
          </div>
        </div>
      </div>
      <div className="mt-3 d-flex justify-content-center">
        <Button className="m-1 w-25" color='success'>Add New Type of Outcome</Button>
        <Button className="m-1 w-25" color='primary'>Save</Button>
        <Button className="m-1 w-25" color='danger'>Delete</Button>
      </div>
    </Form>
  )
}

export default class CourseImplementationTab extends Component {
  render() {
    const { initialValues, mode } = this.props;
    return (
      <section className="content pb-5">
        <div className="edit-client-detail-form-container container-fluid bg-white">
          {/* <FormModal
                initialValues={initialValues}
                component={<Form {...this.props} />}
            /> */}
          {mode ? <TabEditForm values={initialValues} /> : <TabDisplayForm values={initialValues} />}
        </div>
      </section>
    );
  }
}
