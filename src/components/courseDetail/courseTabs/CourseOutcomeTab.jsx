import React, { Component, Fragment } from "react";
import { Table, Form, FormGroup, Input, Label, Button } from "reactstrap";
// import { Field } from 'formik';

// import FormModal from '../../common/FormModal'
// import Input from '../../common/FormModal/Input'

const TabDisplayForm = (props) => {
  const { values } = props;
  return (
    <div className="row mt-2">
      <div className="col-md-12">
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
                typeof values.outcomes === 'object' && values.outcomes.map((outcome, index) => 
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
                )
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
            <Button className='float-right mb-2' color='primary'>Add New Type of Outcome</Button>

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
                  typeof values.outcomes === 'object' && values.outcomes.map((outcome, index) => 
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
                  )
                }
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </Form>
  )
}

export default class CourseOutcomeTab extends Component {
  render() {
    const { initialValues, mode } = this.props;
    return (
      <section className="content pb-5">
        <div className="edit-client-detail-form-container container-fluid bg-white">
          {/* <FormModal
                initialValues={initialValues}
                component={<Form {...this.props} />}
            /> */}
          {mode ? <TabEditForm values={initialValues} /> : <TabDisplayForm values={initialValues} />}
        </div>
      </section>
    );
  }
}
