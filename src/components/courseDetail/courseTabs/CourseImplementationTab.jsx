import React, { Component, Fragment } from "react";
import { Table } from "reactstrap";

// import { Field } from 'formik';

// import FormModal from '../../common/FormModal'
// import Input from '../../common/FormModal/Input'

const TabForm = (props) => {
  const { values } = props;
  return (
    <form onSubmit={function () {}} className="course-outcome-form border">
      <div className="d-flex justify-content-center">
        <div className="col-sm-5 border mt-2 ml-3">
          <div>
            <h6>COURSE IMPLEMENTATION</h6>
          </div>
          <div className="course-detail-fields">
            <Table bordered>
              <caption className='text-center'>Course Time Implementation</caption>
              <thead>
                <tr>
                  <th scope='col'>Type</th>
                  <th scope='col'>Number of Weeks</th>
                  <th scope='col'>Periods Per Week</th>
                </tr>
              </thead>
              <tbody>
                {
                  typeof values.implementation === 'object' 
                  && typeof values.implementation.times === 'object' 
                  && values.implementation.times.map(time => 
                    <tr>
                      <td>{time.type}</td>
                      <td>{time.weekNum}</td>
                      <td>{time.periodsPerWeek}</td>
                    </tr>
                  )
                }
              </tbody>
            </Table>
            <Table bordered>
              <caption className='text-center'>Teaching and Learning Activities</caption>
              <thead>
                <tr>
                  <th scope='col'>Type</th>
                  <th scope='col'>Forms</th>
                </tr>
              </thead>
              <tbody>
                {
                  typeof values.implementation === 'object' 
                  && typeof values.implementation.activities === 'object' 
                  && values.implementation.activities.map(activity => 
                    <tr>
                      <td>{activity.type}</td>
                      <td>{activity.forms ?? 'null'}</td>
                    </tr>
                  )
                }
              </tbody>
            </Table>
          </div>
        </div>
        <div className="col-sm-5 border offset-sm-1 mt-2">
          <div>
            <h6>COURSE OUTLINE</h6>
          </div>
          <div className="course-detail-fields">
            <Table bordered >
              <thead>
                <tr>
                  <th scope='col'>Week</th>
                  <th scope='col'>Topics</th>
                </tr>
              </thead>
              <tbody style={{fontSize:'12px'}}>
                {
                  typeof values.implementation === 'object' 
                  && typeof values.implementation.outlines === 'object' 
                  && values.implementation.outlines.map(outline => 
                    <Fragment>
                      <tr>
                        <td rowSpan={outline.topics.length}>{outline.week}</td>
                        <td>{outline.topics[0]}</td>
                      </tr>
                      {
                        typeof outline.topics === 'object' && outline.topics.splice(1, outline.topics.length).map(topic =>
                          <tr>
                            <td>{topic}</td>
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
      <div className="mt-3 d-flex justify-content-center">
        <button className="btn btn-primary m-1 w-25">Save</button>
        <button className="btn btn-danger m-1 w-25">Delete</button>
      </div>
    </form>
  );
};

export default class CourseImplementationTab extends Component {
  componentDidUpdate() {
    console.log(this.props)
  }

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
