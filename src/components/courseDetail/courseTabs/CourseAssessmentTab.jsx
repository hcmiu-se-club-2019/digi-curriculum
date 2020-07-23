import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';
import { Table, Form, FormGroup, Label, Input, Button } from "reactstrap";
// import { Field } from 'formik';

// import FormModal from '../../common/FormModal'
// import Input from '../../common/FormModal/Input'

const TabDisplayForm = (props) => {
  const { assessment } = props.values;
  return (
    <div className="row mt-2">
      <div className="col-sm-12">
        <div>
          <h5>ASSESSMENT PLAN</h5>
        </div>
        <div className="course-detail-fields">
          <Table>
            <caption>
              <strong>Note: MCQ:</strong> Multiple choice questions ;
              <strong> WQ:</strong> Writing questions ; 
              <strong> P:</strong> Presentation.
              <strong>Total: 100%</strong>
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
                  <Fragment key={index}>
                    <th>MCQ</th>
                    <th>WQ</th>
                    <th>P</th>
                  </Fragment>
                )}
              </tr>
            </thead>
            <tbody>
              {
                typeof assessment.plan === 'object' && assessment.plan.map((p, index) => 
                  <Fragment key={index}>
                    <tr>
                      <td rowSpan={p.tasks.length}>{index + 1}</td>
                      <td rowSpan={p.tasks.length}>{p.criteria}</td>
                      <td>{p.tasks[0].task}</td>
                      {typeof p.tasks[0].domain === 'object' && p.tasks[0].domain.map(d => 
                        <td>{d === 1 ? 'X' : null}</td>  
                      )}
                      <td rowSpan={p.tasks.length}>{p.weight}</td>
                    </tr>  
                    {
                      typeof p.tasks === 'object' && p.tasks.slice(1, p.tasks.length).map((task, index) => 
                        <tr key={index}>
                          <td>{task.task}</td>
                          {typeof task.domain === 'object' && task.domain.map(d => 
                            <td>{d === 1 ? 'X' : null}</td>  
                          )}
                        </tr>
                      )
                    }
                  </Fragment>
                )
              }
            </tbody>
          </Table>
        </div>
        <div>
          <h5>GRADING PLAN</h5>
        </div>
        <div className="course-detail-fields col-5 align-self-center">
          <Table bordered>
            {/* <caption>Grading</caption> */}
            <thead>
              <tr>
                <th>Task</th>
                <th>Weight (%)</th>
              </tr>
            </thead>
            <tbody>
              {
                typeof assessment.grading === 'object' && assessment.grading.map((grade, index) => 
                  <tr key={index}>
                    <td>{grade.task}</td>
                    <td>{grade.value}</td>
                  </tr>
                )
              }
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}

const TabEditForm = props => {
  const { values } = props
  return (
    <Form>
      <div className="row mt-2">
        <div className="col-md-12">
          <div>
            <h5>COURSE LEARNING OUTCOMES</h5>
          </div>
          <div className="course-detail-fields">
            {
              typeof values.outcomes === 'object' && values.outcomes.map((outcome, index) => 
                <Fragment key={index}>
                  <FormGroup>
                    <Label for='name'>Outcome Type</Label>
                    <Input
                      className='mb-2'
                      name='name'
                      type='text'
                      value={outcome.name}
                    />
                    {
                      typeof outcome.outs === 'object' && outcome.outs.map((out, index) => 
                        <Fragment key={index}>
                          <FormGroup className='row'>
                            <FormGroup className='col-5'>
                              <Label for='courseOut'>Course Outcome</Label>
                              <Input
                                name='courseOut'
                                type='text'
                                value={out.courseOut}
                              />
                            </FormGroup>
                            <FormGroup className='col-5'>
                              <Label for='programOut'>Program Outcome</Label>
                              <Input
                                name='programOut'
                                type='text'
                                value={out.programOut}
                              />
                            </FormGroup>
                            <Button className='' style={{width:'40px', height:'40px', marginLeft:'5px', borderRadius:'40%'}} color='danger'>X</Button>
                          </FormGroup>
                        </Fragment>
                      )
                    }
                    <Button className='mb-2' color='success'>Add New Outcome</Button>
                  </FormGroup>
                </Fragment>
              )
            }
          </div>
        </div>
      </div>
      <div className="mt-3 d-flex justify-content-center">
        <Button className="m-1 w-25" color='success'>Add New Type of Outcome</Button>
        <Button className="m-1 w-25" color='primary'>Save</Button>
        <Button className="m-1 w-25" color='danger'>Delete</Button>
      </div>
    </Form>
  )
}


class CourseAssessmentTab extends Component {
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
          {
            mode ?
            <TabDisplayForm values={initialValues} /> :
            <h1>Under Construction...</h1>
            // <TabEditForm values={initialValues}/>
          }
        </div>
      </section>
    );
  }
}


CourseAssessmentTab.propTypes = {
  implementation: PropTypes.object.isRequired
}

export default CourseAssessmentTab