import Axios from "axios";
import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
// import { Field } from 'formik';

// import FormModal from '../../common/FormModal'
// import Input from '../../common/FormModal/Input'

const TabForm = (props) => {
  const { values } = props;
  const information = values.data.information;
  const relatedCourses = values.data.courseRelateCourses.related_courses;
  const books = values.data.books;
  console.log(information);
  console.log(relatedCourses);
  console.log(books);

  return (
    <form onSubmit={function () {}} className="course-general-form border">
      <div className="d-flex justify-content-center">
        <div className="col-sm-5 border mt-2 ml-3">
          <div>
            <h5>GENERAL INFORMATION</h5>
          </div>
          <div className="course-detail-fields">
            <Form>
              <FormGroup>
                <Label for="name">Course Name</Label>
                <Input
                  type="text"
                  name="courseName"
                  id="courseName"
                  value={information.name}
                />
              </FormGroup>
              <FormGroup>
                <Label for="id">Course Code</Label>
                <Input
                  type="text"
                  name="courseId"
                  id="courseName"
                  value={information.id}
                />
              </FormGroup>
              <FormGroup tag="fieldset">
                <Label for="type">Course Type</Label>
                <div className='d-flex ml-1'>
                  <FormGroup check style={{width:'100px'}}>
                    <Label check>
                      <Input type="checkbox" name="cb1" checked={values.specialization} /> 
                      Specialization
                    </Label>
                  </FormGroup>
                  <FormGroup check style={{width:'100px'}} className='mx-auto'>
                    <Label check>
                      <Input type="checkbox" name="cb2" checked={values.core} /> 
                      Core
                    </Label>
                  </FormGroup>
                </div>
                <div className='d-flex ml-1'>
                  <FormGroup check style={{width:'100px'}}>
                    <Label check>
                      <Input type="checkbox" name="cb3" checked={values.requirement} /> 
                      Requirement
                    </Label>
                  </FormGroup>
                  <FormGroup check style={{width:'100px'}} className='mx-auto'>
                    <Label check>
                      <Input type="checkbox" name="cb4" checked={values.elective} /> 
                      Elective
                    </Label>
                  </FormGroup>
                </div>
              </FormGroup>
              <FormGroup>
                <Label for="credit">Course Credits</Label>
                <Input
                  type="number"
                  name="courseCredit"
                  id="courseCredit"
                  value={information.credit_theory}
                />
              </FormGroup>
              <FormGroup>
                <Label for="required">Course Prerequisties</Label>
                <Input
                  type="textarea"
                  name="courseRequired"
                  id="courseRequired"
                  value={relatedCourses.map(e => e.name + " - " + e.related_course_id).join('\n')}
                />
              </FormGroup>
            </Form>
          </div>
        </div>
        <div className="col-sm-5 offset-sm-1 border mt-2">
          <div>
            <h5>TEXTBOOK REFERENCES</h5>
          </div>
          <div className="course-detail-fields">
            <div>
              {/* <Field
                      id='courseTextbook'
                      name='courseTextbook'
                      label='Main Textbook'
                      component={Input}
                  />
                  <Field
                      id='courseReference'
                      name='courseReference'
                      label='Other References'
                      component={Input}
                  /> */}
              <FormGroup>
                <Label for="textbook">Course Main Textbook</Label>
                <Input
                  type="textarea"
                  name="courseTextbook"
                  id="courseTextbook"
                  value={books.map(e => e.title).join('\n')}
                  rows = '15'
                />
              </FormGroup>
              {/* <FormGroup>
                <Label for="references">Course Other References</Label>
                <Input
                  type="textarea"
                  name="courseReferences"
                  id="courseReferences"
                  value={typeof values.refs === 'object' ? values.refs.join('\n') : values.refs}
                  rows='10'
                />
              </FormGroup> */}
            </div>
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

export default class CourseGeneralTab extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = { initialValues: {} };
  //  }
  
  

  

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
