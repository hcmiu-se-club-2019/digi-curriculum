import React from 'react'
import './login.css'
import $ from 'jquery'
import { Link } from 'react-router-dom';
import campus from './image/campus.jpg'
class Login extends React.Component {
    constructor() {
      super();
      this.state = {};
    }
    componentDidMount() {
      $(".txtb input").on("focus", function(){
        $(this).addClass("focus");
      });
      $(".txtb input").on("blur", function(){
        if ($(this).val() === "")
            $(this).removeClass("focus");
    });
    }
    
    buttonOnClick = () => {
      window.location.href = "http://localhost:5000/auth/google"
    }
    render() { 
        return ( 
        <React.Fragment>
          <form className="reg-form">
            <h1> Log in </h1>
            <button className = "google-btn" type = "button" onClick = {() => {this.buttonOnClick()}}>
                Google+
            </button>
          </form>
        </React.Fragment>
        );
    }
}
 
export default Login;