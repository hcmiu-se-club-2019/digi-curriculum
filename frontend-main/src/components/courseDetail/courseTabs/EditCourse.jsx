import React, { Component, useState } from "react";
import { Fragment } from "react";
import {Table, Form, FormGroup, Label, Input } from "reactstrap";
import EditAssessmentTable from "./EditWidgets/EditAssessmentTable"
import EditObjectivesTable from "./EditWidgets/EditObjectivesTable"
import EditLearningOutcomes from "./EditWidgets/EditLearningOutcomes"

const TabForm = (props) => {
    const {data, 
           AddRowAssessment, 
           RemoveRowAssessment, 
           AddRowObjectives, 
           RemoveRowObjectives,
           AddRowOutcome,
           RemoveRowOutcome
            } = props;
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
            <EditAssessmentTable data={data.assessmentData} AddRowAssessment={AddRowAssessment} RemoveRowAssessment={RemoveRowAssessment}/>

            {/* INPUT COURSE OBJECTIVES */}
            <EditObjectivesTable data={data.objectivesData} AddRowObjectives={AddRowObjectives} RemoveRowObjectives={RemoveRowObjectives}/>

            {/* INPUT COURSE OUTCOMES */}
            <EditLearningOutcomes data={data.outcomeData} AddRowOutcome={AddRowOutcome} RemoveRowOutcome={RemoveRowOutcome}/>
            
        </div>
        
    );

};

export default class EditCourse extends Component {

    constructor(){
        super()
        this.AddRowAssessment = this.AddRowAssessment.bind(this);
        this.RemoveRowAssessment = this.RemoveRowAssessment.bind(this);
        this.AddRowObjectives = this.AddRowObjectives.bind(this);
        this.RemoveRowObjectives = this.RemoveRowObjectives.bind(this);
        this.AddRowOutcome = this.AddRowOutcome.bind(this);
        this.RemoveRowOutcome = this.RemoveRowOutcome.bind(this);

    }

    state =  {
        assessmentData: [{type: "Quiz", percentage:"5%"}],
        objectivesData: [{ID: "1", topic: "first topic"}],
        outcomeData: [{name: "#1", outcome: "Excellence in ..."}]
};

    // Handle onClick for Assessment Table
    AddRowAssessment(assessType, assessPercentage) {
        const nextElement = {type: assessType, percentage: assessPercentage}
        if (assessType && assessPercentage)
        {
            var newArray = this.state.assessmentData.concat(nextElement)
            this.setState({assessmentData: newArray});
        }
    }

    RemoveRowAssessment(index) {
        console.log(index);
        const newArray = this.state.assessmentData.splice(index,1);
        this.setState({assessmentData: newArray});
    }

    // Handle onClick for Objectives Table

    AddRowObjectives(ObjId, ObjTopic) {
        const nextElement = {ID: ObjId, topic: ObjTopic}
        if (ObjId && ObjTopic)
        {
            var newArray = this.state.objectivesData.concat(nextElement);
            this.setState({objectivesData: newArray});
        }
    }

    RemoveRowObjectives(index) {
        const newArray = this.state.objectivesData.splice(index,1);
        this.setState({objectivesData: newArray});
    }

    AddRowOutcome(name, outcome) {
        const nextElement = {name: name, outcome: outcome}
        if (name && outcome)
        {
            var newArray = this.state.outcomeData.concat(nextElement);
            this.setState({outcomeData: newArray});
        }
    }

    RemoveRowOutcome(index) {
        const newArray = this.state.outcomeData.splice(index,1);
        this.setState({outcomeData: newArray});
    }

    render() {
        
        
        return(
            <TabForm data={this.state} 
                    AddRowAssessment={this.AddRowAssessment}
                    RemoveRowAssessment={this.RemoveRowAssessment}
                    AddRowObjectives={this.AddRowObjectives}
                    RemoveRowObjectives={this.RemoveRowObjectives}
                    AddRowOutcome={this.AddRowOutcome}
                    RemoveRowOutcome={this.RemoveRowOutcome}
            />
        );
    };
}
