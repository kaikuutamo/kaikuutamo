
import React from 'react'
import {Link} from 'react-router-dom';


/* ------------- ENGLISH ----------------------*/ 

var finnish = {


    frontpage: {

        "text": "Although I am blind I could feel your energy.", 
        "text2": "- sokea afrikkalainen mies",
        "words": ["Although I am blind I could feel your energy.", "Ok on uus hyvä!", "To perform you need practice, to practice you need passion."],
        "words2": ["- sokea afrikkalainen mies", "- Jukka Keränen", "― Amit Kalantri"]

    },


    header: 

    <div id="headlinkwrap">

    <nav>

        <ul>
                <li><Link to="/who">KUKA</Link></li>
                <li><Link to="/services">PALVELUT</Link></li>
                <li><Link to="/shows">ESITYKSET</Link></li>
                <li><Link to="/pictures">KUVAT</Link></li>
                <li><Link to="/videos">VIDEOT</Link></li>
                <li><Link to="/articles">ARTIKKELIT</Link></li>
                <li><Link to="/media">MEDIA</Link></li>
                <li><Link to="/offer">TARJOUSPYYNTÖ</Link></li>
                <li><Link to="/contact">YHTEYSTIEDOT</Link></li>
        </ul>

    </nav>

    </div>,

    who:
    <div>
    <div className="tabletitlewrap">
    <h1 className="tabletitle">Jonglööri Kai Kuutamo</h1>
     
    </div>

     <div className="tableintro">

     
     <div className="tabletext">
     
     <p>Kai Kuutamo on jongleeraukseen keskittynyt sirkustaiteilija, jolla on takanaan kymmenen vuoden esiintymiskokemus ja lukemattomat tunnit harjoittelua. Hän on koulutettu sirkustaiteiden opettaja, Sirkussirkus Putiikin omistaja, Herttakuninkaat-ryhmän toinen perustajajäsen ja myös Multi Bueno -festivaalin perustaja ja järjestäjä.</p>

     <p>Uransa aikana Kuutamo on opiskellut jongleerausta Suomessa ja Ukrainassa, esiintynyt muun muassa Englannissa, Saksassa, Belgiassa, Ruotsissa, Eestissä, Thaimaassa ja Kambodzassa, voittanut katuesiintymisen Suomen mestaruuden, rikkonut jongleerauksen Suomen ennätyksen sekä pitänyt yllä kaksi vuotta ilmaista sirkuskoulua Kambodzassa.</p>
     
     <p>Nykyään hän työskentelee pääasiassa Suomessa esiintyen yksin, Herttakuninkaat-ryhmän, Aimo Annoksen tai Merkkarit-orkesterin kanssa. Esiintymispaikat vaihtelevat lasten festivaaleista vanhainkoteihin sekä suurtapahtumista pieniin syntymäpäiviin.</p>

     <p>"Esitämme valmiita teoksia omien kiertueaikataulujemme mukaan ja tilauksesta. Toisinaan rakennamme tapahtumiin ja tilaisuuksiin myös omia ohjelmia tilaajan toiveiden mukaisesti. Opetuspalveluita tarjoamme eri sirkuskouluille ja kerhoille sovitun mittaisissa jaksoissa, ja järjestämme myös kertaluontoisia jongleeraustyöpajoja kaikenlaisille ryhmille tilauksesta. Kaikki on mahdollista, jos kalenterissa on tilaa ja palkkiosta päästään yhteisymmärrykseen."</p>

     <p>- Kai Kuutamo</p>


     </div>


     </div>

     <div id="wholinks">
         <h2>Linkit</h2>

         <a href="http://www.sirkussirkus.com/cv.pdf" target="blank">Ansioluettelo</a>
         <a href="https://fi.wikipedia.org/wiki/Kai_Kuutamo" target="blank">Kai Kuutamo Wikipediassa</a>
         <a href="http://www.sirkussirkus.com/merkkarit/" target="blank">Merkkarit ja Kai Kuutamo</a>
         <a href="http://www.sirkussirkus.com/herttakuninkaat/" target="blank">Herttakuninkaat -sirkusryhmä</a>
         <a href="http://www.sirkussirkus.com/kkaa/" target="blank">Kai Kuutamo & Aimo Annos -sirkusmusiikkiduo</a>
         <a href="http://putiikki.sirkussirkus.com/" target="blank">Sirkussirkus Putiikki, kaikki sirkusvälineet saman katon alta</a>
         <a href="http://www.sirkussirkus.com/multibueno/index.html" target="blank">Multi Bueno festivaali, monisyysirkusfestivaali Turussa</a>
         <a href="http://www.sirkussirkus.com/circuskampot/" target="blank">Circus Kampot, suomalainen sirkuskoulu Kambodzassa</a>

     </div>
     </div>,

     services: 
     <div>

     <div className="tabletitlewrap">
      <h1 className="tabletitle">Palvelut</h1>
     </div>

     <div className="tableintro">
         <div className="tabletext">
             <p>Kai Kuutamo & Sirkussirkus tarjoaa kolmenlaisia palveluita:</p>
             <p>- Valmiita sirkusesityksiä ja tilausohjelmaa</p>
             <p>- Jongleerauksen opetusta</p>
             <p>- Sirkusvälineiden myyntiä</p>
         </div>
     </div>

     <div className="tableh2wrap">
         <h2>Esitykset ja ohjelma</h2>
     </div>

     <div className="tableintro">
         <div className="tabletext">
             <p>Ohjelmaa etsiessäsi voit tutustua valmiisiin esityksiimme ESITYKSET-sivulla tai ottaa suoraan yhteyttä ja kertoa ohjelmatarpeistasi. Teemme ja muokkaamme myös esityksiä tilaajan kanssa yhteistyössä niin, että ohjelma parhaiten sopii tilaisuuden tai tapahtuman luonteeseen.</p>
             <p>Kai Kuutamon omasta repertuaarista löytyy erilaisia jongleerausohjelmia, tuliesityksiä ja puujalkahahmoja. Erilaiset puhetyöt kuten juontaminen, luennointi ja seremoniamestarointi sujuvat myös. Välitämme myös muita taiteilijoita, ja järjestämme isompiin tapahtumiin ohjelmakokonaisuuksia. Kerro minne, milloin sekä mitä kaipaat ja pyydä tarjousta!</p>
             <p>Lopulliseen hintaan vaikuttavat esityksen sisältö, kesto, esiintyjien määrä, matkakulut sekä mahdolliset rekvisiittakulut. Tarjouksemme on laskutettava hinta, joka sisältää sopimuksen mukaan kaikki kulut.</p>
             
         </div>
     </div>

     <div className="tableh3wrap">
         <h3>Jongleerauksen opetus</h3>
     </div>

     <div className="tableintro">
         <div className="tabletext">
             <p>Tarjoamme jongleerausopetusta kiinnostuneille tilaisuuksiin, tapahtumiin, leireille ja kouluihin. Jongleerauksen peruskurssi kestää sovitusti 45-90 minuuttia, ja sopii kaikenikäisille aikaisemmasta kokemuksesta riippumatta. Myös yleisölle avoimet jongleeraustyöpajat ovat mahdollisia esimerkiksi koko päivän tapahtumiin tai vastaaviin tilaisuuksiin.</p>
             <p>Peruskurssi tai vastaava avoin jongleeraustyöpaja sopii niin yritystilaisuuksiin kuin esimerkiksi messuillekin. Tuomme välineet mukanamme sovitulle määrälle oppilaita, eikä oppilailta vaadita muuta kuin mukavat vaatteet ja avoin mieli. Tutustumiskurssilla välineenä ovat lähtökohtaisesti pallot, ja pyrkimyksenä on oppia kolmen pallon jongleeraus, mutta tilaajan toiveesta voimme keskittyä pallojen sijaan myös esimerkiksi renkaisiin, keiloihin tai diaboloon. Useamman tunnin työpajassa voidaan tutustua moneen eri välineeseen.</p>
             <p>Pystymme järjestämään myös tiiviskursseja edistyneemmille tarkasti rajatuista aiheista kuten esimerkiksi "Jongleerauksen perustekniikka kolmesta yhdeksään palloon", "Päävieritykset", "Diabolo-jongleeraus", "Multiplex-heitot" tai "Vartaloheitot".</p>
             
         </div>
     </div>

     <div className="tableh4wrap">
         <h4>Sirkusvälineet</h4>
     </div>

     <div className="tableintro">
         <div className="tabletext">
             <p>Kai Kuutamon Sirkussirkus Putiikki on myynyt sirkusvälineitä ammattilaisille ja harrastajille jo vuodesta 2006.</p>
             <p>Putiikki sijaitsi alkuaikoina Jarrumiehenkadulla Turussa. Se oli suljettuna vuodet 2011-2015, ja avattiin uudestaan verkkokauppana vuonna 2016. Marraskuussa 2017 uusi kivijalkakauppa avattiin osoitteeseen Lonttistentie 14, Turku.</p>
             <p>Kaupasta saat parhaat jongleerausvälineet joka lähtöön. Lisäksi hyllystä löytyvät ilma-akrobatiavälineet, taikuustuotteet, yksipyöräiset sekä paljon muita kiinnostavia myyntiartikkeleita. Kannattaa poiketa paikan päällä! Aukiolo ja noudot sovitusti tai sattumanvaraisesti. Toimitamme myös tavaraa Euroopan-laajuisesti. Sirkussirkus Putiikin tarjontaan voit tutustua parhaiten osoitteessa:  <a id="shoplink" href="http://putiikki.sirkussirkus.com/" target="blank">putiikki.sirkussirkus.com</a>.</p>
             
         </div>
     </div>

     </div>,

     mobilemenu: 
     
     <div>
     <li><Link to="/who">KUKA</Link></li>
     <li><Link to="/services">PALVELUT</Link></li>
     <li><Link to="/shows">ESITYKSET</Link></li>
     <li><Link to="/pictures">KUVAT</Link></li>
     <li><Link to="/videos">VIDEOT</Link></li>
     <li><Link to="/articles">ARTIKKELIT</Link></li>
     <li><Link to="/media">MEDIA</Link></li>
     <li><Link to="/offer">TARJOUSPYYNTÖ</Link></li>
     <li><Link to="/contact">YHTEYSTIEDOT</Link></li>
     </div>

}



/*---------------ENGLISH------------------*/

var english = {

    frontpage: {

        "text": "Although I am blind I could feel your energy.", 
        "text2": "- Blind african man",
        "words": ["Although I am blind I could feel your energy.", "Ok on uus hyvä!", "To perform you need practice, to practice you need passion."],
        "words2": ["- Blind african man", "- Cool Keränen", "― Some Amit Kalantri"]

    },


    header: 

    <div id="headlinkwrap">

    <nav>

        <ul>
                <li><Link to="/who">WHO</Link></li>
                <li><Link to="/services">SERVICES</Link></li>
                <li><Link to="/shows">SHOWS</Link></li>
                <li><Link to="/pictures">PICTURES</Link></li>
                <li><Link to="/videos">VIDEOS</Link></li>
                <li><Link to="/articles">ARTICLES</Link></li>
                <li><Link to="/media">MEDIA</Link></li>
                <li><Link to="/offer">OFFER</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
        </ul>

    </nav>

    </div>,

who:
<div>
<div className="tabletitlewrap">
<h1 className="tabletitle">Juggler Kai Kuutamo</h1>
 
</div>

 <div className="tableintro">

 
 <div className="tabletext">
 
 <p>Kai Kuutamo on jongleeraukseen keskittynyt sirkustaiteilija, jolla on takanaan kymmenen vuoden esiintymiskokemus ja lukemattomat tunnit harjoittelua. Hän on koulutettu sirkustaiteiden opettaja, Sirkussirkus Putiikin omistaja, Herttakuninkaat-ryhmän toinen perustajajäsen ja myös Multi Bueno -festivaalin perustaja ja järjestäjä.</p>

 <p>Uransa aikana Kuutamo on opiskellut jongleerausta Suomessa ja Ukrainassa, esiintynyt muun muassa Englannissa, Saksassa, Belgiassa, Ruotsissa, Eestissä, Thaimaassa ja Kambodzassa, voittanut katuesiintymisen Suomen mestaruuden, rikkonut jongleerauksen Suomen ennätyksen sekä pitänyt yllä kaksi vuotta ilmaista sirkuskoulua Kambodzassa.</p>
 
 <p>Nykyään hän työskentelee pääasiassa Suomessa esiintyen yksin, Herttakuninkaat-ryhmän, Aimo Annoksen tai Merkkarit-orkesterin kanssa. Esiintymispaikat vaihtelevat lasten festivaaleista vanhainkoteihin sekä suurtapahtumista pieniin syntymäpäiviin.</p>

 <p>"Esitämme valmiita teoksia omien kiertueaikataulujemme mukaan ja tilauksesta. Toisinaan rakennamme tapahtumiin ja tilaisuuksiin myös omia ohjelmia tilaajan toiveiden mukaisesti. Opetuspalveluita tarjoamme eri sirkuskouluille ja kerhoille sovitun mittaisissa jaksoissa, ja järjestämme myös kertaluontoisia jongleeraustyöpajoja kaikenlaisille ryhmille tilauksesta. Kaikki on mahdollista, jos kalenterissa on tilaa ja palkkiosta päästään yhteisymmärrykseen."</p>

 <p>- Kai Kuutamo</p>


 </div>


 </div>

 <div id="wholinks">
     <h2>Linkit</h2>

     <a href="http://www.sirkussirkus.com/cv.pdf" target="blank">Ansioluettelo</a>
     <a href="https://fi.wikipedia.org/wiki/Kai_Kuutamo" target="blank">Kai Kuutamo Wikipediassa</a>
     <a href="http://www.sirkussirkus.com/merkkarit/" target="blank">Merkkarit ja Kai Kuutamo</a>
     <a href="http://www.sirkussirkus.com/herttakuninkaat/" target="blank">Herttakuninkaat -sirkusryhmä</a>
     <a href="http://www.sirkussirkus.com/kkaa/" target="blank">Kai Kuutamo & Aimo Annos -sirkusmusiikkiduo</a>
     <a href="http://putiikki.sirkussirkus.com/" target="blank">Sirkussirkus Putiikki, kaikki sirkusvälineet saman katon alta</a>
     <a href="http://www.sirkussirkus.com/multibueno/index.html" target="blank">Multi Bueno festivaali, monisyysirkusfestivaali Turussa</a>
     <a href="http://www.sirkussirkus.com/circuskampot/" target="blank">Circus Kampot, suomalainen sirkuskoulu Kambodzassa</a>

 </div>
 </div>,

     services: 

     <div>

     <div className="tabletitlewrap">
      <h1 className="tabletitle">Services</h1>
     </div>

     <div className="tableintro">
         <div className="tabletext">
             <p>Kai Kuutamo & Sirkussirkus tarjoaa kolmenlaisia palveluita:</p>
             <p>- Valmiita sirkusesityksiä ja tilausohjelmaa</p>
             <p>- Jongleerauksen opetusta</p>
             <p>- Sirkusvälineiden myyntiä</p>
         </div>
     </div>

     <div className="tableh2wrap">
         <h2>Esitykset ja ohjelma</h2>
     </div>

     <div className="tableintro">
         <div className="tabletext">
             <p>Ohjelmaa etsiessäsi voit tutustua valmiisiin esityksiimme ESITYKSET-sivulla tai ottaa suoraan yhteyttä ja kertoa ohjelmatarpeistasi. Teemme ja muokkaamme myös esityksiä tilaajan kanssa yhteistyössä niin, että ohjelma parhaiten sopii tilaisuuden tai tapahtuman luonteeseen.</p>
             <p>Kai Kuutamon omasta repertuaarista löytyy erilaisia jongleerausohjelmia, tuliesityksiä ja puujalkahahmoja. Erilaiset puhetyöt kuten juontaminen, luennointi ja seremoniamestarointi sujuvat myös. Välitämme myös muita taiteilijoita, ja järjestämme isompiin tapahtumiin ohjelmakokonaisuuksia. Kerro minne, milloin sekä mitä kaipaat ja pyydä tarjousta!</p>
             <p>Lopulliseen hintaan vaikuttavat esityksen sisältö, kesto, esiintyjien määrä, matkakulut sekä mahdolliset rekvisiittakulut. Tarjouksemme on laskutettava hinta, joka sisältää sopimuksen mukaan kaikki kulut.</p>
             
         </div>
     </div>

     <div className="tableh3wrap">
         <h3>Jongleerauksen opetus</h3>
     </div>

     <div className="tableintro">
         <div className="tabletext">
             <p>Tarjoamme jongleerausopetusta kiinnostuneille tilaisuuksiin, tapahtumiin, leireille ja kouluihin. Jongleerauksen peruskurssi kestää sovitusti 45-90 minuuttia, ja sopii kaikenikäisille aikaisemmasta kokemuksesta riippumatta. Myös yleisölle avoimet jongleeraustyöpajat ovat mahdollisia esimerkiksi koko päivän tapahtumiin tai vastaaviin tilaisuuksiin.</p>
             <p>Peruskurssi tai vastaava avoin jongleeraustyöpaja sopii niin yritystilaisuuksiin kuin esimerkiksi messuillekin. Tuomme välineet mukanamme sovitulle määrälle oppilaita, eikä oppilailta vaadita muuta kuin mukavat vaatteet ja avoin mieli. Tutustumiskurssilla välineenä ovat lähtökohtaisesti pallot, ja pyrkimyksenä on oppia kolmen pallon jongleeraus, mutta tilaajan toiveesta voimme keskittyä pallojen sijaan myös esimerkiksi renkaisiin, keiloihin tai diaboloon. Useamman tunnin työpajassa voidaan tutustua moneen eri välineeseen.</p>
             <p>Pystymme järjestämään myös tiiviskursseja edistyneemmille tarkasti rajatuista aiheista kuten esimerkiksi "Jongleerauksen perustekniikka kolmesta yhdeksään palloon", "Päävieritykset", "Diabolo-jongleeraus", "Multiplex-heitot" tai "Vartaloheitot".</p>
             
         </div>
     </div>

     <div className="tableh4wrap">
         <h4>Sirkusvälineet</h4>
     </div>

     <div className="tableintro">
         <div className="tabletext">
             <p>Kai Kuutamon Sirkussirkus Putiikki on myynyt sirkusvälineitä ammattilaisille ja harrastajille jo vuodesta 2006.</p>
             <p>Putiikki sijaitsi alkuaikoina Jarrumiehenkadulla Turussa. Se oli suljettuna vuodet 2011-2015, ja avattiin uudestaan verkkokauppana vuonna 2016. Marraskuussa 2017 uusi kivijalkakauppa avattiin osoitteeseen Lonttistentie 14, Turku.</p>
             <p>Kaupasta saat parhaat jongleerausvälineet joka lähtöön. Lisäksi hyllystä löytyvät ilma-akrobatiavälineet, taikuustuotteet, yksipyöräiset sekä paljon muita kiinnostavia myyntiartikkeleita. Kannattaa poiketa paikan päällä! Aukiolo ja noudot sovitusti tai sattumanvaraisesti. Toimitamme myös tavaraa Euroopan-laajuisesti. Sirkussirkus Putiikin tarjontaan voit tutustua parhaiten osoitteessa:  <a id="shoplink" href="http://putiikki.sirkussirkus.com/" target="blank">putiikki.sirkussirkus.com</a>.</p>
             
         </div>
     </div>

     </div>,

mobilemenu: 
     
<div>
<li><Link to="/who">WHO</Link></li>
<li><Link to="/services">SERVICES</Link></li>
<li><Link to="/shows">SHOWS</Link></li>
<li><Link to="/pictures">PICTURES</Link></li>
<li><Link to="/videos">VIDEOS</Link></li>
<li><Link to="/articles">ARTICLES</Link></li>
<li><Link to="/media">MEDIA</Link></li>
<li><Link to="/offer">OFFER</Link></li>
<li><Link to="/contact">CONTACT</Link></li>
</div>


}







var initState = {

    texts: finnish,

}

const rootReducer = (state=initState, action) => { 

if (action.type === "change") {
    
    if (action.language === "fin") {

        return {
            ...state,
            texts: finnish
        }

    }

    if (action.language === "eng") {

        return {
            ...state,
            texts: english
        }
        
    }

}

return state

}

export default rootReducer;