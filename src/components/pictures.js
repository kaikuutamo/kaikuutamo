import React from 'react';

import {connect} from 'react-redux';

import cloudAnim from './cloudanimation'

import './services.css';


class Pictures extends React.Component {
 

    render() {


        return (

            <div>
                PICTURES
            </div>

        )


    }



}

const mapStateToProps = (state) => {
    return {
        texts: state.texts
    }
}

export default connect(mapStateToProps)(Pictures);