import React, { Component } from 'react'
import state from '../../data/json/testData2'
import logo from '../../data/img/IU-logo.png'
import SubMajor from './SubMajor';

const programList = state.programTypes;
const subMajorList = state.subMajors;

export default class ProgramDisplay extends Component {
    render() {
        return (
            <div>
                <div className='container-fluid border'>
                    {programList.map(
                        program => (
                            <div className='card border-dark m-2 p-1'>
                                <div className='d-flex flex-row p-2'>
                                    <img src={logo} style={{maxWidth: "30px", maxHeight: "30px", marginRight:'5px'}} alt="logo"/>
                                    <h4>{program.name} Program</h4>
                                </div>
                                <div class="d-flex flex-column flex-lg-row justify-content-left h-25">
                                    {program.subMajorIds.map(
                                        subMajorId => (
                                            <SubMajor 
                                                subMajor={subMajorList.find(function(subMajor) {
                                                    return subMajor.id === subMajorId;
                                                })}
                                                program={program}
                                            />
                                        )
                                    )}
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        )
    }
}
