import React, { Component } from 'react'
import state from '../../data/json/testData2'
import Logo from '../../data/img/IULogo.png'

const programList = state.programTypes;

export default class ProgramDisplay extends Component {
    render() {
        return (
            <div>
                {programList.map(program => (<li>{program.name}</li>))}
                <div className='container-fluid border' style={{height:'700px'}}>
                    <div className='card border-dark m-1 p-1 h-50'>
                        <div className='d-flex flex-row p-2'>
                            <img className='school-img' scr={Logo} alt='logo'/>
                            {/* {programList.map(program => (<h3>{program.name} Program</h3>))} */}
                            <h4>International University Program</h4>
                        </div>
                        <div class="program-submajors d-flex flex-column flex-lg-row justify-content-center">
                            <div class="card border-dark m-4 w-25 text-center">
                                <h5 class="card-header border-dark">Computer Science</h5>
                                <img class="card-img-top" src="logo192.png" alt="Logo"/>
                                <div class="card-body">
                                <p class="card-text">Computer Science <br/> for IU students</p>
                                <footer class="blockquote-footer mb-2">Someone famous in <cite title="HCMIU">HCMIU</cite></footer>
                                <a href="https://getbootstrap.com/docs/4.0/components/card/" class="btn btn-primary">To Program</a>
                                </div>
                                <div class="card-footer border-dark text-muted">Edited 4 days ago</div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
