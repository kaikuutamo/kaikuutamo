
import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {TweenMax} from "gsap/TweenMax";

import logo from '../pictures/logo2.png'
import logo2 from '../pictures/logo3.png'

import './header.css';

class Header extends React.Component {


changeLan = (arg) => {



    if (arg === "fin") {
        this.props.changeLanguage("fin");
    }

    if (arg === "eng") {
        this.props.changeLanguage("eng");
    }


}

mobileMenu = () => {
    console.log("MOI")
}


render() {


return (
    <div>

    <header id="headwrap">
        
    <div id="headlogowrap">
    <Link to="/"><img  id="headlogo" alt="Kai Kuutamo logo" src={logo}></img></Link>
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

    <div onClick={this.mobileMenu()} id="hamburger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
    </div>

    </header>

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