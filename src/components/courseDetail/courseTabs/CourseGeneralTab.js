import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
// import { Field } from 'formik';

// import FormModal from '../../common/FormModal'
// import Input from '../../common/FormModal/Input'

const TabDisplayForm = props => {
  const { values } = props;
  return (
    <div className="row mt-2">
      <div className="col-lg-5 ml-lg-4">
        <div>
          <h5>GENERAL INFORMATION</h5>
        </div>
        <div className="course-detail-fields">
          <div>
            <p><strong>Course Name: </strong><span>{values.name}</span></p>
            <p><strong>Course Code: </strong><span>{values.id}</span></p>
            <FormGroup tag="fieldset" readOnly>
              <Label for="type"><strong>Course Type: </strong></Label>
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
            <p><strong>Course Credits: </strong><span>{values.credit}</span></p>
            <p><strong>Course Prerequisties: </strong></p>
            <ul>
              {
                typeof values.prerequisties === 'object' && values.prerequisties.map(prereq => <li key={prereq}>{prereq}</li>)
              }
            </ul>
          </div>
        </div>
        <span class="d-lg-none"><hr></hr></span>
      </div>
      <div className="col-lg-5 offset-lg-1">
        <div>
          <h5>TEXTBOOK REFERENCES</h5>
        </div>
        <div className="course-detail-fields">
          <div>
            <p><strong>Course Main Textbook: </strong></p>
            <p><span>{values.textbook}</span></p>
            <p><strong>Course Other References: </strong></p>
            <ul>
              {
                typeof values.refs === 'object' && values.refs.map(ref => <li key={ref}>{ref}</li>)
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const TabEditForm = (props) => {
  const { values, onTextChange } = props;
  return (
    <Form onSubmit={function () {}} className="course-general-form">
      <div className="row mt-2">
        <div className="col-lg-5 ml-lg-4">
          <div>
            <h5>GENERAL INFORMATION</h5>
          </div>
          <div className="course-detail-fields">
            <div>
              <FormGroup>
                <Label for="name">Course Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="courseName"
                  value={values.name}
                  onChange={onTextChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="id">Course Code</Label>
                <Input
                  type="text"
                  name="id"
                  id="courseId"
                  value={values.id}
                  onChange={onTextChange}
                />
              </FormGroup>
              <FormGroup tag="fieldset">
                <Label for="type">Course Type</Label>
                <div className='d-flex ml-1'>
                  <FormGroup check style={{width:'100px'}}>
                    <Label check>
                      <Input type="checkbox" name="specialization" checked={values.specialization} onChange={onTextChange}/> 
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
                  name="credit"
                  id="courseCredit"
                  value={values.credit}
                  onChange={onTextChange}
                />
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
            </div>
          </div>
          <span class="d-lg-none"><hr></hr></span>
        </div>
        <div className="col-lg-5 offset-lg-1">
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
                  value={values.textbook}
                  rows='4'
                />
              </FormGroup>
              <FormGroup>
                <Label for="references">Course Other References</Label>
                <Input
                  type="textarea"
                  name="courseReferences"
                  id="courseReferences"
                  value={typeof values.refs === 'object' ? values.refs.join('\n') : values.refs}
                  rows='10'
                />
              </FormGroup>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 d-flex justify-content-center">
        <button className="btn btn-primary m-1 w-25">Save</button>
        <button className="btn btn-danger m-1 w-25">Delete</button>
      </div>
    </Form>
  );
};

export default class CourseGeneralTab extends Component {
  render() {
    const { initialValues, mode, onTextChange } = this.props;
    return (
      <section className="content pb-5">
        <div className="edit-client-detail-form-container container-fluid bg-white">
          {/* <FormModal
                initialValues={initialValues}
                component={<Form {...this.props} />}
            /> */}
          {mode ? <TabEditForm 
            values={initialValues} 
            onTextChange={onTextChange}
          /> : <TabDisplayForm values={initialValues}/>}
        </div>
      </section>
    );
  }
}
