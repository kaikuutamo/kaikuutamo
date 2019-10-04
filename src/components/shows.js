import React from 'react';

import {connect} from 'react-redux';

import cloudAnim from './cloudanimation'

import './shows.css';

import Footer from './footer'

import show1 from '../pictures3/show1.jpg';
import show2 from '../pictures3/show1.jpg';
import show3 from '../pictures3/show1.jpg';

import show4 from '../pictures3/show1.jpg';
import show5 from '../pictures3/show1.jpg';
import show6 from '../pictures3/show1.jpg';

import show7 from '../pictures3/show1.jpg';
import show8 from '../pictures3/show1.jpg';
import show9 from '../pictures3/show1.jpg';


class Shows extends React.Component {
 

    componentDidMount () {

        cloudAnim();
    
    }

    render() {


        return (

            <div className="tablewrap">
            <div className="tablewrap2">

            <div className="tabletitlewrap">
              <h1 className="tabletitle">Esitykset</h1>
     
             </div>

            <div id="showcontainer">

            <a href="http://www.sirkussirkus.com/cv.pdf" target="blank"><img alt="Show" src={show1}></img></a>
            <a href="http://www.sirkussirkus.com/cv.pdf" target="blank"><img alt="Show" src={show2}></img></a>
            <a href="http://www.sirkussirkus.com/cv.pdf" target="blank"><img alt="Show" src={show3}></img></a>

            <a href="http://www.sirkussirkus.com/cv.pdf" target="blank"><img alt="Show" src={show4}></img></a>
            <a href="http://www.sirkussirkus.com/cv.pdf" target="blank"><img alt="Show" src={show5}></img></a>
            <a href="http://www.sirkussirkus.com/cv.pdf" target="blank"> <img alt="Show" src={show6}></img></a>

            <a href="http://www.sirkussirkus.com/cv.pdf" target="blank"><img alt="Show" src={show7}></img></a>
            <a href="http://www.sirkussirkus.com/cv.pdf" target="blank"><img alt="Show" src={show8}></img></a>
            <a href="http://www.sirkussirkus.com/cv.pdf" target="blank"><img alt="Show" src={show9}></img></a>

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

export default connect(mapStateToProps)(Shows);