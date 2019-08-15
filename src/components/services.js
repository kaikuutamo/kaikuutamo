import React from 'react';

import {connect} from 'react-redux';

import cloudAnim from './cloudanimation'

import './services.css';


class Services extends React.Component {
 

    render() {


        return (

            <div>
                SERVICEEEES
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