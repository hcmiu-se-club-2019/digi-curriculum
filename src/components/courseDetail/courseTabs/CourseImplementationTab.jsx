import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Table } from "reactstrap";

// import { Field } from 'formik';

// import FormModal from '../../common/FormModal'
// import Input from '../../common/FormModal/Input'

const TabForm = (props) => {
  const { values } = props;
  return (
    <form onSubmit={function () {}} className="course-outcome-form border">
      <div className="d-flex justify-content-center">
        <div className="mt-2 ml-3">
          <div>
            <h5>COURSE IMPLEMENTATION</h5>
          </div>
          <div className="course-detail-fields">
            <Form>
              <FormGroup className='d-block'>
                <FormGroup>
                  <Label for="name">Course Name</Label>
                  <Input
                    type="text"
                    name="courseName"
                    id="courseName"
                    value={values.name}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="id">Course Code</Label>
                  <Input
                    type="text"
                    name="courseId"
                    id="courseName"
                    value={values.id}
                  />
                </FormGroup>
              </FormGroup>
              <FormGroup>
                <Label for="required">Course Prerequisties</Label>
                <Input
                  type="textarea"
                  name="courseRequired"
                  id="courseRequired"
                  value={typeof values.prerequisties === 'object' ? values.prerequisties.join('\n') : values.prerequisties}
                />
              </FormGroup>
            </Form>
            <Table bordered>
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
                  && values.implementation.outlines.map(outline => 
                    <tr>
                      <td>{outline.week}</td>
                      <td>{outline.topics.join('\n')}</td>
                    </tr>
                  )
                }
              </tbody>
            </Table>
          </div>
        </div>
      </div>
      <div className="mt-3 d-flex justify-content-center">
        <button className="btn btn-primary m-1 w-25">Save</button>
        <button className="btn btn-danger m-1 w-25">Delete</button>
      </div>
    </form>
  );
};

export default class CourseImplementationTab extends Component {
  componentDidUpdate() {
    console.log(this.props)
  }

  render() {
    const { initialValues } = this.props;
    return (
      <section className="content pb-5">
        <div className="edit-client-detail-form-container container-fluid bg-white">
          <div className="row">
            <div className="col-sm-12">
              {/* <FormModal
                    initialValues={initialValues}
                    component={<Form {...this.props} />}
                /> */}
              <TabForm values={initialValues} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
