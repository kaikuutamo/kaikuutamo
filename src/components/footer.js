import React from 'react';

import './footer.css';


import facebook from '../pictures2/facebook.png'
import instagram from '../pictures2/instagram.png'
import youtube from '../pictures2/youtube.png'

class Footer extends React.Component {



    render () {


        return (

            <div id="footersocialwrap">

            <div id="footersocialwrap2">
            <a href="https://www.facebook.com/kuutamosirkus/" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook"></img></a>
            <a href="https://www.instagram.com/kaikuutamo/" target="_blank" rel="noopener noreferrer" ><img src={instagram} alt="instagram"></img></a>
            <a href="https://www.youtube.com/user/kaikuutamo/videos" target="_blank" rel="noopener noreferrer" ><img src={youtube} alt="youtube"></img></a>
            </div>

            <p>Kai Kuutamo | kai@sirkussirkus.com | 040 754 6182</p>

            </div>
        


        )

    }


}


export default Footer;