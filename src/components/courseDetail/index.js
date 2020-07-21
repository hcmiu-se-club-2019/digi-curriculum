import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import classNames from "classnames";

import state from "../../data/json/testData2";
import CourseGeneralTab from "./courseTabs/CourseGeneralTab";
import CourseDescriptionTab from "./courseTabs/CourseDescriptionTab";
import CourseOutcomeTab from "./courseTabs/CourseOutcomeTab";
import CourseImplementationTab from "./courseTabs/CourseImplementationTab";
import CourseAssessmentTab from "./courseTabs/CourseAssessmentTab";

const courseList = state.courses;
const tabList = [
  {
    id: "1",
    name: "GENERAL",
  },
  {
    id: "2",
    name: "DESCRIPTION",
  },
  {
    id: "3",
    name: "LEARNING OUTCOMES",
  },
  {
    id: "4",
    name: "IMPLEMENTATION",
  },
  {
    id: "5",
    name: "ASSESSMENT",
  },
  {
    id: "6",
    name: "OTHERS",
  },
];

export default class CourseDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1",
      course: {},
      availableCourses: [],
      isOpeningModal: false,
      mode: false // Display mode
    };
  }

  componentDidMount() {
    const { courseId } = this.props.match.params;
    this.fetchCourse(courseId); // Axios later
    this.setState({ activeTab: '3', mode: true, availableCourses: courseList.map(course => course.name) }) // For testing
  }

  fetchCourse(courseId) {
    const course = courseList.find(function (course) {
      return course.id === courseId;
    });
    this.setState({ course: course });
  }

  toggleMode = () => {
    this.setState({ mode: !this.state.mode })
  }

  onTextChangeHandler = event => {
    const { name, value } = event.target
    const newCourse = {...this.state.course}
    newCourse[name] = isNaN(+value) ? value : +value // For credits
    this.setState({ course: newCourse })
  }

  onCheckboxChangeHandler = event => {
    const { name, checked } = event.target
    const newCourse = {...this.state.course}
    newCourse[name] = !checked
    this.setState({ course: newCourse })
  }

  onListChangeHandler = (name, options) => {
    const newCourse = {...this.state.course}
    newCourse[name] = options.map(opt => opt.value)
    this.setState({ course: newCourse })
  }

  render() {
    const { activeTab, course, mode, availableCourses } = this.state;

    return (
      <div className="container_wrap mt-4 h-100">
        <section className="content-header">
          <div className="container-fluid">
            {/* <div className='d-flex'>
              <h3>{course.name}</h3>
            </div> */}
            <button 
              className="btn btn-light border action-button"
              onClick={this.toggleMode}
            >
              Toggle Mode
            </button>
            <span>{mode ? 'Edit Mode' : 'Display Mode'}</span>
            <div className="tabs">
              <div className="course-detail-tabs">
                <Nav tabs>
                  {tabList.map((tab) => (
                    <NavItem
                      key={tab.id}
                    >
                      <NavLink
                        id={tab.id}
                        className={classNames({ active: activeTab === tab.id })}
                        disabled={tab.id === "6" || tab.id === "5"}
                        onClick={() => {
                          this.setState({
                            activeTab: tab.id,
                          });
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
        <section className='h-100 border ml-lg-3 mr-lg-3'>
          {activeTab === "1" && <CourseGeneralTab 
            initialValues={course} 
            mode={mode} 
            availableCourses={[...availableCourses]}
            onTextChange={this.onTextChangeHandler}
            onCheckboxChange={this.onCheckboxChangeHandler}
            onListChange={(name, options) => this.onListChangeHandler(name, options)}
          />}
          {activeTab === "2" && <CourseDescriptionTab 
            initialValues={course} 
            mode={mode} 
            onTextChange={this.onTextChangeHandler}
          />}
          {activeTab === "3" && <CourseOutcomeTab initialValues={course} mode={mode} onTextChange={this.onTextChangeHandler}/>}
          {activeTab === "4" && <CourseImplementationTab initialValues={course} mode={mode} onTextChange={this.onTextChangeHandler}/>}
          {activeTab === "5" && <CourseAssessmentTab initialValues={course} mode={mode} onTextChange={this.onTextChangeHandler}/>}
        </section>
        
      </div>
    );
  }
}
