import React from 'react';

import {connect} from 'react-redux';

import cloudAnim from './cloudanimation'

import './offer.css';


class Offer extends React.Component {
 

    render() {


        return (

            <div>
                OFFERRS
            </div>

        )


    }



}

const mapStateToProps = (state) => {
    return {
        texts: state.texts
    }
}

export default connect(mapStateToProps)(Offer);