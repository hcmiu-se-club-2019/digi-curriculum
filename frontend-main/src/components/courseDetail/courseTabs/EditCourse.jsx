import React, { Component, useState } from "react";
import { Fragment } from "react";
import {Table, Form, FormGroup, Label, Input } from "reactstrap";
import EditAssessmentTable from "./EditWidgets/EditAssessmentTable"
import EditObjectivesTable from "./EditWidgets/EditObjectivesTable"
import EditLearningOutcomes from "./EditWidgets/EditLearningOutcomes"

const TabForm = () => {
    return(
        <div className="container border">

            {/* INPUT OF COURSENAME AND COURSE ID */}
            <div className="row">
                <div className="col-md-6 form-group">
                    {/* <div className="row justify-content-center text-center" style={{backgroundColor: "yellow"}}>
                        <div className="col-md-5" style={{backgroundColor:"red"}}>Họ và Tên</div>
                        <div className="col-md-5" style={{backgroundColor:"blue"}}>Phone Number</div>
                    </div> */}
                    <label htmlFor="CourseName">Course Name</label>
                    <input type="text" className="form-control" />   
                </div>
                <div className="col-md-6 form-group">
                    <label htmlFor="CourseId">Course ID</label>
                    <input type="text" className="form-control"/>
                </div>
            </div>

            {/* INPUT OF COURSE TYPE AND NUMBER OF CREDITS */}
            <div className="row">
                <div className="col-md-6 form-group">
                    <label htmlFor="CourseType">Course Type</label>
                    <select id="CourseTypeform" class="form-control">
                        <option>Specialization</option>
                        <option>Core</option>
                        <option>Requirement</option>
                        <option>Elective</option>
                    </select>
                </div>
                <div className="col-md-6 form-group">
                    <label htmlFor="Credits">Number of credits</label>
                    <select id="Creditform" className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
            </div>

            {/* INPUT TEXTBOOK AND COURSE DESCRIPTION */}
            <div className="form-group">
                <label htmlFor="Textbook">Textbook References</label>
                <textarea className="form-control" id="bookText" cols="30" rows="10" placeholder="Input textbooks for this course"></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="Description">Course description</label>
                <textarea className="form-control" id="desText" cols="30" rows="10" placeholder="Input description of this course"></textarea>
            </div>

            {/* INPUT ASSESSMENT PLANS */}
            <EditAssessmentTable />

            {/* INPUT COURSE OBJECTIVES */}
            <EditObjectivesTable />

            {/* INPUT COURSE OUTCOMES */}
            <EditLearningOutcomes />
            
        </div>
        
    );

};

export default class EditCourse extends Component {

    constructor(){
        super()
    }
    render() {
        
        
        return(
            <TabForm/>
        );
    };
}
