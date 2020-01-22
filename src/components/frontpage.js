
import React from 'react';

import {connect} from 'react-redux';

import gsap from "gsap";

import './frontpage.css';


import pic1 from '../pictures2/s1.jpg'
import pic2 from '../pictures2/s2.jpg'
import pic3 from '../pictures2/s3.jpg'



var theInterval;


class FrontPage extends React.Component {

    constructor(props) {
        super();

        this.state = {
            text: "", 
            text2: "",
            words: [],
            words2: []
            
        }

        this.mounted = "true";

        this.number = 1;

        this.calc = 0;
        
    }
    


loadPic = () => {

    this.calc = this.calc + 1;

    if (this.calc === 3) {
        
        var loadingScreen = document.getElementById("loadingscreen");
        var loadingCircle = document.getElementById("loadingcircle");


        if (this.props.loadingscreen === "on") {
            gsap.to(loadingScreen, 0.8, {opacity: 0, delay: 1})
            gsap.to(loadingScreen, 0, {display: "none", delay: 2});
            gsap.to(loadingCircle, 0, {animation: "none", delay: 2});
        }

        this.props.loading();

        theInterval =  setInterval(() => {
       
            this.slideShow();
    
       }, 6000);

    }

}



slideShow = () => {
    
    

    if (this.mounted === "false") {return null}

    var pic = document.getElementsByClassName("frontpic");
    var text = document.getElementById("fronttext");
   
    gsap.to(pic, 0.5, {left: "100px", opacity: "0"});
    gsap.to(text, 0.5, {left: "-170px", opacity: "0"});

    setTimeout(() => {
        
        if (this.mounted === "false") {return null}

        if (this.number === 1 && this.mounted === "true") {
            this.setState({
                text: this.props.texts.frontpage.words[1],
                text2: this.props.texts.frontpage.words2[1]
            })
            document.getElementById("frontpic1").style.display = "none";
            document.getElementById("frontpic2").style.display = "initial";

            this.number = 2;
        }

        else if (this.number === 2 && this.mounted === "true") {
            this.setState({
                text: this.props.texts.frontpage.words[2],
                text2: this.props.texts.frontpage.words2[2]
            })
            document.getElementById("frontpic2").style.display = "none";
            document.getElementById("frontpic3").style.display = "initial";
            this.number = 3;
        }

        else if (this.number === 3 && this.mounted === "true") {
            this.setState({

                text: this.props.texts.frontpage.words[0],
                text2: this.props.texts.frontpage.words2[0]
                })
                document.getElementById("frontpic3").style.display = "none";
                document.getElementById("frontpic1").style.display = "initial";
                this.number = 1;
        }

        
    }, 500);


    if (this.mounted === "false") {return null}

    if (window.innerWidth < 1200) {
        gsap.to(pic, 0.5, {left: "0px", opacity: "1", delay: 1});
        gsap.to(text, 0.5, {left: "0px", opacity: "1", delay: 1});
    }

    else {
        gsap.to(pic, 0.5, {left: "0px", opacity: "1", delay: 1});
        gsap.to(text, 0.5, {left: "-70px", opacity: "1", delay: 1});
    }

}    




componentDidMount  () {

    window.scrollTo(0, 0)

    var loadingScreen = document.getElementById("loadingscreen");
    var loadingCircle = document.getElementById("loadingcircle");

    if (this.props.loadingscreen === "off") {

        loadingScreen.style.display = "none";
        loadingCircle.style.animation ="none";
    }


}


componentWillMount () {


    this.setState({
        text: this.props.texts.frontpage.text, 
            text2: this.props.texts.frontpage.text2,
        words: this.props.texts.frontpage.words,
            words2: this.props.texts.frontpage.words2
    })


}

componentWillUnmount () {
    
    this.mounted = "false";
    clearInterval(theInterval)
    
}

render() {



return (
<div id="frontmain">
<div id="frontwrap">
    
<div id="loadingscreen">
      <div id="loadingcircle"></div>
</div>

    <div id="frontcont">

        <div id="slideimgcont">
        <img onLoad={this.loadPic} alt="Slideshow" className="frontpic" id="frontpic1" src={pic1}></img>
        <img onLoad={this.loadPic} alt="Slideshow" className="frontpic" id="frontpic2" src={pic2}></img>
        <img onLoad={this.loadPic} alt="Slideshow" className="frontpic" id="frontpic3" src={pic3}></img>
        </div>

        <div id="fronttext">
        <div className="fronttextcont">
        <p id="fronttext1">{this.state.text}</p>
        </div>
        <div className="fronttextcont">
        <p id="fronttext2">{this.state.text2}</p>
        </div>
        </div>


    </div>

    
</div>



</div>

)

}

}

const mapStateToProps = (state) => {
    return {
        texts: state.texts,
        loadingscreen: state.loadingscreen
    }
}

function mapDispatchToProps (dispatch) {
  
    return {
      loading: function (arg) {dispatch({
          type: "loading",
          message: "off"
      })}
      
    }
    
  }

export default connect(mapStateToProps, mapDispatchToProps)(FrontPage);