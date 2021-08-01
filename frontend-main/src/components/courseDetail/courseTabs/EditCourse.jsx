import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import EditAssessmentTable from "./EditWidgets/EditAssessmentTable"
import EditObjectivesTable from "./EditWidgets/EditObjectivesTable"
import EditLearningOutcomes from "./EditWidgets/EditLearningOutcomes"
import EditTextbookTable from "./EditWidgets/EditTextbookTable";
import EditRelatedCoursesTable from "./EditWidgets/EditRelatedCoursesTable";
import { useDispatch } from "react-redux";
import { SetAssessment, SetObjectives, SetOutcome, SetRelatedCourse, SetTextbook } from "../../../redux/courseDetail/Actions";
import { store } from "/Users/longtran/Desktop/Code/digi-curriculum/frontend-main/src/index.js";
import Axios from "axios";

const TabForm = (props) => {
  
    const values = props.values.course;
    const courseId = props.values.courseId;
    const information = values.data.information;

    // Redux
    const dispatch = useDispatch();
    dispatch(SetAssessment(values.data.assessments));
    dispatch(SetObjectives(values.data.topics));
    dispatch(SetOutcome(values.data.learningOutcomes));
    dispatch(SetTextbook(values.data.books));
    dispatch(SetRelatedCourse(values.data.courseRelateCourses.related_courses));

    async function onFormSubmit() {
      // Submit assessment plans
      console.log(store.getState());  

      // Get course detail updates
      const Assessments = store.getState().courseDetail.AssessmentTable;
      const Books = store.getState().courseDetail.TextbookTable;
      const Objectives = store.getState().courseDetail.ObjectivesTable;


      // Updating
      // Assessment Plans
      for (let i = 0; i < Assessments.length; i++) {
        const a = Assessments[i];
        const submitAssessment = await Axios.put("http://localhost:3000/courses/"+ courseId +"/assessments/"+ a.id, {
          "id": a.id,
          "type": a.type
        });
        console.log(submitAssessment);
      }
      // Assign Books
      // for (let i = 0; i < Books.length; i++){
      //   const a = Books[i];
      //   const submitBooks = await Axios.get("http://localhost:3000/courses/"+ courseId+"/assignBook",{
      //     "courseId": courseId,
      //     "bookId": a.id
      //   });
      // }

      // Objectives Table
      for (let i = 0; i < Objectives.length; i++){
        const a = Objectives[i];
        const submitObjectives = await Axios.post("http://localhost:3000/courses/"+ courseId + "/topics", {
          "course_id": courseId,
          "id": 0,
          "teaching_activities": "null",
          "learning_activities": "null",
          "name": a.topic,
          "topic_type_id": 0
        });
        console.log(submitObjectives);
      }
      

    }

    return(
        <div className="container border form-group">
            {/* INPUT OF COURSENAME AND COURSE ID */}
            <div className="row">
                <div className="col-md-4 form-group">
                    {/* <div className="row justify-content-center text-center" style={{backgroundColor: "yellow"}}>
                        <div className="col-md-5" style={{backgroundColor:"red"}}>Họ và Tên</div>
                        <div className="col-md-5" style={{backgroundColor:"blue"}}>Phone Number</div>
                    </div> */}
                    <label htmlFor="CourseName">Course Name</label>
                    <input type="text" className="form-control" value={information.name} />   
                </div>
                <div className="col-md-4 form-group">
                    <label htmlFor="CourseId">Course ID</label>
                    <input type="text" className="form-control" value={information.id}/>
                </div>
                <div className="col-md-4 form-group">
                    <label htmlFor="Instructors">Instructors</label>
                    <input type="text" className="form-control"/>
                </div>
            </div>

            {/* <div className="form-group" style='width: 100px'>
                <input type='checkbox' id='specialization' />
                <label for='specialization'>Specialization</label>
            </div>

            <div className="form-group" style='width: 100px'>
                <input type='checkbox' id='core' />
                <label for='core'>Core</label>
                <input type='checkbox' id='requirement' />
                <label for='requirement'>Requirement</label>
                <input type='checkbox' id='Elective' />
                <label for='Elective'>Elective</label>

            </div> */}

            {/* INPUT NUMBER OF CREDITS */}
            <FormGroup tag="fieldset">
                <Label for="type">Course Type</Label>
                <div className='d-flex ml-1'>
                  <FormGroup check style={{width:'100px'}}>
                    <Label check>
                      <Input type="checkbox" name="cb1" checked={values.specialization} /> 
                      Specialization
                    </Label>
                  </FormGroup>
                  <FormGroup check style={{width:'100px'}} className='mx-auto'>
                    <Label check>
                      <Input type="checkbox" name="cb2" checked={values.core} /> 
                      Core
                    </Label>
                  </FormGroup>
                </div>
                <div className='d-flex ml-1'>
                  <FormGroup check style={{width:'100px'}}>
                    <Label check>
                      <Input type="checkbox" name="cb3" checked={values.requirement} /> 
                      Requirement
                    </Label>
                  </FormGroup>
                  <FormGroup check style={{width:'100px'}} className='mx-auto'>
                    <Label check>
                      <Input type="checkbox" name="cb4" checked={values.elective} /> 
                      Elective
                    </Label>
                  </FormGroup>
                </div>
              </FormGroup>

            {/* INPUT COURSE DESCRIPTION */}
            <div className="form-group">
                <label htmlFor="Description">Course description</label>
                <textarea className="form-control" 
                        id="desText" cols="30" rows="10" 
                        placeholder="Input description of this course"
                        value={information.description}/>
            </div>

            {/* INPUT ASSESSMENT PLANS */}
            <EditAssessmentTable />

            {/* INPUT TEXTBOOK REFERENCES */}
            <EditTextbookTable />  

            {/* INPUT COURSE OBJECTIVES */}
            <EditObjectivesTable />

            {/* INPUT RELATED COURSE */}
            <EditRelatedCoursesTable />

            {/* INPUT COURSE OUTCOMES */}
            <EditLearningOutcomes />
            
            {/* FORM SUBMIT BUTTON */}
            <div class='d-flex justify-content-end'>
              <button type='button' class='btn btn-success'
                onClick={onFormSubmit}>SUBMIT</button>
              <button type='button' class='btn btn-danger'>DELETE THIS COURSE</button>
            </div>
        </div>
        
    );

};

export default class EditCourse extends Component {

    constructor(){
        super()
    }
    render() {
        const { initialValues } = this.props;
        return(
            <TabForm values = {initialValues}/>
        );
    };
}
