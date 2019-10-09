import React from 'react';

import {connect} from 'react-redux';

import cloudAnim from './cloudanimation'

import './shows.css';

import Footer from './footer'

import {Link} from 'react-router-dom';




class Shows extends React.Component {
 

    componentDidMount () {

        cloudAnim();
    
    }

    render() {


        return (

            <div className="tablewrap">
            <div className="tablewrap2">

            <div className="tabletitlewrap">
              
     
             </div>

            <div id="showcontainer">

            <Link to="/show?show1"><img alt="Show" src="./pictures5/show1.jpg"></img></Link>
            <Link to="/show?show2"><img alt="Show" src="./pictures5/show2.jpg"></img></Link>
            <Link to="/show?show3"><img alt="Show" src="./pictures5/show3.jpg"></img></Link>

            <Link to="/show?show4"><img alt="Show" src="./pictures5/show4.jpg"></img></Link>
            <Link to="/show?show5"><img alt="Show" src="./pictures5/show5.jpg"></img></Link>
            <Link to="/show?show6"> <img alt="Show" src="./pictures5/show6.jpg"></img></Link>

            <Link to="/show?show7"><img alt="Show" src="./pictures5/show7.jpg"></img></Link>
            <Link to="/show?show8"><img alt="Show" src="./pictures5/show8.jpg"></img></Link>
            <Link to="/show?show9"><img alt="Show" src="./pictures5/show9.jpg"></img></Link>

            </div>
                
            </div>
            <Footer />
            </div>
        )


    }



}

const mapStateToProps = (state) => {
    return {
        texts: state.texts
    }
}

export default connect(mapStateToProps)(Shows);