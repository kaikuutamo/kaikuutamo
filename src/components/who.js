import React from 'react';

import {connect} from 'react-redux';

import cloudAnim from './cloudanimation'

import kaikuutamo from '../pictures3/kaikuutamo.jpg'

import Footer from './footer'

import './who.css';

class Who extends React.Component {



componentDidMount () {

    cloudAnim();

}

    render() {

        

        return (

            <div className="tablewrap">
            <div className="tablewrap2">


                <div className="intropic">
                <img alt="Kai Kuutamo" src={kaikuutamo}></img>
                </div>


               {this.props.texts.who}

                


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

export default connect(mapStateToProps)(Who);