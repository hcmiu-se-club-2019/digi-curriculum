import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
// import { Field } from 'formik';

// import FormModal from '../../common/FormModal'
// import Input from '../../common/FormModal/Input'

const TabDisplayForm = props => {
  const { values } = props
  return (
    <div className="row mt-2">
      <div className="col-lg-5 ml-lg-4">
        <div>
          <h5>COURSE DESCRIPTION</h5>
        </div>
        <div className="course-detail-fields">
          <p><i>{typeof values.description === 'object' && values.description[0]}</i></p>
          <ul>
            {
              typeof values.description === 'object' && [...values.description].slice(1, values.description.length).map((desc, index) => 
                <li key={index}>
                  {desc}
                </li>
              )
            }
          </ul>
        </div>
        <span class="d-lg-none"><hr></hr></span>
      </div>
      <div className="col-lg-5 offset-lg-1">
        <div>
          <h5>COURSE OBJECTIVES</h5>
        </div>
        <div className="course-detail-fields">
          <div>
            <p><i>Upon the successful completion of this course students will be able to: </i></p>
            <ul>
              {
                typeof values.objectives === 'object' && values.objectives.map((objective, index) => <li key={index}>{objective}</li>)
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

const TabEditForm = (props) => {
  const { values } = props;
  return (
    <form onSubmit={function () {}} className="course-general-form">
      <div className="row mt-2">
        <div className="col-md-5 ml-md-4">
          <div>
            <h5>COURSE DESCRIPTION</h5>
          </div>
          <div className="course-detail-fields">
            <Form>
              <FormGroup>
                {/* <Label for="required">Course Prerequisties</Label> */}
                <Input
                  type="textarea"
                  name="courseDesc"
                  id="courseDesc"
                  value={typeof values.description === 'object' ? values.description.join('\n+\t') : values.description}
                  rows='16'
                />
              </FormGroup>
            </Form>
          </div>
          <span class="d-lg-none"><hr></hr></span>
        </div>
        <div className="col-md-5 offset-md-1">
          <div>
            <h5>COURSE OBJECTIVES</h5>
          </div>
          <div className="course-detail-fields">
            <div>
              <Form>
                <FormGroup>
                  <Label for="required">Upon the successful completion of this course students will be able to:</Label>
                  <Input
                    type="textarea"
                    name="courseObj"
                    id="courseObj"
                    value={
                      typeof values.objectives === 'object' ? values.objectives.map((objective, index) => 
                        (index + 1) + ".\t" + objective + "."
                      ).join('\n') : values.objectives
                    }
                    rows='15'
                  />
                </FormGroup>
              </Form>
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

export default class CourseDescriptionTab extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = { initialValues: {} };
  // }

  render() {
    const { initialValues, mode } = this.props;
    return (
      <section className="content pb-5">
        <div className="edit-client-detail-form-container container-fluid bg-white">
          {/* <FormModal
                initialValues={initialValues}
                component={<Form {...this.props} />}
            /> */}
          {mode ? <TabEditForm values={initialValues}/> : <TabDisplayForm values={initialValues}/>}
        </div>
      </section>
    );
  }
}
