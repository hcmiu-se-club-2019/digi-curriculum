import React, { Component } from 'react'
import state from '../../data/json/testData2'
import logo from '../../data/img/IU-logo.png'
import SubMajor from './SubMajor';
import axios from 'axios';


export default class ProgramDisplay extends Component {

    constructor(props){
    super(props);
    var programList = state.programTypes;
    var subMajorList = state.subMajors;
    this.state = {programList: programList, subMajorList: subMajorList};
    }

    async componentDidMount() {
        // GET request using axios with error handling
        const subMajorList = await axios.get('http://localhost:3000/programs');
        // const subMajorList = await axios.get('http://localhost:3000/programs/+'programList.+'/courses');
        const data = subMajorList.data.listProgram;
        var programList = [
            {
              id: "IU",
              name: "International University",
              subMajorIds: []
            },
            {
              id: "WE",
              name: "West of England University",
              subMajorIds: []
            },
            {
              id: "UN",
              name: "Nottingham University",
              subMajorIds: []
            },
            {
              id: "SB",
              name: "SUNY Binghamton University",
              subMajorIds: []
            },
            {
                id: "GR",
                name: "Rutgers University",
                subMajorIds: []
            }];

        var newProgramList = programList.map((program) => {
            for (const subMajor of data){
                console.log(subMajor);
                if (subMajor.type === program.id)
                {
                    program.subMajorIds.push(subMajor.id);
                    console.log(subMajor);
                }
            }
            return program;
        })
        console.log(newProgramList);
        this.setState({programList: newProgramList, subMajorList: data});
    }
        
        
    render() {
        return (
            <div>
                <div className='container-fluid border'>
                    {this.state.programList.map(
                        program => (
                            <div className='card border-dark m-2 p-1' style={{display: 'flex', flexWrap: 'wrap'}}>
                                <div className='d-flex flex-row p-2'>
                                    <img src={logo} style={{maxWidth: "30px", maxHeight: "30px", marginRight:'5px'}} alt="logo"/>
                                    <h4>{program.name} Program</h4>
                                </div>
                                <div class="d-flex flex-column flex-lg-row justify-content-left h-25" style= {{flexWrap: 'wrap'}}>
                                    {program.subMajorIds.map(
                                        subMajorId => (
                                            <SubMajor 
                                                subMajor={this.state.subMajorList.find(function(subMajor) {
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
