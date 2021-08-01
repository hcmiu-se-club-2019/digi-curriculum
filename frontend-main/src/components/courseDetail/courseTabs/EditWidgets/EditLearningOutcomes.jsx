import React, { Component, Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Label, Table} from "reactstrap";
import { AddRowOutcome, DeleteRowOutcome } from "../../../../redux/courseDetail/Actions";
export default function EditAssessmentTable() {
    const [id, setId] = useState();
    const [description, setDescription] = useState();

    // Redux
    const OutcomeTable = useSelector(state => state.courseDetail.OutcomeTable);
    const slo = ['Analyze a complex computing problem and to apply principles of computing and other relevant disciplines to identify solutions.',
'Design, implement, and evaluate a computing-based solution to meet a given set of computing requirements in the context of the program discipline.',
'Communicate effectively in a variety of professional contexts.',
'Recognize professional responsibilities and make informed judgments in computing practice based on legal and ethical principles.',
'Function effectively as a member or leader of a team engaged in activities appropriate to the program discipline.',
'Apply computer science theory and software development fundamentals to produce computing-based solutions.'];
    const dispatch = useDispatch();
    

    return(
        <div className="section">
            <label htmlFor="learningOutcomes"><b>Learning Outcomes</b></label>
            <br/>
            <div className="form-group">
                <div className="row">
                    <div className="col-md-4">
                        <label htmlFor="ID">ID</label>
                        <input value={id} type="text" className="form-control" onChange={(event) => setId(event.target.value)}/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="Topics">Description</label>
                        <input value={description} type="text" className="form-control" onChange={(event) => setDescription(event.target.value)}/>
                    </div>
                    <div className="col-md-4">
                        <br/>
                            <div className="d-flex justify-content-end">
                                <button type="submit" class="btn btn-primary" 
                                onClick={() => {
                                    
                                    dispatch(AddRowOutcome(id, description));
                                    setId("");
                                    setDescription("");
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
                        <th scope="col">ID</th>
                        <th scope="col">Description</th>
                        <th scope="col">Relationship with SLO</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {OutcomeTable.map((data, index) => 
                        <Fragment>
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.description}</td>
                                <td>
                                    <div class="d-flex justify-content-center">
                                        <select>
                                            <option value="" selected disabled hidden>Choose here</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                        </select>
                                        *
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex justify-content-end">
                                        <button type="submit" class="btn btn-primary " 
                                        onClick={() => dispatch(DeleteRowOutcome(index))}> REMOVE </button>
                                    </div>
                                </td>
                            </tr>
                        </Fragment>
                        )}
                </tbody>

            </Table>

            <Label><b>* The table below are the Student's learning outcome</b></Label>
            <Table className="form-group" bordered>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Description</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {slo.map((data,index) => 
                        <Fragment>
                            <tr>
                                <td>{index+1}</td>
                                <td>{data}</td>
                            </tr>
                        </Fragment>
                    )}
                </tbody>

            </Table>
        </div>
    )
}
