
import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


import logo from '../pictures/logo2.png'

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


render() {


return (
    <header id="headwrap">
        
    <div id="headlogowrap">
    <Link to="/"><img  id="headlogo" alt="Kai Kuutamo logo" src={logo}></img></Link>
    </div>

    <div id="headlangwrap">
        <p onClick={() => this.changeLan("fin")}>Fin</p>
        <p onClick={() => this.changeLan("eng")}>Eng</p>
    </div>

    <div id="headlinkwrap">

    <nav>

        <ul>
                <li><Link to="/who">{this.props.texts.header.who}</Link></li>
                <li><Link to="/services">{this.props.texts.header.services}</Link></li>
                <li><Link to="/shows">{this.props.texts.header.shows}</Link></li>
                <li><Link to="/pictures">{this.props.texts.header.pictures}</Link></li>
                <li><Link to="/videos">{this.props.texts.header.videos}</Link></li>
                <li><Link to="/articles">{this.props.texts.header.articles}</Link></li>
                <li><Link to="/media">{this.props.texts.header.media}</Link></li>
                <li><Link to="/offer">{this.props.texts.header.offer}</Link></li>
                <li><Link to="/contact">{this.props.texts.header.contact}</Link></li>
        </ul>

    </nav>

    </div>


    </header>
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