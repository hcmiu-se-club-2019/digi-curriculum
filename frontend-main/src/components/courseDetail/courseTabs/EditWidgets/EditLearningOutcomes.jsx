import React, { Component, Fragment, useState } from "react";
import {Table} from "reactstrap";
export default function EditAssessmentTable(props) {
    const {data} = props;
    const [name, setName] = useState();
    const [outcome, setOutcome] = useState();

    console.log(props);

    return(
        <div className="section">
            <label htmlFor="learningOutcomes"><b>Learning Outcomes</b></label>
            <br/>
            <div className="form-group">
                <div className="row">
                    <div className="col-md-4">
                        <label htmlFor="ID">name</label>
                        <input value={name} type="text" className="form-control" onChange={(event) => setName(event.target.value)}/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="Topics">Course Learning Outcome</label>
                        <input value={outcome} type="text" className="form-control" onChange={(event) => setOutcome(event.target.value)}/>
                    </div>
                    <div className="col-md-4">
                        <br/>
                            <div className="d-flex justify-content-center">
                                <button type="submit" class="btn btn-primary" 
                                onClick={() => {
                                    props.AddRowOutcome(name, outcome)
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
                    {data.map((data, index) => 
                        <Fragment>
                            <tr>
                                <td>{data.name}</td>
                                <td>{data.outcome}</td>
                                <td><button type="submit" class="btn btn-primary" 
                                    onClick={() => props.RemoveRowOutcome(index)}> REMOVE </button></td>
                            </tr>
                        </Fragment>
                        )}
                </tbody>

            </Table>

        </div>
    )
}
