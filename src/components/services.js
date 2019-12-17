import React from 'react';

import {connect} from 'react-redux';

import cloudAnim from './cloudanimation'

import './services.css';

import services from '../pictures3/services.jpg'

import Footer from './footer'

class Services extends React.Component {
 

    componentDidMount () {

        cloudAnim();
    
    }

    render() {


        return (

            <div className="tablewrap">
            <div className="tablewrap2">

            <div className="intropic">
            <img alt="Sirkussirkus palvelee" src={services}></img>
            </div>

            {this.props.texts.services}

            <div id="servicesmargin"></div>
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

export default connect(mapStateToProps)(Services);