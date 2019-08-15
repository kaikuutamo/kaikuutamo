import React from 'react';

import {connect} from 'react-redux';

import cloudAnim from './cloudanimation'

import './contact.css';


class Contact extends React.Component {
 

    render() {


        return (

            <div>
                CONTAAATCT
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