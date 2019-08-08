
import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import './frontpage.css';


import pic1 from '../pictures2/pic1.jpg'

import facebook from '../pictures2/facebook.png'
import instagram from '../pictures2/instagram.png'
import youtube from '../pictures2/youtube.png'

class FrontPage extends React.Component {


render() {

return (

<div id="frontwrap">
    


    <div id="frontcont">
        <img alt="Slideshow" id="frontpic" src={pic1}></img>
        <p id="fronttext">TUNNETTA</p>
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