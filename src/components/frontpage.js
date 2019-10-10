
import React from 'react';

import {connect} from 'react-redux';

import {TweenMax} from "gsap/TweenMax";

import './frontpage.css';


import pic1 from '../pictures2/s1.jpg'
import pic2 from '../pictures2/s2.jpg'
import pic3 from '../pictures2/s3.jpg'

import facebook from '../pictures2/facebook.png'
import instagram from '../pictures2/instagram.png'
import youtube from '../pictures2/youtube.png'



var pics = [pic1, pic2, pic3];



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

        this.number = 1;

    }
    

dimensions = () => {
    
    var wrap = document.getElementById("frontwrap");

    var cont = document.getElementById("frontcont");
 
    var social = document.getElementById("frontsocialwrap");
    
    //var mainwrap = document.getElementById("frontmain")


    if (wrap.clientHeight <= cont.clientHeight+50) {
        
        //mainwrap.style.height = "auto";
        wrap.style.height = "auto";
        wrap.style.paddingTop = "30px";
        wrap.style.paddingBottom = "30px";
        social.style.position = "relative";
        
    }

    else {

        //mainwrap.style.height = "calc(100% - 144px)";
        wrap.style.height = "calc(100% - 50px)";
        wrap.style.paddingTop = "0px";
        wrap.style.paddingBottom = "0px";
        social.style.position = "fixed";

    }

}


slideShow = () => {
    
    if (this.mounted === "false") {return null}

    var pic = document.getElementById("frontpic");
    var text = document.getElementById("fronttext");
    
    
    TweenMax.to(pic, 0.5, {left: "100px", opacity: "0"});
    TweenMax.to(text, 0.5, {left: "-170px", opacity: "0"});
    

    setTimeout(() => {
        
        if (this.mounted === "false") {return null}

        if (this.number === 1 && this.mounted === "true") {
            this.setState({
                pic: pics[1],
                text: this.props.texts.frontpage.words[1],
                text2: this.props.texts.frontpage.words2[1]
            })
            this.number = 2;
        }
    
        else if (this.number === 2 && this.mounted === "true") {
            this.setState({
                pic: pics[2],
                text: this.props.texts.frontpage.words[2],
                text2: this.props.texts.frontpage.words2[2]
            })
            this.number = 3;
        }
    
        else if (this.number === 3 && this.mounted === "true") {
            this.setState({
                pic: pics[0],
                text: this.props.texts.frontpage.words[0],
                text2: this.props.texts.frontpage.words2[0]
    
            })
            this.number = 1;
        }


    }, 500);

    if (this.mounted === "false") {return null}

    if (window.innerWidth < 1200) {
        TweenMax.to(pic, 0.5, {left: "0px", opacity: "1", delay: 1});
        TweenMax.to(text, 0.5, {left: "0px", opacity: "1", delay: 1});
    }

    else {
        TweenMax.to(pic, 0.5, {left: "0px", opacity: "1", delay: 1});
        TweenMax.to(text, 0.5, {left: "-70px", opacity: "1", delay: 1});
    }


    

    
}    


componentDidMount  () {

    this.dimensions();

    window.addEventListener('resize', this.dimensions);

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
    window.removeEventListener("resize", this.dimensions);

}

render() {




return (
<div id="frontmain">
<div id="frontwrap">
    


    <div id="frontcont">

        <div id="slideimgcont">
        <img alt="Slideshow" id="frontpic" src={this.state.pic}></img>
        </div>

        <div id="fronttext">
        <p id="fronttext1">{this.state.text}</p>
        <p id="fronttext2">{this.state.text2}</p>
        </div>


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