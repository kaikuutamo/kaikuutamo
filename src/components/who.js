import React from 'react';

import {connect} from 'react-redux';

import cloudAnim from './cloudanimation'

import kaikuutamo from '../pictures3/kaikuutamo.jpg'

import './who.css';

class Who extends React.Component {

    container = React.createRef();
    scroller = null;

componentDidMount () {

    cloudAnim();

}

    render() {

        return (

            <div className="tablewrap">
            <div id="whowrap2">

               <div id="whotitlewrap">
               <h1 id="whotitle">Jonglööri Kai Kuutamo</h1>
                
               </div>

                <div id="whointro">

                

                <div id="whotext">
                
                <p>
                Kai Kuutamo on jongleeraukseen keskittynyt sirkustaiteilija, jolla on takanaan kymmenen vuoden esiintymiskokemus ja lukemattomat tunnit harjoittelua. Hän on koulutettu sirkustaiteiden opettaja, Sirkussirkus Putiikin omistaja, Herttakuninkaat-ryhmän toinen perustajajäsen ja myös Multi Bueno -festivaalin perustaja ja järjestäjä.
                </p>

                <p>
                Uransa aikana Kuutamo on opiskellut jongleerausta Suomessa ja Ukrainassa, esiintynyt muun muassa Englannissa, Saksassa, Belgiassa, Ruotsissa, Eestissä, Thaimaassa ja Kambodzassa, voittanut katuesiintymisen Suomen mestaruuden, rikkonut jongleerauksen Suomen ennätyksen sekä pitänyt yllä kaksi vuotta ilmaista sirkuskoulua Kambodzassa.
                </p>

                <p>
                Nykyään hän työskentelee pääasiassa Suomessa esiintyen yksin, Herttakuninkaat-ryhmän, Aimo Annoksen tai Merkkarit-orkesterin kanssa. Esiintymispaikat vaihtelevat lasten festivaaleista vanhainkoteihin sekä suurtapahtumista pieniin syntymäpäiviin.
                </p>

                <p>
                "Esitämme valmiita teoksia omien kiertueaikataulujemme mukaan ja tilauksesta. Toisinaan rakennamme tapahtumiin ja tilaisuuksiin myös omia ohjelmia tilaajan toiveiden mukaisesti. Opetuspalveluita tarjoamme eri sirkuskouluille ja kerhoille sovitun mittaisissa jaksoissa, ja järjestämme myös kertaluontoisia jongleeraustyöpajoja kaikenlaisille ryhmille tilauksesta. Kaikki on mahdollista, jos kalenterissa on tilaa ja palkkiosta päästään yhteisymmärrykseen." 
                </p>

                <p>
                -Kai Kuutamo 

                </p>

                </div>

                <div id="whopic">
                <img alt="Kai Kuutamo" src={kaikuutamo}></img>
                </div>

                </div>

                <div id="wholinks">
                    <h2>Linkit</h2>

                    <a href="http://www.sirkussirkus.com/cv.pdf" target="black">Ansioluettelo</a>
                    <a href="https://fi.wikipedia.org/wiki/Kai_Kuutamo" target="black">Kai Kuutamo Wikipediassa</a>
                    <a href="http://www.sirkussirkus.com/merkkarit/" target="black">Merkkarit ja Kai Kuutamo</a>
                    <a href="http://www.sirkussirkus.com/herttakuninkaat/" target="black">Herttakuninkaat -sirkusryhmä</a>
                    <a href="http://www.sirkussirkus.com/kkaa/" target="black">Kai Kuutamo & Aimo Annos -sirkusmusiikkiduo</a>
                    <a href="http://putiikki.sirkussirkus.com/" target="black">Sirkussirkus Putiikki, kaikki sirkusvälineet saman katon alta</a>
                    <a href="http://www.sirkussirkus.com/multibueno/index.html" target="black">Multi Bueno festivaali, monisyysirkusfestivaali Turussa</a>
                    <a href="http://www.sirkussirkus.com/circuskampot/" target="black">Circus Kampot, suomalainen sirkuskoulu Kambodzassa</a>

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

export default connect(mapStateToProps)(Who);