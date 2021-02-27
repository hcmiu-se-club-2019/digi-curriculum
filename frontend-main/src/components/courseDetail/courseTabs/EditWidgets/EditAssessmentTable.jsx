import React, { Component, Fragment, useState } from "react";
import {Table} from "reactstrap";
export default function EditAssessmentTable(props) {
    

    const {data} = props;
    const [assessType, setType] = useState();
    const [assessPercentage, setPercentage] = useState();


    return(
        <div className="section">
            <label><b>Assessment Plan</b></label>
            <br/>
            <div className="form-group">
                <div className="row">
                    <div className="col-md-4">
                        <label htmlFor="Type">Type</label>
                        <input value={assessType} type="text" className="form-control" onChange={(event) => setType(event.target.value)}/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="Percentage">Percentage</label>
                        <input value={assessPercentage} type="text" className="form-control" onChange={(event) => setPercentage(event.target.value)}/>
                    </div>
                    <div className="col-md-3">
                        <br/>
                        <div className="d-flex justify-content-center">
                            <button type="submit" class="btn btn-primary" 
                            onClick={() => {
                                props.AddRowAssessment(assessType, assessPercentage)
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
                        <th scope='col'>Type</th>
                        <th scope='col'>Percentage</th>
                        <th scope='col'></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map( (data, index) =>  
                        <Fragment>
                            <tr>
                                <th>{data.type}</th>
                                <td>{data.percentage}</td>
                                <td><button type="submit" class="btn btn-primary" onClick={() => props.RemoveRowAssessment(index)}> REMOVE </button></td>
                            </tr>
                        </Fragment>
                    )}
                </tbody>
            </Table>
        </div>
    );
};