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
            <h5>COURSE LEARNING OUTCOMES</h5>
          </div>
          <div className="course-detail-fields">
            <Table bordered responsive>
              <thead>
                <tr>
                  <th>Name</th>
                  <tr className='d-flex'>
                    <th className='w-50'>Course Learning Outcomes</th>
                    <th className='w-50'>Program Learning Outcomes</th>
                  </tr>
                </tr>
              </thead>
              <tbody>
                {typeof values.outcomes === 'object' ? values.outcomes.map(outcome => 
                  <tr>
                    <th><h5>{outcome.name}</h5></th>
                    {typeof outcome.outs === 'object' ? outcome.outs.map(out => 
                      <tr className='d-flex'>
                        <th className='w-50'>{out.courseOut}</th>
                        <th className='w-50'>{out.programOut}</th>
                      </tr>
                    ) : null}
                  </tr>
                ) : null}
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

export default class CourseOutcomeTab extends Component {
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
