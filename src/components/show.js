import React from 'react';

import {connect} from 'react-redux';

import cloudAnim from './cloudanimation'

import './show.css';

import Footer from './footer'

class Show extends React.Component {

    constructor(props) {
        
        super();
    
    this.state = {
        pic: "",
        number: 0,
        
    }

    this.status = "off";
    this.pics = [];
    
    }

    popUp = (e) => {

                

        var popup = document.getElementById("popup2");

        
        
        var src;

        if (this.status === "off") {

            popup.style.display = "flex";
            this.status = "on";

            src = this.pics[e];

            this.setState({
                pic: src,
                number: e
            })
        }

        else if (this.status === "on") {

            popup.style.display = "none";
            this.status = "off";



        }

    }


    changePic = (e) => {

        if (e === "-") {

            if (this.state.number === 0) {
                
                var last = this.pics.length - 1;

                this.setState({
                    pic: this.pics[last],
                    number: this.pics.length - 1
                })


            }
    
            else {
                
                var num = this.state.number - 1;

                this.setState({
                    pic: this.pics[num],
                    number: num
                })

    
            }
    
        }
    
        else if (e === "+") {
    
            if (this.state.number === this.pics.length - 1) {
    
                this.setState({
                    pic: this.pics[0],
                    number: 0
                })
            }
    
            else {
    
                var temp2 = this.state.number + 1;
    
                this.setState({
                    pic: this.pics[temp2],
                    number: temp2
                })
    
            }
    
    
    
        }

    }


    componentDidMount () {

        cloudAnim();
    
    }

render () {


    var show, pics;


    switch (window.location.search) {

        case "?show1":
          show = this.props.texts.show.show1;
          pics = this.props.texts.show.show1_pics;
          break;

        case "?show2":
        show = this.props.texts.show.show2;
        pics = this.props.texts.show.show2_pics;
        break;

        case "?show3":
        show = this.props.texts.show.show3;
        pics = this.props.texts.show.show3_pics;
        break;

        case "?show4":
        show = this.props.texts.show.show4;
        pics = this.props.texts.show.show4_pics;
        break;

        case "?show5":
        show = this.props.texts.show.show5;
        pics = this.props.texts.show.show5_pics;
        break;

        case "?show6":
        show = this.props.texts.show.show6;
        pics = this.props.texts.show.show6_pics;
        break;
    
        case "?show7":
        show = this.props.texts.show.show7;
        pics = this.props.texts.show.show7_pics;
        break;

        case "?show8":
        show = this.props.texts.show.show8;
        pics = this.props.texts.show.show8_pics;
        break;

        case "?show9":
        show = this.props.texts.show.show9;
        pics = this.props.texts.show.show9_pics;
        break;
    
        case "?show10":
        show = this.props.texts.show.show10;
        pics = this.props.texts.show.show10_pics;
        break;

        default:
            break;

      }


      this.pics = pics;

      var counter = -1;

      var showPics = pics.map((x) => {

        counter += 1;
       
        var temp = 0 + counter;

          return <div onClick={() => this.popUp(temp)} style={{backgroundImage: `url(${x})`}} key={counter} className="showsmallpic">
                
                

                 </div>
      })

    return (
        <div className="tablewrap">
        <div className="tablewrap2">

        {show}

        

        <div id="showpics">
          {showPics}
        </div>

        
        </div>
        <Footer />

        <div id="popup2">
        <div onClick={() => this.popUp("close")}  id="popupx2"><p>X</p></div>

        <div id="popupimg">
                <div onClick={() => this.changePic("-")} className="arrow" id="arrowleft"><p>&#x2039;</p></div>
                <div onClick={() => this.changePic("+")} className="arrow" id="arrowright"><p>&#x203A;</p></div>
                <img alt="Kai Kuutamo" src={this.state.pic}></img>
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

export default connect(mapStateToProps)(Show);