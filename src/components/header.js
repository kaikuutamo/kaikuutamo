
import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import gsap from "gsap";


import logo from '../pictures/logo2.png'
import logo2 from '../pictures/logo3.png'

import './header.css';

var tween;

class Header extends React.Component {

    constructor(props) {
        super();


        this.status = "off";

    }

changeLan = (arg) => {



    if (arg === "fin") {
        this.props.changeLanguage("fin");
    }

    if (arg === "eng") {
        this.props.changeLanguage("eng");
    }


}

mobileMenu = () => {
    
    

    var ham = document.getElementById("hamburger");

    var menu = document.getElementById("mobilemenu");

    var nav = document.getElementById("mobilenav");

    var height = window.innerHeight - 50;

    if (this.status === "off") {
        gsap.to(ham, 0.5, {transform: "rotate(-90deg)"})
        gsap.to(menu, 0.5, {height: height})
        tween = gsap.to(nav, 0, {display: "initial", delay: 0.5})
        this.status = "on";
    }

    else if (this.status === "on") {
        tween.kill();
        gsap.to(nav, 0, {display: "none"})
        gsap.to(ham, 0.5, {transform: "rotate(0deg)"})
        gsap.to(menu, 0.5, {height: "0%"})
        this.status = "off";
    }

    

}

/*
dimensions = () => {
    
    var nav = document.getElementById("mobilenav")

    console.log(nav.clientHeight)
}


componentDidMount () {

    this.dimensions();
    window.addEventListener('resize', this.dimensions);

}
*/



render() {


return (
    <div>

    <header id="headwrap">
        
    <div id="headlogowrap">
    <Link to="/"><img id="headlogo" alt="Kai Kuutamo logo" src={logo}></img></Link>
    </div>

    <div id="headlangwrap">
        <p onClick={() => this.changeLan("fin")}>Fin</p>
        <p onClick={() => this.changeLan("eng")}>Eng</p>
    </div>

    {this.props.texts.header}


    </header>

    <header id="mobileheader">

    <div id="headlogowrap2">
    <Link to="/"><img  id="headlogo" alt="Kai Kuutamo logo" src={logo2}></img></Link>
    </div>

    <div onClick={this.mobileMenu} id="hamburger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
    </div>

    </header>

    <div id="emptybox"></div>


    <div id="mobilemenu">

    <nav id="mobilenav">

    <ul onClick={this.mobileMenu}>

    {this.props.texts.mobilemenu}

    </ul>

    <div id="headlangwrap2">
        <p onClick={() => this.changeLan("fin")}>Fin</p>
        <p onClick={() => this.changeLan("eng")}>Eng</p>
    </div>

    </nav>



    </div>

    </div>
)

}


}

const mapStateToProps = (state) => {
    return {
        texts: state.texts
    }
}

function mapDispatchToProps (dispatch) {
  
    return {
      changeLanguage: function (arg) {dispatch({
          type: "change",
          language: arg
      })}
      
    }
    
  }

export default connect(mapStateToProps, mapDispatchToProps)(Header);