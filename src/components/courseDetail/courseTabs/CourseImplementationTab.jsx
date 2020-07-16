import React, { Component, Fragment } from "react";
import { Table, Form } from "reactstrap";

// import { Field } from 'formik';

// import FormModal from '../../common/FormModal'
// import Input from '../../common/FormModal/Input'

const TabDisplayForm = (props) => {
  const { values } = props;
  return (
    <div className="row mt-2">
      <div className="col-md-5 ml-md-4">
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
        <span class="visible-md"><hr></hr></span>
      </div>
      <div className="col-md-6 offset-md-1">
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
  const { values } = props
  return (
    <Form>
      {values.name}
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
