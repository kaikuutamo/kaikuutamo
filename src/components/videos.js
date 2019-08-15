import React from 'react';

import {connect} from 'react-redux';

import cloudAnim from './cloudanimation'

import './videos.css';


class Videos extends React.Component {
 

    render() {


        return (

            <div>
                VIDEOOOOOS!
            </div>

        )


    }



}

const mapStateToProps = (state) => {
    return {
        texts: state.texts
    }
}

export default connect(mapStateToProps)(Videos);