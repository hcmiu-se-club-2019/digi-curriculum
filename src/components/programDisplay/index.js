import React, { Component } from 'react'
import state from '../../data/reduxState'

const programList = state.subMajorPrograms;

export default class ProgramDisplay extends Component {
    render() {
        return (
            <div>
                <ul>
                    {programList.map(program => (<li>{program}</li>))}
                </ul>
            </div>
        )
    }
}
