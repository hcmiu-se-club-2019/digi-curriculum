import React, { Component, Fragment, useState } from "react";
import {Table} from "reactstrap";
import {useSelector, useDispatch} from 'react-redux'
import { AddRowAssessment, DeleteRowAssessment } from "../../../../redux/courseDetail/Actions";
export default function EditAssessmentTable() {
    
    const [ID, setID] = useState();
    const [assessType, setType] = useState();
    const [assessPercentage, setPercentage] = useState();
    
    // Redux
    const AssessmentTable = useSelector(state => state.courseDetail.AssessmentTable);
    const dispatch = useDispatch();


    return(
        <div className="section">
            <label><b>Assessment Plan</b></label>
            <br/>
            <div className="form-group">
                <div className="row">
                    <div className="col-md-3">
                        <label htmlFor="Type">Type</label>
                        <input value={assessType} type="text" className="form-control" onChange={(event) => setType(event.target.value)}/>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="Percentage">Percentage</label>
                        <input value={assessPercentage} type="text" className="form-control" onChange={(event) => setPercentage(event.target.value)}/>
                    </div>
                    <div className="col-md-3">
                        <br/>
                        <div className="d-flex justify-content-end">
                            <button type="submit" class="btn btn-primary" 
                            onClick={() => {
                                dispatch(AddRowAssessment(ID, assessType, assessPercentage));
                                setType("");
                                setPercentage("");
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
                        <th scope='col'>ID</th>
                        <th scope='col'>Type</th>
                        <th scope='col'>Percentage</th>
                        <th scope='col'></th>
                    </tr>
                </thead>
                <tbody >
                    {AssessmentTable.map((data, index) =>  
                        <Fragment>
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.type}</td>
                                <td>{data.CourseAssessment.percentage}</td>
                                <td>
                                    <div class="d-flex justify-content-end">
                                        <button type="submit" class="btn btn-primary" onClick={() => dispatch(DeleteRowAssessment(index))}> REMOVE </button>
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