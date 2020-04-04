import React, { Component } from 'react'
// import * as data from '../../data/json/testData.json'

// const subMajorList = data.subMajors;

export default class EditCurriculum extends Component {
    render() {
        return (
            <div className='container-fluid d-flex flex-column border' style={{height:'700px'}}>
                {/* {subMajorList.map(subMajor => (<li>{subMajor.name}</li>))} */}
                <div className="submajor-breadcrumb row m-1">
                    <div className="col-md border"><span className='active m-1'>Computer Science</span></div>
                    <div className="col-md border"><span className='m-1'>Computer Engineering</span></div>
                    <div className="col-md border"><span className='m-1'>Network Engineering</span></div>
                    <div className="col-md border"><span className='m-1'>Data Science</span></div>
                </div>
                <div className='edit-curri row flex-grow-1 m-1 h-75'>
                    <div className='course-list-draggable col border'>
                        <h3>This is course list.</h3>
                    </div>
                    <div className='curri-view col-10 ml-1'>
                        <div className="english-breadcrumb row">
                            <div className="col-md border"><span className='m-1'>IE1</span></div>
                            <div className="col-md border"><span className='active m-1'>IE1</span></div>
                            <div className="col-md border"><span className='m-1'>IE1</span></div>
                            <div className="col-md border"><span className='m-1'>IE1</span></div>
                        </div>
                        <div className='curri-droppable row h-75'>
                            <div className='col border'>
                                <h1>Drawing Panel...</h1>
                            </div>
                        </div>
                        <div className='revise-table flex-grow-1 row border'>
                            <div className='col'>
                                <h1>Revision Table...</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
