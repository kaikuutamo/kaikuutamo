import React from 'react';

import {connect} from 'react-redux';

import cloudAnim from './cloudanimation'

import './videos.css';

import Footer from './footer'

class Videos extends React.Component {
 


    componentDidMount () {

        cloudAnim();
    
    }

    render() {


        return (

<div className="tablewrap">
            <div className="tablewrap2">

            {this.props.texts.videos}

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

export default connect(mapStateToProps)(Videos);