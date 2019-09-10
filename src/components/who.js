import React from 'react';

import {connect} from 'react-redux';

import cloudAnim from './cloudanimation'

import kaikuutamo from '../pictures3/kaikuutamo.jpg'

import Footer from './footer'

import './who.css';

class Who extends React.Component {

    container = React.createRef();
    scroller = null;

componentDidMount () {

    cloudAnim();

}

    render() {

        return (

            <div className="tablewrap">
            <div id="whowrap2">


                <div id="whopic">
                <img alt="Kai Kuutamo" src={kaikuutamo}></img>
                </div>


               <div id="whotitlewrap">
               <h1 id="whotitle">{this.props.texts.who.whotitle}</h1>
                
               </div>

                <div id="whointro">

                
                <div id="whotext">
                
                <p>{this.props.texts.who.whotext1}</p>

                <p>{this.props.texts.who.whotext2}</p>
                
                <p>{this.props.texts.who.whotext3}</p>

                <p>{this.props.texts.who.whotext4}</p>

                <p>{this.props.texts.who.whotext5}</p>


                </div>



                </div>

                <div id="wholinks">
                    <h2>{this.props.texts.who.whotitle2}</h2>

                    <a href="http://www.sirkussirkus.com/cv.pdf" target="black">{this.props.texts.who.link1}</a>
                    <a href="https://fi.wikipedia.org/wiki/Kai_Kuutamo" target="black">{this.props.texts.who.link2}</a>
                    <a href="http://www.sirkussirkus.com/merkkarit/" target="black">{this.props.texts.who.link3}</a>
                    <a href="http://www.sirkussirkus.com/herttakuninkaat/" target="black">{this.props.texts.who.link4}</a>
                    <a href="http://www.sirkussirkus.com/kkaa/" target="black">{this.props.texts.who.link5}</a>
                    <a href="http://putiikki.sirkussirkus.com/" target="black">{this.props.texts.who.link6}</a>
                    <a href="http://www.sirkussirkus.com/multibueno/index.html" target="black">{this.props.texts.who.link7}</a>
                    <a href="http://www.sirkussirkus.com/circuskampot/" target="black">{this.props.texts.who.link8}</a>

                </div>

                
                
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