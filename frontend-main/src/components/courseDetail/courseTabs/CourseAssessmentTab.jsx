import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';
import { Table } from "reactstrap";
// import { Field } from 'formik';

// import FormModal from '../../common/FormModal'
// import Input from '../../common/FormModal/Input'

const TabForm = (props) => {
  const { values } = props;
  const assessment = values.data.assessments;
  return (
    <form onSubmit={function () {}} className="course-general-form border">
      <div className="d-flex justify-content-center">
        <div className="col-sm-8 mt-2 ml-3">
          <div>
            <h5>ASSESSMENT PLAN</h5>
          </div>
          <div className="course-detail-fields">
            <Table bordered >
              <thead>
                <tr>
                  <th scope='col'>Type</th>
                  <th scope='col'>Percentage</th>
                </tr>
              </thead>
              <tbody style={{fontSize:'15px'}}>
                {
                  assessment.map((a) => 
                    <Fragment>
                      <tr>
                        <td>{a.type}</td>
                        <td>{a.CourseAssessment.percentage}</td>
                      </tr>
                    </Fragment>
                  )
                }
              </tbody>
            </Table>
          </div>
          {/* <div className="course-detail-fields">
            <Table bordered>
              <caption>
                <strong>Note: MCQ:</strong> Multiple choice questions ;
                <strong> WQ:</strong> Writing questions ; 
                <strong> P:</strong> Presentation
              </caption>
              <thead>
                <tr>
                  <th rowSpan={3}>No.</th>
                  <th rowSpan={3}>Assessment Criteria</th>
                  <th rowSpan={3}>Assessment Tasks</th>
                  <th colSpan={4*3}>Level of Cognitive Domain</th>
                  <th rowSpan={3}>Weight(%)</th>
                </tr>
                <tr>
                  <th colSpan={3}>Applying</th>
                  <th colSpan={3}>Analyzing</th>
                  <th colSpan={3}>Evaluating</th>
                  <th colSpan={3}>Creating</th>
                </tr>
                <tr>
                  {[1, 2, 3, 4].map( index =>
                    <>
                      <th>MCQ</th>
                      <th>WQ</th>
                      <th>P</th>
                    </>
                  )}
                </tr>
              </thead>
            </Table>
          </div> */}
        </div>
      </div>
      <div className="mt-3 d-flex justify-content-center">
        <button className="btn btn-primary m-1 w-25">Save</button>
        <button className="btn btn-danger m-1 w-25">Delete</button>
      </div>
    </form>
  );
};

class CourseAssessmentTab extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = { initialValues: {} };
  // }

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


CourseAssessmentTab.propTypes = {
  implementation: PropTypes.object.isRequired
}

export default CourseAssessmentTab