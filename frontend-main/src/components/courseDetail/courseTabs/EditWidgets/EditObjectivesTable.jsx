import React, { Component, Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddRowObjectives, DeleteRowObjectives } from "../../../../redux/courseDetail/Actions";
import {Table} from "reactstrap";

export default function EditObjectivesTable() {
    const [id, setId] = useState();
    const [name, setName] = useState();

    // Redux
    const dispatch = useDispatch();
    const CourseObjectives = useSelector(state => state.courseDetail.ObjectivesTable);

    return(
        <div className="section">
            <label htmlFor="objectivesTitle"><b>Course Objectives</b></label>
            <br/>
            <div className="form-group">
                <div className="row">
                    <div className="col-md-4">
                        <label htmlFor="name">Name</label>
                        <input value={name} type="text" className="form-control" onChange={(event) => setName(event.target.value)}/>
                    </div>
                    <div className="col-md-4">
                        <br/>
                            <div className="d-flex justify-content-end">
                                <button type="submit" class="btn btn-primary" 
                                onClick={() => {
                                    dispatch(AddRowObjectives(id,name));
                                    setId();
                                    setName("");
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
                        <th scope="col">Name</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {CourseObjectives.map((data, index) => 
                        <Fragment>
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>
                                    <div class="d-flex justify-content-end">
                                        <button type="submit" class="btn btn-primary" 
                                        onClick={() => dispatch(DeleteRowObjectives(index))}> REMOVE </button>
                                    </div>
                                </td>
                                    
                            </tr>
                        </Fragment>
                        )}
                </tbody>

            </Table>
        </div>


    )

}