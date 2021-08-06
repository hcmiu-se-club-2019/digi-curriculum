import React, {Fragment, useState } from "react";
import {Table} from "reactstrap";
import {useSelector, useDispatch} from 'react-redux'
import { AddRowRelatedCourse, DeleteRowRelatedCourse } from "../../../../redux/courseDetail/Actions";
export default function EditRelatedCoursesTable() {
    

    const [courseID, setCourseID] = useState();
    const [courseName, setCourseName] = useState();
    const [relationship, setRelationship] = useState('prerequisites');
    
    function handleCourseType(e) {
        setRelationship(e.target.value);
    }
    // Redux
    const RelatedCourse = useSelector(state => state.courseDetail.RelatedCourseTable);
    const dispatch = useDispatch();



    return(
        <div className="section">
            <label><b>Related Courses</b></label>
            <br/>
            <div className="form-group">
                <div className="row">
                    <div className="col-md-4">
                        <label htmlFor="CourseID">Course ID</label>
                        <input value={courseID} type="text" className="form-control" onChange={(event) => setCourseID(event.target.value)}/>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="Relationship">Relationship</label>
                        <select id="Relationship-form" className="form-control"
                                value={relationship}
                                onChange={handleCourseType}>
                            <option>prerequisites</option>
                            <option>co-requisites</option>
                        </select>
                    </div>

                    <div className="col-md-1">
                        <br/>
                        <div className="d-flex justify-content-end">
                            <button type="submit" class="btn btn-primary" 
                            onClick={() => {
                                dispatch(AddRowRelatedCourse(courseID, courseName, relationship));
                                setCourseID("");
                                setCourseName();
                                setRelationship("");
                                }}>
                                    Add
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>

            <Table className="form-group" bordered>
                <thead>
                    <tr>
                        <th scope='col'>Course ID</th>
                        <th scope='col'>Course Name</th>
                        <th scope='col'>Relationship</th>
                        <th scope='col'></th>
                    </tr>
                </thead>
                <tbody>
                    {RelatedCourse.map((data, index) =>  
                        <Fragment>
                            <tr>
                                <td>{data.related_course_id}</td>
                                <td>{data.name}</td>
                                <td>{data.CourseCourse.relationship}</td>
                                <td>
                                    <div class="d-flex justify-content-end">
                                        <button type="submit" class="btn btn-primary" onClick={() => dispatch(DeleteRowRelatedCourse(index))}> REMOVE </button>
                                    </div>    
                                </td>
                            </tr>
                        </Fragment>
                    )}
                </tbody>
            </Table>
        </div>
    );
};