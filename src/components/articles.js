import React from 'react';

import {connect} from 'react-redux';

import cloudAnim from './cloudanimation'

import './articles.css';


class Articles extends React.Component {
 

    render() {


        return (

            <div>
                ARTICLES
            </div>

        )


    }



}

const mapStateToProps = (state) => {
    return {
        texts: state.texts
    }
}

export default connect(mapStateToProps)(Articles);