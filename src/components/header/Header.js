import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import logo from'../../data/img/IU-logo.png'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-dark navbar-expand-lg navigation-clean-search" style={{backgroundColor: "#4986e1"}}>
                    <div class="container">
                        <a class="navbar-brand" href="/">
                            <img src={logo} style={{maxWidth: "40px", maxHeight: "40px"}} alt="logo"/>
                        </a>
                        <a class="navbar-brand" href="/">DigiCurri</a>
                        <button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1">
                            <span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span>
                        </button>
                        <div
                            class="collapse navbar-collapse" id="navcol-1" style={{padding: "5px"}}>
                            <ul class="nav navbar-nav">
                                <li class="nav-item" role="presentation"><a class="nav-link" href="/">All Courses</a></li>
                                <li class="nav-item dropdown">
                                    <a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="/">Other Majors</a>
                                    <div class="dropdown-menu" role="menu">
                                        <a class="dropdown-item" role="presentation" href="/">BA</a>
                                        <a class="dropdown-item" role="presentation" href="/">IEM</a>
                                        <a class="dropdown-item" role="presentation" href="/">BT</a>
                                    </div>
                                </li>
                            </ul>
                            <form class="form-inline mr-auto" target="_self">
                                <div class="form-group">
                                    <label for="search-field"></label>
                                    <input class="form-control search-field" type="search" id="search-field" name="search"/>
                                    <i class="fa fa-search" style={{paddingLeft: "5px"}}></i></div>
                            </form>
                            <span class="navbar-text">
                                <a class="login" href="/" style={{paddingRight: "10px"}}>Log In</a>
                            </span>
                            <a class="btn btn-light action-button" role="button" href="/">Sign Up</a>
                        </div>
                    </div>
                </nav>
            </div>

        )
    }
}
