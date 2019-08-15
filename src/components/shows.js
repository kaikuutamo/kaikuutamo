import React from 'react';

import {connect} from 'react-redux';

import cloudAnim from './cloudanimation'

import './shows.css';


class Shows extends React.Component {
 

    render() {


        return (

            <div>
                SHOWS
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