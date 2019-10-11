import React from 'react';

import {connect} from 'react-redux';

import cloudAnim from './cloudanimation'

import './contact.css';

import Footer from './footer'

class Contact extends React.Component {
 


    componentDidMount () {

        cloudAnim();
    
    }

    render() {


        return (

            <div className="tablewrap">
            <div className="tablewrap2">
            <div className="contactmargin"></div>

            {this.props.texts.contact}

            <div className="contactmargin"></div>
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

export default connect(mapStateToProps)(Contact);