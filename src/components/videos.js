import React from 'react';

import {connect} from 'react-redux';

import cloudAnim from './cloudanimation'

import './videos.css';


class Videos extends React.Component {
 


    componentDidMount () {

        cloudAnim();
    
    }

    render() {


        return (

<div className="tablewrap">
            <div className="tablewrap2">

            <div className="tabletitlewrap">

            <h1 id="videotitle" className="tabletitle">Videot</h1>
     
            </div>

            <div className="videos">

                <h2>Elävänä</h2>

                <p>Jongleerausnumerot Herttakuninkaat-ryhmän nimikkoesityksestä vastaiskronologisessa järjestyksessä.</p>

                <div className="icont">
                <div className="icont2">
                <iframe className="video" width="640" height="360" src="https://www.youtube.com/embed/c0TV9iVjoyY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                </div>

                <p>Traileri Kai Kuutamo & Aimo Annos -esityksestä.</p>

                <div className="icont">
                <div className="icont2">
                <iframe className="video" width="640" height="360" src="https://www.youtube.com/embed/RCORvHu3gmw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                </div>

                
            </div>


                <div className="videos">

                <h3>Leikattu ja liimattu</h3>

                <p>Kambodzan Circus Pharen teltassa paikallisella otteella tuotettu promootiovideo.</p>

                <div className="icont">
                <div className="icont2">
                <iframe className="video" width="640" height="360" src="https://www.youtube.com/embed/GwU39mFL7Vk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                </div>

                <p>Suomalaiset Patukat (Finnish Poles). Parhaat temput viime vuosikymmeneltä.</p>

                <div className="icont">
                <div className="icont2">
                <iframe className="video" width="640" height="360" src="https://www.youtube.com/embed/UofXrINtKrQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                </div>

                
            </div>


                <div className="videos">

                <h4>Ennätyksiä</h4>

                <p>Virallinen Suomen ennätys 10 pallolla vuonna 2015. Esityksessä Saari 2015 -tapahtumassa Raumalla.</p>

                <div className="icont">
                <div className="icont2">
                <iframe className="video" width="640" height="360" src="https://www.youtube.com/embed/kt_masR6uQA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                </div>

                <p>Epävirallinen viimeisin Suomen ennätys 10 pallolla vuonna 2016. Turun Sirkus.</p>

                <div className="icont">
                <div className="icont2">
                <iframe className="video" width="640" height="360" src="https://www.youtube.com/embed/Np22u_L19oc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                </div>

                
            </div>

                <div className="videos">

                <h4>Muuta</h4>

                <p>Kuvakooste Kai Kuutamo & Sirkussirkus Ensemblen järjestämän Multi Bueno Festivaalin tunnelmista. Musiikista vastaa Yakuzi Pato.</p>

                <div className="icont">
                <div className="icont2">
                <iframe className="video" width="640" height="360" src="https://www.youtube.com/embed/-P7RSNGgZxc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                </div>


                
            </div>

            <div id="morevideos">

            <p>Lisää videoita löydät Kai Kuutamon Youtube-kanavalta!</p>

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

export default connect(mapStateToProps)(Videos);