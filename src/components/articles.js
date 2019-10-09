import React from 'react';

import {connect} from 'react-redux';

import cloudAnim from './cloudanimation'

import './articles.css';

import Footer from './footer'

class Articles extends React.Component {
 

    componentDidMount () {

        cloudAnim();
    
    }

    render() {


        return (

            <div className="tablewrap">
            <div className="tablewrap2">

           
            {this.props.texts.articles}

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

export default connect(mapStateToProps)(Articles);