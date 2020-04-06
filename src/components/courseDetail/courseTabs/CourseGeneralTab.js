import React, { Component } from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap';
// import { Field } from 'formik';

// import FormModal from '../../common/FormModal'
// import Input from '../../common/FormModal/Input'

const TabForm = (props) => {
    const { values } = props

    return (
        <form onSubmit={function(){}} className='course-general-form border'>
            <div className='d-flex'>
                <div className='col-sm-5 border mt-2 ml-3'>
                    <div>
                        <p>GENERAL INFORMATION</p>
                    </div>
                    <div className='course-detail-fields'>
                        <Form>
                            <FormGroup>
                                <Label for='name'>Course Name</Label>
                                <Input type='text' name='courseName' id='courseName' value={values.name}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for='id'>Course Code</Label>
                                <Input type='text' name='courseId' id='courseName' value={values.id}/>
                            </FormGroup>
                            <FormGroup tag='fieldset'>
                                <legend>Course Type</legend>
                                <FormGroup check>
                                    <Label check>
                                        <Input type='checkbox' name='cb1'/> {' '}
                                        Specialization
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type='checkbox' name='cb2'/> {' '}
                                        Core
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type='checkbox' name='cb3'/> {' '}
                                        Requirement
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type='checkbox' name='cb4'/> {' '}
                                        Elective
                                    </Label>
                                </FormGroup>
                            </FormGroup>
                            <FormGroup>
                                <Label for='credit'>Course Credits</Label>
                                <Input type='number' name='courseCredit' id='courseCredit' value={values.credit}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for='required'>Course Prerequisties</Label>
                                <Input type='text' name='courseRequired' id='courseRequired' value={values.prerequisties}/>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
                <div className='col-sm-5 offset-sm-1 border mt-2'>
                    <div>
                        <p>TEXTBOOK REFERENCES</p>
                    </div>
                    <div className='course-detail-fields'>
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
                                <Label for='textbook'>Course Main Textbook</Label>
                                <Input type='text' name='courseTextbook' id='courseTextbook' value={values.prerequisties}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for='references'>Course Other References</Label>
                                <Input type='text' name='courseReferences' id='courseReferences' value={values.prerequisties}/>
                            </FormGroup>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-3'>
                <button className='btn btn-primary m-1'>Save</button>
                <button className='btn btn-danger m-1'>Delete</button>
            </div>
        </form>
    )
}

export default class CourseGeneralTab extends Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render() {
        const { initialValues } = this.props
        return (
            <section className='content pb-5'>
                <div className='edit-client-detail-form-container container-fluid bg-white'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            {/* <FormModal
                                initialValues={initialValues}
                                component={<Form {...this.props} />}
                            /> */}
                            <TabForm values={initialValues}/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
