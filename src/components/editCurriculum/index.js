import React, { Component } from 'react'
import state from '../../data/json/testData2.js'

const subMajorList = state.subMajors;
const englishLevelList = state.englishEntrances;

export default class EditCurriculum extends Component {
    render() {
        return (
            <div className='container-fluid d-flex flex-column' style={{height:'700px'}}>
                <div className="submajor-breadcrumb row m-1">
                    {subMajorList.map(
                        subMajor => (
                            <div className="col-md border"><span className='m-1'>{subMajor.name}</span></div>
                        )
                    )}
                </div>
                <div className='edit-curri row flex-grow-1 m-1 h-75'>
                    <div className='course-list-draggable col border'>
                        <h3>This is course list.</h3>
                    </div>
                    <div className='curri-view col-10 ml-1'>
                        <div className="english-breadcrumb row">
                            {englishLevelList.map(
                                englishLevel => (
                                    <div className="col-md border"><span className='active m-1'>{englishLevel.name}</span></div>
                                )
                            )}
                        </div>
                        <div className='curri-droppable row h-75'>
                            <div className='col border'>
                                <h1>Drawing Panel...</h1>
                            </div>
                        </div>
                        <div className='revise-table row border'>
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
