import React, { Component, Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Table} from "reactstrap";
import { AddRowOutcome, DeleteRowOutcome } from "../../../../redux/courseDetail/Actions";
export default function EditAssessmentTable() {
    const [name, setName] = useState();
    const [outcome, setOutcome] = useState();

    // Redux
    const OutcomeTable = useSelector(state => state.courseDetail.OutcomeTable);
    const dispatch = useDispatch();
    

    return(
        <div className="section">
            <label htmlFor="learningOutcomes"><b>Learning Outcomes</b></label>
            <br/>
            <div className="form-group">
                <div className="row">
                    <div className="col-md-4">
                        <label htmlFor="ID">Name</label>
                        <input value={name} type="text" className="form-control" onChange={(event) => setName(event.target.value)}/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="Topics">Learning Outcome</label>
                        <input value={outcome} type="text" className="form-control" onChange={(event) => setOutcome(event.target.value)}/>
                    </div>
                    <div className="col-md-4">
                        <br/>
                            <div className="d-flex justify-content-end">
                                <button type="submit" class="btn btn-primary" 
                                onClick={() => {
                                    
                                    dispatch(AddRowOutcome(name, outcome));
                                    setName("");
                                    setOutcome("");
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
                        <th scope="col">Name</th>
                        <th scope="col">Learning Outcomes</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {OutcomeTable.map((data, index) => 
                        <Fragment>
                            <tr>
                                <td>{data.name}</td>
                                <td>{data.outcome}</td>
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

        </div>
    )
}
