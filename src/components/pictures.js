import React from 'react';

import {connect} from 'react-redux';

import cloudAnim from './cloudanimation'

import './pictures.css';

import Footer from './footer'

class Pictures extends React.Component {
 

    componentDidMount () {

        cloudAnim();
    
    }

    render() {


        return (

            <div className="tablewrap">
            <div className="tablewrap2">

            <div className="tabletitlewrap">
              <h1 className="tabletitle">Kuvat</h1>
     
             </div>

            <div id="piccontainer">
                <div>
                <img alt="Kai Kuutamo" src='/pictures4/1.jpg'></img>
                <img alt="Kai Kuutamo" src='/pictures4/2.jpg'></img>
                <img alt="Kai Kuutamo" src='/pictures4/3.jpg'></img>
                <img alt="Kai Kuutamo" src='/pictures4/4.jpg'></img>
                <img alt="Kai Kuutamo" src='/pictures4/5.jpg'></img>
                <img alt="Kai Kuutamo" src='/pictures4/6.jpg'></img>
                <img alt="Kai Kuutamo" src='/pictures4/7.jpg'></img>
                </div>

<div>
                <img alt="Kai Kuutamo" src='/pictures4/8.jpg'></img>
                <img alt="Kai Kuutamo" src='/pictures4/9.jpg'></img>
                <img alt="Kai Kuutamo" src='/pictures4/10.jpg'></img>
                <img alt="Kai Kuutamo" src='/pictures4/11.jpg'></img>
                <img alt="Kai Kuutamo" src='/pictures4/12.jpg'></img>
                <img alt="Kai Kuutamo" src='/pictures4/13.jpg'></img>
                <img alt="Kai Kuutamo" src='/pictures4/14.jpg'></img>
</div>
<div>
                <img alt="Kai Kuutamo" src='/pictures4/15.jpg'></img>
                <img alt="Kai Kuutamo" src='/pictures4/16.jpg'></img>
                <img alt="Kai Kuutamo" src='/pictures4/17.jpg'></img>
                <img alt="Kai Kuutamo" src='/pictures4/18.jpg'></img>
                <img alt="Kai Kuutamo" src='/pictures4/19.jpg'></img>
                <img alt="Kai Kuutamo" src='/pictures4/20.jpg'></img>
                <img alt="Kai Kuutamo" src='/pictures4/21.jpg'></img>
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