import React from 'react';

import {connect} from 'react-redux';

import cloudAnim from './cloudanimation'

import './show.css';

import Footer from './footer'

class Show extends React.Component {




    componentDidMount () {

        cloudAnim();
    
    }

render () {


    var show;

    switch (window.location.search) {

        case "?show1":
          show = this.props.texts.show.show1;
          break;

        case "?show2":
        show = this.props.texts.show.show2;
        break;

        case "?show3":
        show = this.props.texts.show.show3;
        break;

        case "?show4":
        show = this.props.texts.show.show4;
        break;

        case "?show5":
        show = this.props.texts.show.show5;
        break;

        case "?show6":
        show = this.props.texts.show.show6;
        break;
    
        case "?show7":
        show = this.props.texts.show.show7;
        break;

        case "?show8":
        show = this.props.texts.show.show8;
        break;

        case "?show9":
        show = this.props.texts.show.show9;
        break;
    

      }

    return (
        <div className="tablewrap">
        <div className="tablewrap2">

        {show}


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

export default connect(mapStateToProps)(Show);