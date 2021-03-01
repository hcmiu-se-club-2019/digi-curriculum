import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import classNames from "classnames";

import state from "../../data/json/testData2";
import CourseGeneralTab from "./courseTabs/CourseGeneralTab";
import CourseDescriptionTab from "./courseTabs/CourseDescriptionTab";
import CourseOutcomeTab from "./courseTabs/CourseOutcomeTab";
import CourseImplementationTab from "./courseTabs/CourseImplementationTab";
import CourseAssessmentTab from "./courseTabs/CourseAssessmentTab";
import Axios from "axios";
import EditCourse from "./courseTabs/EditCourse";

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
    name: "ASSESSMENT",
  },
  {
    id: "5",
    name: "IMPLEMENTATION",
  },
  {
    id: "6",
    name: "OTHERS",
  },
  {
    id: "7",
    name: "EDIT"
  }
];

export default class CourseDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1",
      course: null,
      isOpeningModal: false,
    };
  }

  async componentDidMount() {
    const { courseId } = this.props.match.params;
    await this.fetchCourse(courseId); // Axios later
  }

  async fetchCourse(courseId) {
    // const course = courseList.find(function (course) {
    //   return course.id === courseId;
    // });
    // this.setState({course: course});

    const course = await Axios.get("http://localhost:3000/courses/"+ courseId +"/details");
    console.log(course);
    this.setState({course: course});
  }

  render() {
    // Check if data is loaded, need loading image
    if (this.state.course)
    {
      const { activeTab, course } = this.state;
      return (
        <div className="container_wrap mt-4">
          <section className="content-header">
            <div className="container-fluid">
              {/* <h3>{course.name}</h3> */}
              <div className="tabs">
                <div className="course-detail-tabs">
                  <Nav tabs>
                    {tabList.map((tab) => (
                      <NavItem>
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
          {activeTab === "1" && <CourseGeneralTab initialValues={course} />}
          {activeTab === "2" && <CourseDescriptionTab initialValues={course}/>}
          {activeTab === "3" && <CourseOutcomeTab initialValues={course}/>}
          {activeTab === "4" && <CourseAssessmentTab initialValues={course}/>}
          {activeTab === "5" && <CourseImplementationTab initialValues={course}/>}
          {activeTab === "7" && <EditCourse initialValues = {course}/>}
        </div>
      );
    } 
    else return (
      <div>
      </div>
    )
  }
}
