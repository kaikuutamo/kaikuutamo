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

            <div className="shows-title-and-button">

            {this.props.texts.shows.title1}

            <div className="show-button-wrap">
                 <Link className="shows-calendar-button" to="/calendar"><button className="shows-calendar-button2">KALENTERI</button></Link>
            </div>

            </div>

            <Link to="/show?show1"><img alt="Kai Kuutamo Show" src="./pictures5/show1.jpg"></img></Link>
            <Link to="/show?show10"><img alt="Matkalaukkusirkus" src="./pictures5/show10.jpg"></img></Link>
            <Link to="/show?show4"><img alt="Tuliesitys Prasu" src="./pictures5/show4.jpg"></img></Link>

            {this.props.texts.shows.title2}

            <Link to="/show?show2"><img alt="Show" src="./pictures5/show2.jpg"></img></Link>
            <Link to="/show?show3"><img alt="Show" src="./pictures5/show3.jpg"></img></Link>
            <Link to="/show?show6"><img alt="Show" src="./pictures5/show6.jpg"></img></Link>
            <Link to="/show?show8"><img alt="Show" src="./pictures5/show8.jpg"></img></Link>

            </div>
                
            {this.props.texts.shows.old}
                
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