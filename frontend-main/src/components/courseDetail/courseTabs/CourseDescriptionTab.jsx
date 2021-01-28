import React, { Component, Fragment } from "react";
import { Form, FormGroup, Label, Input, Table } from "reactstrap";
// import { Field } from 'formik';

// import FormModal from '../../common/FormModal'
// import Input from '../../common/FormModal/Input'

const TabForm = (props) => {
  const { values } = props;
  const description = values.data.information.description;
  const topics = values.data.topics;
  return (
    <form onSubmit={function () {}} className="course-general-form border">
      <div className="d-flex justify-content-center">
        <div className="col-sm-5 mt-2 ml-3">
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
                  value={typeof description === 'object' ? description.join('\n+\t') : description}
                  rows='16'
                />
              </FormGroup>
            </Form>
          </div>
        </div>
        <div className="col-sm-5 offset-sm-1 mt-2">
          <div>
            <h5>COURSE OBJECTIVES</h5>
          </div>
          <div className="course-detail-fields">
            {/* <div>
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
            </div> */}
            <div className="course-detail-fields">
            <Table bordered >
              <thead>
                <tr>
                  <th scope='col'>ID</th>
                  <th scope='col'>Topics</th>
                </tr>
              </thead>
              <tbody style={{fontSize:'12px'}}>
                {
                  topics.map((topic) => 
                    <Fragment>
                      <tr>
                        <td>{topic.id}</td>
                        <td>{topic.name}</td>
                      </tr>
                    </Fragment>
                  )
                }
              </tbody>
            </Table>
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
    const { initialValues } = this.props;
    console.log(initialValues);

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
