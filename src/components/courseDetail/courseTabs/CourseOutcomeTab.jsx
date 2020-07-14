import React, { Component, Fragment } from "react";
import { Table, Form } from "reactstrap";
// import { Field } from 'formik';

// import FormModal from '../../common/FormModal'
// import Input from '../../common/FormModal/Input'

const TabDisplayForm = (props) => {
  const { values } = props;
  return (
    <div className="d-flex justify-content-center">
      <div className="mt-2 ml-3">
        <div>
          <h5>COURSE LEARNING OUTCOMES</h5>
        </div>
        <div className="course-detail-fields">
          <Table bordered>
            <thead>
              <tr>
                <th>Name</th>
                <th>Course Learning Outcomes</th>
                <th>Program Learning Outcomes</th>
              </tr>
            </thead>
            <tbody>
              {
                typeof values.outcomes === 'object' ? values.outcomes.map((outcome, index) => 
                  <Fragment key={index}>
                    <tr>
                      <th rowSpan={outcome.outs.length}>{outcome.name}</th>
                      <td>{outcome.outs[0].courseOut}</td>
                      <td>{outcome.outs[0].programOut}</td>
                    </tr>
                    {
                      typeof outcome.outs === 'object' && outcome.outs.slice(1, outcome.outs.length).map((out, index) => 
                        <tr key={index}>
                          <td>{out.courseOut}</td>
                          <td>{out.programOut}</td>
                        </tr>
                      )
                    }
                  </Fragment>
                ) : null
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

export default class CourseOutcomeTab extends Component {
  render() {
    const { initialValues, mode } = this.props;
    return (
      <section className="content pb-5">
        <div className="edit-client-detail-form-container container-fluid bg-white">
          <div className="row">
            <div className="col-sm-12">
              {/* <FormModal
                    initialValues={initialValues}
                    component={<Form {...this.props} />}
                /> */}
              {mode ? <TabEditForm values={initialValues} /> : <TabDisplayForm values={initialValues} />}
              
            </div>
          </div>
        </div>
      </section>
    );
  }
}
