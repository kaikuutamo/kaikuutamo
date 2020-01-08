import React from 'react';

import {connect} from 'react-redux';

import cloudAnim from './cloudanimation'

import './media.css';

import Footer from './footer'

class Media extends React.Component {
 

    componentDidMount () {

        cloudAnim();
    
    }

    render() {


        return (

            <div className="tablewrap">
            <div className="tablewrap2">

            {this.props.texts.promo}

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

export default connect(mapStateToProps)(Media);