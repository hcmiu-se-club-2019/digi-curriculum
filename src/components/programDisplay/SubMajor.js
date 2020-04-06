import React, { Component } from 'react'

// import logo from '../../data/img/IU-logo.png'

export default class SubMajor extends Component {
    render() {
        const { subMajor, program } = this.props;
        return (
            <div className='card border-dark m-2 w-25' style={{maxWidth:'300px'}}>
                <h5 className='card-header'>{subMajor.name}</h5>
                {/* <img class="card-img-top align-items-center " src={logo} style={{maxWidth: "30px", maxHeight: "30px"}} alt="Logo" /> */}
                <div className='card-body'>
                    <p className='card-text'>{subMajor.id} for {program.id} students</p>
                    <a className='btn btn-primary' href='https://getbootstrap.com/docs/4.0/components/card/'>To Program</a>
                </div>
                <div class='card-footer text-muted'>Edited a long time ago</div>
            </div>
        )
    }
}
