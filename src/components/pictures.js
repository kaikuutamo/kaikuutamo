import React from 'react';

import {connect} from 'react-redux';

import cloudAnim from './cloudanimation'

import './pictures.css';

import Footer from './footer'

class Pictures extends React.Component {
 
    constructor(props) {
        
        super();
    
    this.state = {
        pic: "",
        number: 0
    }

    this.status = "off";
    
    
    }

    popUp = (e) => {
        
        var popup = document.getElementById("popup");

        

        var src = '/pictures4/' + e + '.jpg'
        
        

        if (this.status === "off") {

            popup.style.display = "flex";
            this.status = "on";

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

        if (this.state.number === 1) {

            this.setState({
                pic: '/pictures4/23.jpg',
                number: 23
            })
        }

        else {

            var temp = this.state.number - 1;

            this.setState({
                pic: '/pictures4/'+ temp +'.jpg',
                number: temp
            })

        }

    }

    else if (e === "+") {

        if (this.state.number === 23) {

            this.setState({
                pic: '/pictures4/1.jpg',
                number: 1
            })
        }

        else {

            var temp2 = this.state.number + 1;

            this.setState({
                pic: '/pictures4/'+ temp2 +'.jpg',
                number: temp2
            })

        }



    }


    }

    componentDidMount () {

        cloudAnim();
    
    }

    render() {


        return (

            <div className="tablewrap">

                <div id="popup">

                <div onClick={this.popUp} id="popupx"><p>X</p></div>
                
                <div id="popupimg">
                <div onClick={() => this.changePic("-")} className="arrow" id="arrowleft"><p>&#x2039;</p></div>
                <div onClick={() => this.changePic("+")} className="arrow" id="arrowright"><p>&#x203A;</p></div>
                <img alt="Kai Kuutamo" src={this.state.pic}></img>
                </div>

                </div>

            <div className="tablewrap2">

            <div className="tabletitlewrap">
              
     
             </div>

            <div id="piccontainer">
                
                <div>
                <img onClick={() => this.popUp(1)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/1.jpg'></img>
                <img onClick={() => this.popUp(2)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/2.jpg'></img>
                <img onClick={() => this.popUp(3)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/3.jpg'></img>
                <img onClick={() => this.popUp(4)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/4.jpg'></img>
                <img onClick={() => this.popUp(5)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/5.jpg'></img>
                <img onClick={() => this.popUp(6)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/6.jpg'></img>
                <img onClick={() => this.popUp(7)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/7.jpg'></img>
                <img onClick={() => this.popUp(8)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/8.jpg'></img>
                </div>

                <div>
                <img onClick={() => this.popUp(9)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/9.jpg'></img>
                <img onClick={() => this.popUp(10)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/10.jpg'></img>
                <img onClick={() => this.popUp(11)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/11.jpg'></img>
                <img onClick={() => this.popUp(12)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/12.jpg'></img>
                <img onClick={() => this.popUp(13)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/13.jpg'></img>
                <img onClick={() => this.popUp(14)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/14.jpg'></img>
                <img onClick={() => this.popUp(15)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/15.jpg'></img>
                </div>

                <div>
                <img onClick={() => this.popUp(16)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/16.jpg'></img>
                <img onClick={() => this.popUp(17)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/17.jpg'></img>
                <img onClick={() => this.popUp(18)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/18.jpg'></img>
                <img onClick={() => this.popUp(19)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/19.jpg'></img>
                <img onClick={() => this.popUp(20)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/20.jpg'></img>
                <img onClick={() => this.popUp(21)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/12.jpg'></img>
                <img onClick={() => this.popUp(22)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/22.jpg'></img>
                <img onClick={() => this.popUp(23)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/23.jpg'></img>
                </div>

                

            </div>


            <div id="piccontainer2">

                <div>

                <img onClick={() => this.popUp(1)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/1.jpg'></img>
                <img onClick={() => this.popUp(2)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/2.jpg'></img>
                <img onClick={() => this.popUp(3)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/3.jpg'></img>
                <img onClick={() => this.popUp(4)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/4.jpg'></img>
                <img onClick={() => this.popUp(5)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/5.jpg'></img>
                <img onClick={() => this.popUp(6)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/6.jpg'></img>
                <img onClick={() => this.popUp(7)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/7.jpg'></img>
                <img onClick={() => this.popUp(8)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/8.jpg'></img>
                <img onClick={() => this.popUp(9)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/9.jpg'></img>
                <img onClick={() => this.popUp(10)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/10.jpg'></img>
                <img onClick={() => this.popUp(11)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/11.jpg'></img>

                <img onClick={() => this.popUp(22)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/22.jpg'></img>

                </div>

                <div>

                <img onClick={() => this.popUp(12)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/12.jpg'></img>
                <img onClick={() => this.popUp(13)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/13.jpg'></img>
                <img onClick={() => this.popUp(14)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/14.jpg'></img>
                <img onClick={() => this.popUp(15)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/15.jpg'></img>
                <img onClick={() => this.popUp(16)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/16.jpg'></img>
                <img onClick={() => this.popUp(17)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/17.jpg'></img>
                <img onClick={() => this.popUp(18)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/18.jpg'></img>
                <img onClick={() => this.popUp(19)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/19.jpg'></img>
                <img onClick={() => this.popUp(20)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/20.jpg'></img>
                <img onClick={() => this.popUp(21)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/12.jpg'></img>
                
                <img onClick={() => this.popUp(23)} className="gallerypic" alt="Kai Kuutamo" src='/pictures4/23.jpg'></img>

                </div>

                
                
                
            
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

export default connect(mapStateToProps)(Pictures);