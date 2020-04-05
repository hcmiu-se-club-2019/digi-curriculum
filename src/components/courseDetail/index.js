import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import classNames from 'classnames'

import state from '../../data/json/testData2'
import CourseGeneralTab from './courseTabs/CourseGeneralTab'

const courseList = state.courses
const tabList = [
    {
        id: '1',
        name: 'GENERAL'
    },
    {
        id: '2',
        name: 'DESCRIPTION'
    },
    {
        id: '3',
        name: 'LEARNING OUTCOMES'
    },
    {
        id: '4',
        name: 'IMPLEMENTATION'
    },
    {
        id: '5',
        name: 'ASSESSMENT'
    },
    {
        id: '6',
        name: 'OTHERS'
    },
]

export default class CourseDetail extends Component {
    constructor(props) {
        super(props);
        this.state ={
            activeTab: '1',
            course: {},
            isOpeningModal: false
        }
    }

    componentDidMount() {
        const { courseId } = this.props.match.params
        this.fetchCourse(courseId) // Axios later        
    }

    fetchCourse(courseId) {
        const course = courseList.find(function(course) {
            return course.id === courseId
        })
        this.setState({course: course})
    }

    render() {
        const { 
            activeTab,
            course,  
        } = this.state

        return (
            <div className='container_wrap'>
                <section className='content-header'>
                    <div className='container-fluid'>
                        <div className='tabs'>
                            <div className='course-detail-tabs'>
                                <Nav tabs>
                                    {tabList.map(tab => (
                                        <NavItem>
                                            <NavLink
                                                id={tab.id}
                                                className={classNames({ active: activeTab === tab.id })}
                                                onClick={() => {
                                                    this.setState({
                                                    activeTab: tab.id
                                                    })
                                                }}
                                            >
                                                {tab.name}
                                            </NavLink>
                                        </NavItem>
                                    ))}
                                </Nav>
                            </div>
                        </div>
                    </div>
                </section>
                {activeTab === '1' && (
                    <CourseGeneralTab 
                        initValues={course}
                    />
                )}
            </div>
        )
    }
}