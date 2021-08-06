import React, { Component, Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Table} from "reactstrap";
import { AddRowTextbook, DeleteRowTextbook } from "../../../../redux/courseDetail/Actions";
export default function EditTextbookTable() {
    const [id, setId] = useState();
    const [title, setTitle] = useState();

    // Redux
    const TextbookTable = useSelector(state => state.courseDetail.TextbookTable);
    const dispatch = useDispatch();
    

    return(
        <div className="section">
            <label htmlFor="textbook"><b>Textbook Preferences</b></label>
            <br/>
            <div className="form-group">
                <div className="row">
                    <div className="col-md-4">
                        <label htmlFor="Title">Title</label>
                        <input value={title} type="text" className="form-control" onChange={(event) => setTitle(event.target.value)}/>
                    </div>
                    <div className="col-md-4">
                        <br/>
                            <div className="d-flex justify-content-end">
                                <button type="submit" class="btn btn-primary" 
                                onClick={() => {
                                    
                                    dispatch(AddRowTextbook(id, title));
                                    setTitle("");
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
                        <th scope="col">Title</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {TextbookTable.map((data, index) => 
                        <Fragment>
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.title}</td>
                                <td>
                                    <div class="d-flex justify-content-end">
                                        <button type="submit" class="btn btn-primary " 
                                        onClick={() => dispatch(DeleteRowTextbook(index))}> REMOVE </button>
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
