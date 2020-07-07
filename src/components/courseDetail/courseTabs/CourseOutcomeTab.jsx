import React, { Component } from "react";
import { Table } from "reactstrap";
// import { Field } from 'formik';

// import FormModal from '../../common/FormModal'
// import Input from '../../common/FormModal/Input'

const borderStyle = {
  border: '1px solid black'
}

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
            <div class="container">
              <div class="row">
                <div class="col-sm" style={borderStyle}>
                  Name
                </div>
                <div class="col-sm" style={borderStyle}>
                  Course Learning Outcomes
                </div>
                <div class="col-sm" style={borderStyle}>
                  Program Learning Outcomes
                </div>
              </div>
              {
                typeof values.outcomes === 'object' ? values.outcomes.map(outcome => 
                  <div class=''>
                    <div class='col-sm' style={borderStyle}>{outcome.name}</div>
                    {
                    typeof outcome.outs === 'object' ? outcome.outs.map(out =>
                      <div class='row'>
                        <div class='col-sm' style={borderStyle}></div>
                        <div class='col-sm' style={borderStyle}>{out.courseOut}</div>
                        <div class='col-sm' style={borderStyle}>{out.programOut}</div>
                      </div>
                    ) : null
                  }
                  </div>
                  
                ) : null
              }
            </div>
            <Table bordered>
              <thead>
                <tr>
                  <th scope='col'>Name</th>
                  <th scope='col'>Course Learning Outcomes</th>
                  <th scope='col'>Program Learning Outcomes</th>
                </tr>
              </thead>
              <tbody>
                {typeof values.outcomes === 'object' ? values.outcomes.map(outcome => 
                  <tr>
                    <th colSpan={outcome.outs.length}>{outcome.name}</th>
                    {typeof outcome.outs === 'object' ? outcome.outs.map(out => 
                      <tr>
                        <td>{out.courseOut}</td>
                        <td>{out.programOut}</td>
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
