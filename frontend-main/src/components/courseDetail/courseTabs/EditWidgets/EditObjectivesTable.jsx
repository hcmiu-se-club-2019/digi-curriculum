import React, { Component, Fragment, useState } from "react";
import {Table} from "reactstrap";

export default function EditObjectivesTable(props) {
    const {data} = props;
    const [ID, setID] = useState();
    const [topic, setTopic] = useState();

    return(
        <div className="section">
            <label htmlFor="objectivesTitle"><b>Course Objectives</b></label>
            <br/>
            <div className="form-group">
                <div className="row">
                    <div className="col-md-4">
                        <label htmlFor="ID">ID</label>
                        <input value={ID} type="text" className="form-control" onChange={(event) => setID(event.target.value)}/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="Topics">Topics</label>
                        <input value={topic} type="text" className="form-control" onChange={(event) => setTopic(event.target.value)}/>
                    </div>
                    <div className="col-md-4">
                        <br/>
                            <div className="d-flex justify-content-center">
                                <button type="submit" class="btn btn-primary" 
                                onClick={() => {
                                    props.AddRowObjectives(ID, topic)
                                    setID("");
                                    setTopic("");
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
                        <th scope="col">Topics</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((data, index) => 
                        <Fragment>
                            <tr>
                                <td>{data.ID}</td>
                                <td>{data.topic}</td>
                                <td><button type="submit" class="btn btn-primary" 
                                    onClick={() => props.RemoveRowObjectives(index)}> REMOVE </button></td>
                            </tr>
                        </Fragment>
                        )}
                </tbody>

            </Table>
        </div>


    )

}