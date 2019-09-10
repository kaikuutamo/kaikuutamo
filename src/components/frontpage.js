
import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";

import './frontpage.css';


import pic1 from '../pictures2/pic1.jpg'
import pic2 from '../pictures2/pic2.jpg'
import pic3 from '../pictures2/pic3.jpg'

import facebook from '../pictures2/facebook.png'
import instagram from '../pictures2/instagram.png'
import youtube from '../pictures2/youtube.png'



var pics = [pic1, pic2, pic3];

var number = 1;

var theInterval;

class FrontPage extends React.Component {

    constructor(props) {
        super();

        this.state = {
            pic: pic1,
            text: "", 
            text2: "",
            words: [],
            words2: []
            
        }

        this.mounted = "true";

    }
    


slideShow = () => {
    
    if (this.mounted === "false") {return null}

    var pic = document.getElementById("frontpic");
    var text = document.getElementById("fronttext");
    
    
    TweenMax.to(pic, 0.5, {left: "100px", opacity: "0"});
    TweenMax.to(text, 0.5, {left: "-170px", opacity: "0"});
    

    setTimeout(() => {
        
        if (number === 1 && this.mounted === "true") {
            this.setState({
                pic: pics[1],
                text: this.props.texts.frontpage.words[1],
                text2: this.props.texts.frontpage.words2[1]
            })
            number = 2;
        }
    
        else if (number === 2 && this.mounted === "true") {
            this.setState({
                pic: pics[2],
                text: this.props.texts.frontpage.words[2],
                text2: this.props.texts.frontpage.words2[2]
            })
            number = 3;
        }
    
        else if (number === 3 && this.mounted === "true") {
            this.setState({
                pic: pics[0],
                text: this.props.texts.frontpage.words[0],
                text2: this.props.texts.frontpage.words2[0]
    
            })
            number = 1;
        }


    }, 500);

    

    TweenMax.to(pic, 0.5, {left: "0px", opacity: "1", delay: 1});
    TweenMax.to(text, 0.5, {left: "-70px", opacity: "1", delay: 1});
    

    
}    

componentWillMount () {

    theInterval = setInterval(() => {
        this.slideShow()
    }, 6000);

    this.setState({
        text: this.props.texts.frontpage.text, 
            text2: this.props.texts.frontpage.text2,
        words: this.props.texts.frontpage.words,
            words2: this.props.texts.frontpage.words2
    })

}

componentWillUnmount () {
    this.mounted = "false";
    clearInterval(theInterval);
}

render() {




return (

<div id="frontwrap">
    


    <div id="frontcont">
        <img alt="Slideshow" id="frontpic" src={this.state.pic}></img>
        <div id="fronttext">
        <p id="fronttext1">{this.state.text}</p>
        <p id="fronttext2">{this.state.text2}</p>
        </div>
    </div>


    <div id="frontsocialwrap">
    <div id="frontsocialwrap2">
    <a href="https://www.facebook.com/kuutamosirkus/" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook"></img></a>
    <a href="https://www.instagram.com/kaikuutamo/" target="_blank" rel="noopener noreferrer" ><img src={instagram} alt="instagram"></img></a>
    <a href="https://www.youtube.com/user/kaikuutamo/videos" target="_blank" rel="noopener noreferrer" ><img src={youtube} alt="youtube"></img></a>
    </div>
    </div>


    
</div>

)

}

}

const mapStateToProps = (state) => {
    return {
        texts: state.texts
    }
}

export default connect(mapStateToProps)(FrontPage);