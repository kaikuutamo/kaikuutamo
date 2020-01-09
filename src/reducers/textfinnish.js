import React from 'react';
import {Link} from 'react-router-dom';

/* ------------- FINNISH ----------------------*/ 

var finnish = {


    frontpage: {

        "text": "Although I am blind I could feel your energy.", 
        "text2": "- sokea afrikkalainen mies",
        "words": ["Although I am blind I could feel your energy.", "Kuutamo tietää, miten sirkusta tehdään lapsille.", "Kai Kuutamo on vakuuttavan karismaattinen esiintyjä."],
        "words2": ["- Sokea afrikkalainen mies", "- Turun Sanomat", "- Turun Sanomat"]

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
                <li><Link to="/media">PROMO</Link></li>
                <li><Link to="/offer">TARJOUSPYYNTÖ</Link></li>
                <li><Link to="/contact">YHTEYSTIEDOT</Link></li>
        </ul>

    </nav>

    </div>,

    who:
    <div>
    <div className="tabletitlewrap">
    <h1 className="tabletitle">Sirkustaiteilija Kai Kuutamo</h1>
     
    </div>

     <div className="tableintro">

     <div className="tabletext">
     
     <p>Kai Kuutamo on kansainvälisen uran luonut palkittu esiintyvä taiteilija. 
Hän on korkeakoulutettu sirkustaiteilija ja myös Sirkussirkus Putiikin omistaja.</p>

     <p>Uransa aikana Kuutamo on opiskellut jongleerausta Suomessa Lahdessa ja Turussa sekä Ukrainassa Kiovassa. Hän on esiintynyt Englannissa, Saksassa, Belgiassa, Ruotsissa, Eestissä, Thaimaassa ja Kambodzassa, voittanut katuesiintymisen Suomen mestaruuden, rikkonut jongleerauksen Suomen ennätyksen sekä pitänyt yllä kaksi vuotta ilmaista sirkuskoulua lapsille Kambodzassa (Circus Kampot).</p>
     
     <p>Nykyään hän työskentelee pääasiassa Suomessa esiintyen yksin, muiden sirkustaiteilijoiden kanssa (Herttakuninkaat, Sirkuskunnan Narrit) tai muusikoiden kanssa (Merkkarit, Arttu Aarnio, Sakari Kivinen). Esiintymispaikat vaihtelevat lastenfestivaaleista vanhainkoteihin sekä suurtapahtumista pieniin syntymäpäiviin. Kai Kuutamo ja Sirkussirkus järjestää myös epäsäännöllisesti monitaidefestivaalia Multi Bueno.</p>

     <p>"Esitämme valmiita teoksia omien kiertueaikataulujemme mukaan ja tilauksesta. Toisinaan rakennamme tapahtumiin ja tilaisuuksiin myös omia ohjelmia tilaajan toiveiden mukaisesti. Opetuspalveluita tarjoamme eri sirkuskouluille ja kerhoille sovitun mittaisissa jaksoissa ja järjestämme myös kertaluontoisia jongleeraustyöpajoja kaikenlaisille ryhmille tilauksesta. Kaikki on mahdollista, jos kalenterissa on tilaa. Esityksiä ja toimintaa kaikkiin tilaisuuksiin on mottomme."</p>

     <p>- Kai Kuutamo</p>


     </div>


     </div>

     <div id="wholinks">
         <h2>Linkit</h2>

     <p style={{paddingTop: "5px"}}><a href="http://www.sirkussirkus.com/cv.pdf" rel="noopener noreferrer" target="blank">Ansioluettelo</a></p>
     <p><a href="https://fi.wikipedia.org/wiki/Kai_Kuutamo" rel="noopener noreferrer" target="blank">Kai Kuutamo Wikipediassa</a></p>
     <p><a href="http://putiikki.sirkussirkus.com/" rel="noopener noreferrer" target="blank">Sirkussirkus Putiikki</a></p>
     <p><a href="http://www.sirkussirkus.com/multibueno/index.html" rel="noopener noreferrer" target="blank">Multi Bueno monitaidefestivaali Turussa</a></p>
     <p><a href="http://www.sirkussirkus.com/circuskampot/" rel="noopener noreferrer" target="blank">Circus Kampot sirkuskouluhanke Kambodzassa</a></p>

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
        <img className="servicespic" src="pictures6/sirkusesitys.jpg" alt="Services"></img>
         <h2>Esitykset ja ohjelma</h2>
     </div>

     <div className="tableintro">
         <div className="tabletext">
             <p>Ohjelmaa etsiessäsi voit tutustua valmiisiin esityksiimme ESITYKSET-sivulla,  täyttää tarjouspyyntölomakkeen tai ottaa suoraan yhteyttä ja kertoa tilausuudestasi. Teemme ja myös muokkaamme esityksiä tilaajan kanssa yhteistyössä niin, että ohjelma parhaiten sopii tilaisuuden tai tapahtuman luonteeseen.</p>
             <p>Kai Kuutamon omasta repertuaarista löytyy erilaisia jongleerausohjelmia, tuliesityksiä ja puujalkahahmoja. Puhetyöt kuten juontaminen, luennointi ja seremoniamestarointi sujuvat myös. Välitämme myös muita taiteilijoita, ja järjestämme isompiin tapahtumiin ohjelmakokonaisuuksia. Kerro minne, milloin sekä mitä kaipaat ja pyydä tarjousta!</p>
             <p>Lopulliseen hintaan vaikuttavat esityksen sisältö, kesto, esiintyjien määrä,matkakulut sekä mahdolliset rekvisiittakulut. Tarjouksemme on laskutettava kiinteä hinta, joka sisältää sopimuksen mukaan kaikki kulut.</p>
             
         </div>
     </div>

     <div className="tableh3wrap">
     <img className="servicespic" src="pictures6/sirkustyopaja.jpg" alt="Services"></img>
         <h3>Jongleerauksen opetus</h3>
     </div>

     <div className="tableintro">
         <div className="tabletext">
             <p>Tarjoamme jongleerausopetusta tilaisuuksiin, tapahtumiin, leireille ja kouluihin. Jongleerauksen ohjattu peruskurssi kestää sovitusti 45-90 minuuttia, ja sopii kaikenikäisille aikaisemmasta kokemuksesta riippumatta. Myös avoimet jongleeraustyöpajat ovat mahdollisia esimerkiksi koko päivän tapahtumiin tai vastaaviin tilaisuuksiin.</p>

             <p>Peruskurssi tai vastaava avoin jongleeraustyöpaja sopii niin yritystilaisuuksiin kuin esimerkiksi lastentapahtumiin. Tuomme välineet mukanamme sovitulle määrälle oppilaita, eikä osanottajilta vaadita muuta kuin mukavat vaatteet ja avoin mieli.</p> 
             
                 <p>Tutustumiskurssilla välineenä ovat lähtökohtaisesti pallot, ja pyrkimyksenä on oppia kolmen pallon jongleeraus, mutta tilaajan toiveesta voimme keskittyä pallojen sijaan myös esimerkiksi renkaisiin, keiloihin tai diaboloon. Avoimmessa tai useamman tunnin työpajassa voidaan tutustua moneen eri välineeseen.</p> 
             
                 <p>Lapsille suosituin työpajamalli on ollut avoin työpaja, jossa on paljon eri välineitä ja mukaan voi tulla ja myös lähteä missä kohtaa vain.</p>
             
             <p>Pystymme järjestämään myös tiiviskursseja edistyneemmille tarkasti rajatuista aiheista kuten esimerkiksi "Jongleerauksen perustekniikka kolmesta yhdeksään palloon", "Päävieritykset", "Diabolo-jongleeraus", "Multiplex-heitot" tai "Vartaloheitot".</p>
             
         </div>
     </div>

     <div className="tableh4wrap">
     <img className="servicespic" src="pictures6/sirkusvalineet.jpg" alt="Services"></img>
         <h4>Sirkusvälineet</h4>
     </div>

     <div className="tableintro">
         <div className="tabletext">
             <p>Kai Kuutamon Sirkussirkus Putiikki on myynyt sirkusvälineitä ammattilaisille ja harrastajille jo vuodesta 2005.</p>
             
             <p>Putiikki sijaitsi alkuaikoina Jarrumiehenkadulla Turussa. Se oli suljettuna vuodet 2011-2015 Aasiassa työskentelyn johdosta, ja se avattiin uudestaan verkkokauppana vuonna 2016. Marraskuussa 2017 uusi kivijalkakauppa avattiin osoitteeseen Lonttistentie 14, Turku.</p>

             <p>Kaupasta saat parhaat jongleerausvälineet joka lähtöön. Lisäksi hyllystä löytyvät ilma-akrobatiavälineet, taikuustuotteet, yksipyöräiset sekä paljon muita kiinnostavia myyntiartikkeleita. Olemme paikalla keskiviikkoisin klo 15-18 ja sen lisäksi sovitusti tai sattumanvaraisesti. Verkkokaupan tilauksia toimitamme päivittäin. Sirkussirkus Putiikin tarjontaan voit tutustua parhaiten osoitteessa:  <span id="shoplink"><a href="http://putiikki.sirkussirkus.com/" target="blank">www.sirkuskauppa.com</a></span>.</p>
             
         </div>
     </div>

     </div>,

     mobilemenu: 
     
     <div className="licont">
     <li><Link to="/who">KUKA</Link></li>
     <li><Link to="/services">PALVELUT</Link></li>
     <li><Link to="/shows">ESITYKSET</Link></li>
     <li><Link to="/pictures">KUVAT</Link></li>
     <li><Link to="/videos">VIDEOT</Link></li>
     <li><Link to="/articles">ARTIKKELIT</Link></li>
     <li><Link to="/media">PROMO</Link></li>
     <li><Link to="/offer">TARJOUSPYYNTÖ</Link></li>
     <li><Link to="/contact">YHTEYSTIEDOT</Link></li>
     </div>,

     videos: 

     <div>

            <div className="tabletitlewrap">

            
     
            </div>

            

            <div className="videos">

                <h2>Elävänä</h2>

                <p>Jongleerausnumerot Herttakuninkaat-ryhmän nimikkoesityksestä vastaiskronologisessa järjestyksessä.</p>

                <div className="icont">
                <div className="icont2">
                <iframe className="video" title="1" src="https://www.youtube.com/embed/c0TV9iVjoyY" allowFullScreen></iframe>
                </div>
                </div>

                <p>Traileri Kai Kuutamo & Aimo Annos -esityksestä.</p>

                <div className="icont">
                <div className="icont2">
                <iframe className="video" title="2" src="https://www.youtube.com/embed/RCORvHu3gmw" allowFullScreen></iframe>
                </div>
                </div>

                
            </div>


                <div className="videos">

                <h3>Leikattu ja liimattu</h3>

                <p>Kambodzan Circus Pharen teltassa paikallisella otteella tuotettu promootiovideo.</p>

                <div className="icont">
                <div className="icont2">
                <iframe className="video" title="3" src="https://www.youtube.com/embed/GwU39mFL7Vk" allowFullScreen></iframe>
                </div>
                </div>

                <p>Suomalaiset Patukat (Finnish Poles). Parhaat temput viime vuosikymmeneltä.</p>

                <div className="icont">
                <div className="icont2">
                <iframe className="video" title="4" src="https://www.youtube.com/embed/UofXrINtKrQ" allowFullScreen></iframe>
                </div>
                </div>

                
            </div>


                <div className="videos">

                <h4>Ennätyksiä</h4>

                <p>Virallinen Suomen ennätys 10 pallolla vuonna 2015. Esityksessä Saari 2015 -tapahtumassa Raumalla.</p>

                <div className="icont">
                <div className="icont2">
                <iframe className="video" title="5" src="https://www.youtube.com/embed/kt_masR6uQA" allowFullScreen></iframe>
                </div>
                </div>

                <p>Epävirallinen viimeisin Suomen ennätys 10 pallolla vuonna 2016. Turun Sirkus.</p>

                <div className="icont">
                <div className="icont2">
                <iframe className="video" title="6" src="https://www.youtube.com/embed/Np22u_L19oc" allowFullScreen></iframe>
                </div>
                </div>

                
            </div>

                <div className="videos">

                <h4>Muuta</h4>

                <p>Kuvakooste Kai Kuutamo & Sirkussirkus Ensemblen järjestämän Multi Bueno Festivaalin tunnelmista. Musiikista vastaa Yakuzi Pato.</p>

                <div className="icont">
                <div className="icont2">
                <iframe className="video" title="7" src="https://www.youtube.com/embed/-P7RSNGgZxc" allowFullScreen></iframe>
                </div>
                </div>


                
            </div>

            <div id="morevideos">

            <p>Lisää videoita löydät Kai Kuutamon <a id="kaiyoutube" href="https://www.youtube.com/user/kaikuutamo/" target="blank">Youtube-kanavalta</a>!</p>

            </div>

            
            </div>,

            shows: {

                title1: <h2 className="showstitle">Sooloesitykset</h2>,
                title2: <h3 className="showstitle">Kumppanit ja ryhmät</h3>,

                old: 
                <div id="wholinks">
                <h2>Poistuneet ohjelmistosta toistaiseksi</h2>

                <p style={{paddingTop: "5px"}}><a href="http://www.sirkussirkus.com/joulupukki/" rel="noopener noreferrer" target="blank">Joulupukki ja Tempputonttu - Lasten Joululaulusirkusshow</a></p>
    <p style={{paddingTop: "5px"}}><a href="http://www.sirkussirkus.com/kkaa/" rel="noopener noreferrer" target="blank">Kai Kuutamo & Aimo Annos - Sirkus- ja musiikkispektaakkeli</a></p>
    <p style={{paddingTop: "5px"}}><a href="http://www.sirkussirkus.com/northman/" rel="noopener noreferrer" target="blank">Pohjolan Äijä</a></p>

                <p style={{paddingTop: "5px"}}><a href="http://www.sirkussirkus.com/specialdelivery/" rel="noopener noreferrer" target="blank">Special Delivery</a></p>
                <p><a href="http://www.sirkussirkus.com/tisch/" rel="noopener noreferrer" target="blank">Tisch</a></p>
                <p><a href="https://www.youtube.com/watch?v=GYFoVHWFQDA" rel="noopener noreferrer" target="blank">ALL IN</a></p>
                <p><a href="https://www.youtube.com/watch?v=4PS4xrsHZlg" rel="noopener noreferrer" target="blank">Kai Kuutamo & Miriam Tuominen</a></p>
                <p><a href="https://www.youtube.com/watch?v=egHroF9qGbw" rel="noopener noreferrer" target="blank">Soul on Fire</a></p>
                <p><a href="http://www.sirkussirkus.com/sirkuskunta/esitykset.html" rel="noopener noreferrer" target="blank">Taitureita ja Tunareita</a></p>
                <p><a href="http://www.sirkussirkus.com/sirkuskunta/esitykset.html" rel="noopener noreferrer" target="blank">Punaisen Maneesin Kirjava Sirkus</a></p>
                <p><a href="http://www.sirkussirkus.com/kotiinpaluu/" rel="noopener noreferrer" target="blank">Kotiinpaluu</a></p>

                </div>
            },


            show:


            {
                show1: 

                <div>

                    <img className="showpic" alt="Show" src="./pictures5/show1.jpg"></img>

                    <h1 className="tabletitle">Kai Kuutamo Show</h1>

                    <div className="tableintro">
                    <div className="tabletext">
                        <p>Kai Kuutamo Showta on esitetty kodeissa, kaduilla, häissä, vanhainkodeissa, syntymäpäivillä sekä myös suurissa tapahtumissa kansainvälisesti jo vuodesta 2010. Samaisen esityksen vuoden 2012 painoksella voitettiin katuesiintymisen Suomen mestaruus.</p>

                        <p>Esitys perustuu verbaaliakrobatian, improvisaation, huumorin ja näyttävien jongleeraustemppujen yhdistelmään. Vuorovaikutus yleisön kanssa on merkittävässä roolissa. Kai Kuutamo Show sopii mihin tahansa tilaan ja tilaisuuteen, ja se voidaan esittää kolmella eri kielellä tai haluttaessa jopa sanattomasti. Esityksen pituuteen voi vaikuttaa, ja sitä voidaan esittää myös kahdessa osassa tai vaikka pieninä palasina juontojen yhteydessä.</p>
                    </div>
                    </div>

                    <br></br>

                    <div className="tableintro">
                    <div className="tabletext">
                    <p>Kesto: 10-45 minuuttia sopimuksen mukaan.</p>
                    <p>Kohdeyleisö: Koko perhe. Voidaan myös suunnata tilaisuuden luonteen mukaan aikuisille.</p>
                    <p>Kieli: Suomi, Englanti tai Khmer (Kambodza)</p>
                    <p>Tila: Soveltuu minne tahansa sisälle tai ulos. Korkeudesta etua.</p>
                    <p>(45 minuutin esitykseen minimikorkeus 7 metriä ja lattiatila 8 x 5 metriä.)</p>
                    <p>Äänentoisto: Tuodaan mukana sovittaessa.</p>
                    <p>Pystytys 30 minuuttia</p>
                    <p>Purku 20 minuuttia</p>
    

                    </div>
                    </div>

                    <br></br>

                    <div className="tableintro">
                    <div className="tabletext">
                        <p>"Although I am blind I could feel your energy. It was a pleasure to experience your show."</p>
                        <p>- sokea afrikkalainen mies</p>
                        <br></br>
                        <p>"Sä olet paras esiintyjä!"</p>
                        <p>- ala-astelainen</p>
                        <br></br>
                        <p>"Olipa mielenkiintoinen ja piristävä esitys!"</p>
                        <p>- mies vanhainkodissa</p>
                        <br></br>
                    </div>
                    </div>

                    <div className="moremargin"></div>

                    </div>,

                    show1_pics: ["./pictures5/kaikuutamoshow1.jpg", "./pictures5/kaikuutamoshow2.jpg", "./pictures5/kaikuutamoshow3.jpg", "./pictures5/kaikuutamoshow4.jpg", "./pictures5/kaikuutamoshow5.jpg", "./pictures5/kaikuutamoshow6.jpg", "./pictures5/kaikuutamoshow7.jpg", "./pictures5/kaikuutamoshow8.jpg", "./pictures5/kaikuutamoshow9.jpg"],

                    show10: 

                    <div>
    
                        <img className="showpic" alt="Show" src="./pictures5/show10.jpg"></img>
    
                        <h1 className="tabletitle">Kai Kuutamon Matkalaukkusirkus</h1>                    
    
                        <div className="tableintro">
                        <div className="tabletext">
                             
    
                            <p>Matkalaukkusirkus on Kai Kuutamon uusi päiväkoti-ikäisille suunnattu kiertävä yhden miehen esitys</p>
    
                            <p>Matkalaukkusirkus on matkalaukkuun mahtuva esitys, joka vie yhden miehen voimin sirkuksen monta jännittävää ulottuvuutta yleisön kuin yleisön luokse. Matkalaukkusirkus on vartavasten suunniteltu sopimaan tilaan kuin tilaan.</p>
    
                            <p>Esityksessä nähdään muun muassa taitavaa korvajongleerausta, vaikeita taikatemppuja, erikoinen pallovipulauta eikä eläinnumeroitakaan ole unohdettu. Näe ratsastava hevonen sekä kuuluisa akrobaattipossu samassa esityksessä! Mutta miten kaikki tämä voi mahtua matkalaukkuun?! Se selviää tietysti Kai Kuutamon Matkalaukkusirkus-esityksessä!</p>
    
                            <p>Sirkustaiteilija Kai Kuutamo juontaa itse koko esityksen, ja vuorovaikutus lapsiyleisön kanssa on tärkeässä roolissa. Esityksessä ei käytetä oikeita eläimiä.</p>
    
                      
                        </div>
                        </div>
    
                        <br></br>
    
                        <div className="tableintro">
                        <div className="tabletext">
                            <p>Kesto: noin 35 minuuttia.</p>
                            <p>Kohdeyleisö: Päiväkoti-ikäiset ja ala-astelaiset.</p>
                            <p>Tila: Esitys soveltuu millaiseen tilaan vain. Korkeudesta on etua.</p>
                            <p>Kieli: Suomi tai englanti.</p>
                            <p>Äänentoisto: Tuodaan mukana sovittaessa.</p>
                            <p>Pystytys 30 minuuttia</p>
                            <p>Purku 20 minuuttia</p>
    
                            
                        </div>
                        </div>
    <br></br>

                            <div className="tableintro">
                    <div className="tabletext">
                        <p>”Kuutamo tietää, miten sirkusta tehdään lapsille. Yleisöä kuunnellaan esityksen aikana ja katusirkukselle tyypillinen rento läsnäolo puree myös aikuisiin.”</p>
                        <p>- Turun Sanomat</p>
                        <br></br>
                        <p>"Moi Kai, esityksestä jäi todella hyvä mieli. Siitä välittyi yleisöään kunnioittava ammatillinen ote."</p>
                        <p>- Yt. Maarit Kallioniemi, lastentarhanopettaja, Turku </p>
                        <br></br>
                        <p>"Tykkäsin todella paljon, ja lapset olivat aivan haltioissaan. Mukavaa kun otit huomioon myös yleisöstä tulleet lukuisat kommentit."</p>
                        <p>- Päiväkodin Johtaja, Aura</p>
                        <br></br>
                        <p>"Olit todella läsnä lasten kanssa ja otit heidät hienosti mukaan esitykseen."</p>
                        <p>- Ohjaaja, Silvan päiväkoti, Kemiö</p>
                        <br></br>
                    </div>
                    </div>
    
                        <br></br>

                        <div className="tableintro">
                    <div className="tabletext">
                        <p>Voit tutustua Matkalaukkusirkukseen tarkemmin esityksen omilla verkkosivuilla:</p>
                        <p> <a className="showlink" href="http://www.matkalaukkusirkus.com" target="blank">www.matkalaukkusirkus.com</a></p>   
                    </div>
                    </div>
                    <br></br>


                        <div className="moremargin"></div>

</div>,

show10_pics: ["./pictures5/matkalaukkusirkus1.jpg", "./pictures5/matkalaukkusirkus3.jpg", "./pictures5/matkalaukkusirkus2.jpg",  "./pictures5/matkalaukkusirkus9.jpg","./pictures5/matkalaukkusirkus4.jpg", "./pictures5/matkalaukkusirkus5.jpg", "./pictures5/matkalaukkusirkus6.jpg", "./pictures5/matkalaukkusirkus7.jpg", "./pictures5/matkalaukkusirkus8.jpg"],

                        
show4: 

<div>

    <img className="showpic" alt="Show" src="./pictures5/show4.jpg"></img>

    <h1 className="tabletitle">Prasu</h1>

    <div className="tableintro">
    <div className="tabletext">
        <p>Prasu on murresana, joka tarkoittaa nuotiota, valkeaa ja tulta. Kai Kuutamon yhden miehen tuliesityksessä Prasussa nähdään tulennielentää, ainutlaatuista soihtujongleerausta sekä palavien köysien vauhdikasta pyöritystä. Tyylikäs, jännittävä ja väkevä esitys pitää otteessaan alusta loppuun asti, eikä varmasti jätä ketään kylmäksi! Esitys sopii kaiken ikäisille, ja se toteutetaan musiikkiin sovitettuna.</p>

        <p>Esityksen soihtujongleerausnumeroa on esitetty jo vuodesta 2004 lähtien mm. Lahden Kaupunginteatterissa, Tampere-talolla, Salpausselän Kisoissa, Turun Linnassa sekä Turun Joulukadun avajaisissa.</p>

        <p>Pidempää kestoa tai lisää näyttävyyttä haluttaessa, esitykseen voidaan yhdistää muita tulitaiteilijoita, pyrotekniikkaa (räjähdykset, kipinäsuihkut ja liekinheittimet) ja/tai ilotulitus.</p>
    </div>
    </div>

    <br></br>

    <div className="tableintro">
    <div className="tabletext">
        <p>Kesto: 10 minuuttia (suuremmalla ryhmällä 10-25 min)</p>
        <p>Kohdeyleisö: Kaikenikäiset.</p>
        <p>Tila: Yleensä esitetään ulkona. 8x8 metriä tasainen alusta. Madollisimman tuulensuojainen paikka. Sisätiloissa tilan on sovelluttava avotulen käyttöön paloturvallisuussääntöjen mukaisesti.</p>
        <p>Kieli: Sanaton / Musiikki</p>
        <p>Äänentoisto: Tuodaan mukana sovittaessa.</p>
        <p>Pystytys 40 minuuttia</p>
        <p>Purku 30 minuuttia</p>
    </div>
    </div>
   
    <br></br>

    <div className="moremargin"></div>

</div>,

show4_pics: ["./pictures5/tuliesitys_prasu1.jpg","./pictures5/tuliesitys_prasu8.jpg", "./pictures5/tuliesitys_prasu7.jpg","./pictures5/tuliesitys_prasu5.jpg", "./pictures5/tuliesitys_prasu3.jpg", "./pictures5/tuliesitys_prasu6.jpg"],


                    
                    show2: 

                <div>

                    <img className="showpic" alt="Show" src="./pictures5/show2.jpg"></img>

                    <h1 className="tabletitle">MERKKARIT JA KAI KUUTAMO</h1>

                    <div className="tableintro">
                    <div className="tabletext">
                        <p>Lastenmusiikkibändi Merkkarien ja sirkustaiteilija Kai Kuutamon esityksessä yhdistyvät vauhdikas ja omintakeinen lasten rock-musiikki, taitavat sirkustemput sekä hauskat ja osallistavat laululeikit.</p>

                        <p>Esityksessä soivat Merkkareiden omat kappaleet sekä klassikkolastenlaulut. Energinen esitys tempaa yleisön mukaansa, ja tututkin lastenlaulut saavat Merkkarien käsittelyssä aivan uutta virtaa. Kai Kuutamo esittelee kappaleiden säestämänä taitojaan eri jongleerausvälineillä ja johdattelee katsojat mukaan yhteisiin musiikkileikkeihin.</p>

                        <p>MERKKARIT JA KAIKUUTAMO -ryhmän hauskan esityksen parissa viihtyvät helposti myös aikuiset ja nuoriso. Esitys sopii niin suurille festivaaliareenoille ja teatteritiloihin kuin myös pienempiin tilaisuuksiin, päiväkoteihin ja kouluihin.</p>

                    </div>
                    </div>

                    <br></br>

                    <div className="tableintro">
                    <div className="tabletext">
                    <p>Kesto: 20-40 minuuttia sopimuksen mukaan.</p>
                    <p>Kohdeyleisö: Koko perhe.</p>
                    <p>Tila: Soveltuu monenlaisiin tiloihin sekä äänentoiston että jongleerauksen puolesta.</p>
                    <p>Kieli: Suomi, ruotsi tai kumpaakin.</p>
                    <p>Äänentoisto: Tuodaan mukana sovittaessa.</p>
                    <p>Pystytys: 60 minuuttia</p>
                    <p>Purku: 30 minuuttia</p>
                        
                    </div>
                    </div>

                    <br></br>

                    <div className="tableintro">
                    <div className="tabletext">
                        <p>Lisätietoa esityksestä ja kokoonpanosta</p> 
                        <p><a className="showlink" href="http://www.sirkussirkus.com/merkkarit/" target="blank">www.merkkarit.com</a></p>
                        
   
                    </div>
                    </div>

                    <div className="moremargin"></div>

                    </div>,

show2_pics: ["./pictures5/merkkaritjakaikuutamo1.jpg", "./pictures5/merkkaritjakaikuutamo2.jpg", "./pictures5/merkkaritjakaikuutamo3.jpg", "./pictures5/merkkaritjakaikuutamo4.jpg", "./pictures5/merkkaritjakaikuutamo8.jpg", "./pictures5/merkkaritjakaikuutamo6.jpg", "./pictures5/merkkaritjakaikuutamo7.jpg", "./pictures5/merkkaritjakaikuutamo9.jpg", "./pictures5/merkkaritjakaikuutamo5.jpg"],


show3: 

                <div>

                    <img className="showpic" alt="Show" src="./pictures5/show3.jpg"></img>

                    <h1 className="tabletitle">Herttakuninkaat</h1>

                    <div className="tableintro">
                    <div className="tabletext">
                        <p>"Herttakuninkaiden nimikkoteoksessa Kalle Lehto ja Kai Kuutamo marssittavat yleisön eteen joukon erikoisia hahmoja, jotka kukin esittelevät omaa sirkustaiteen tyylilajiaan aina eläinsirkuksesta nykysirkukseen. Herttakuninkaat lyövät ällikällä koko perheen!"</p>

                        <p>Esityksessä käydään yhdessä yleisön kanssa läpi erilaisia sirkustaiteen tyylilajeja itseironisella ja asiantuntevalla ammattiotteella sekä kerronnan että käytännön kautta. Esitys on ihastuttanut katsojia ympäri Suomea vuodesta 2014 lähtien herskuvalla huumorilla ja taitavilla tempuilla tuoden hymyn mitä vakavimpienkin katsojien huulille. Esitystä on nähty mm. Seikkisrock, Norpas, Skidit sekä SmugsuRock festivaaleilla ja se on kiertänyt yli 60 vanhainkotia Varsinais-Suomessa ja pääkaupunkiseudulla.</p>

                    </div>
                    </div>

                    <br></br>

                    <div className="tableintro">
                    <div className="tabletext">
                    <p>Kesto: 40 min.</p>
                    <p>Kohdeyleisö: Koko perhe.</p>
                    <p>Tila: Sovellettavissa erilaisiin tiloihin. Korkeudesta etua.</p>
                    <p>Mahdollista esittää myös ulkona.</p>
                    <p>Kieli: Suomi tai englanti.</p>
                    <p>Äänentoisto: Tuodaan mukana sovittaessa.</p>
                    <p>Pystytys: 45 minuuttia</p>
                    <p>Purku: 30 minuuttia</p>   
                    </div>
                    </div>

                    <br></br>

                    <div className="tableintro">
                    <div className="tabletext">
                        <p>"Tää oli kyllä kivointa mitä meillä on täällä ikinä ollut!"</p>
                        <p>- Vanhainkodin asukas, Nauvo</p>
                        <br></br>

                        <p>"Jopa Pena (nimi muutettu), jolla on 10% näöstä jäljellä, nautti esityksestä."</p>
                        <p>- Vanhainkodin hoitaja, Helsinki</p>
                        <br></br>

                        <p>"Mukavaa kun oli huumoria mukana. Koko esityksen ajan hymyilytti."</p>
                        <p>- Vanhainkodin asukas, Turku</p>
                        <br></br>

                        <p>"Teette hyvää työtä, pojat. Olette taitavia, lahjakkaita ja iloisia."</p>
                        <p>- Vanhainkodin asukas, Hyvinkää</p>
                        <br></br>

                        <p>"Juuri oikean mittainen ja oikeanlainen esitys meidän asukeille."</p>
                        <p>- Vanhainkodin hoitaja, Helsinki</p>
                        <br></br>                        


                    </div>
                    </div>


                    <div className="tableintro">
                    <div className="tabletext">
                        <p>Lisätietoa Herttakuninkaista täältä:</p> 
                        <p><a className="showlink" href="http://www.sirkussirkus.com/herttakuninkaat/" target="blank">www.herttakuninkaat.com</a></p>
                        
   
                    </div>
                    </div>

   


                    <div className="moremargin"></div>

                    <div className="icont_2">
                    <div className="icont2_2">
                    <iframe className="video" title="1" src="https://www.youtube.com/embed/c0TV9iVjoyY" allowFullScreen></iframe>
                    </div>
                    </div>


                    </div>,
show3_pics: ["./pictures5/herttakuninkaat1.jpg", "./pictures5/herttakuninkaat2.jpg", "./pictures5/herttakuninkaat3.jpg", "./pictures5/herttakuninkaat4.jpg", "./pictures5/herttakuninkaat5.jpg", "./pictures5/herttakuninkaat6.jpg", "./pictures5/herttakuninkaat7.jpg", "./pictures5/herttakuninkaat8.jpg", "./pictures5/herttakuninkaat9.jpg"],
                   

show6: 

                <div>

                    <img className="showpic" alt="Show" src="./pictures5/show6.jpg"></img>

                    <h1 className="tabletitle">Rainhard "Pitkä Rane" Reisiheisi & Pitkät Hemmot</h1>
                                        
                    

                    <div className="tableintro">
                    <div className="tabletext">
                         

                        <p> Yllä tapahtumasi kanssa uusiin korkeuksiin Pitkä Ranen ja kumppanien avulla! Rainhard Reisiheisi tunnetaan kaverien kesken nimellä Pitkä Rane, ja kavereitahan Ranella riittää minne hän ikinä eksyykään! Pitkällä mitallaan hän tulee helposti huomatuksi, ja iloisen ulospäinsuuntautuneen luonteensa ansiosta hänen kanssa on helppo jutella päivän polttavista aiheista, räätälöidyistä vaatteista tai terveellisestä ruokavaliosta.</p>

                        <p>Pitkä Ranella ei ole varsinaista omaa esitystä, vaan hänet voi tilata kiertelemään tapahtumiin, ja ottamaan kontaktia kävijöihin tai muuten vaan olemaan pitkänä. Lentolehtisten tai esimerkiksi ilmapallojen jakaminen onnistuu myös (tilaaja vastaa materiaaleista).</p>

                        <p>Suurempiin tapahtumiin voit myös tilata 2-5 hengen pitkän seurueen, sillä Rainhard Reisiheisi tuntee pitkien piirit! Usein Pitkä Rane nähdäänkin käyskentelemässä yhdessä hyvän ystävänsä Harri Harha-Askeleen kanssa (kaverikuva alempana).</p>
                    </div>
                    </div>

                    <br></br>

                    <div className="tableintro">
                    <div className="tabletext">
                        <p>Kesto: Pisin mitta yhdelle kävelylle yhtäjaksoisesti on 1 tunti. Pidemmissä rupeamissa yhtä kävelyä kohti 45 minuuttia lepoa, ellei toisin sovita.</p>
                        <p>Kieli: Suomi, Englanti, Khmer (Kambodza), auttava Ruotsi, haittaava Espanja</p>
                        <p>Tila: Missä tahansa, kunhan maasto on suhteellisen tasaista.</p>
                        <p>Erityistarpeet: Lukittava takalava, jossa 150 cm korkea tukeva alusta pukemista varten.</p>
                    </div>
                    </div>

                    <div className="moremargin"></div>


                    </div>,

                    show6_pics: ["./pictures5/puujalkahahmot1.jpg", "./pictures5/puujalkahahmot2.jpg", "./pictures5/puujalkahahmot3.jpg", "./pictures5/puujalkahahmot4.jpg", "./pictures5/puujalkahahmot5.jpg", "./pictures5/puujalkahahmot6.jpg"],


show8: 

                <div>

                    <img className="showpic" alt="Show" src="./pictures5/show8.jpg"></img>

                    <h1 className="tabletitle">Sirkuskunnan Narrit</h1>
                                        
                    

                    <div className="tableintro">
                    <div className="tabletext">
                         

                        <p>Sirkuskunnan Narrit tuovat keskiajan hengen ja hulvattoman meiningin luoksesi leikarimaisella katuesityksellään, joka esittelee yleisölleen aikansa ihmeitä kuten kapuloiden käsittelyä, käsillä tasapainoilua, tynnärin vanteiden pyöritystä, mahtityrväällä isottelua sekä KUOLEMANTEMPPUJA! Koko esitys on aina läpeensä juonnettu ja täynnä hullunkurista, mutta eteenpäin virtaavaa puhtia.</p>

                        <p>Turun Keskiaikaisilta Markkinoilta ponnistaneet Sirkuskunnan Narrit ovat nauttineet vuosien varrella suurenmoista suosiota. He ovat esiintyneet Turun Keskiaikaisilla markkinoilla jo yli 10 vuoden ajan, ja nykyään he vierailevat jo melkein kaikissa Suomen suuremmissa keskiaikatapahtumissa jollain kokoonpanolla. Heitä tapaa myös säännöllisen epäsäännöllisesti Turun Linnan tapahtumissa.</p>

                        <p>Narreja on mahdollista palkata esiintymään 2-5 hengen ryhmässä, jossa jokaisella narrilla on aina muista poikkeava oma erikoistaitonsa. Pisimpään remmissä ovat matkustaneet narrit Urho, Suikki, Yrvänä ja Inkeri. Sirkuskunnan Narrien riveissä ovat vuosien varrella loistaneet myös narrit Elsa, Seikka, Elmeri, Riski-Jooseppi, Iita ja Ongervo.</p>

                        
                    </div>
                    </div>

                    <br></br>

                    <div className="tableintro">
                    <div className="tabletext">
                        <p>Kesto: 10-30 min. riippuen toiveista ja esiintyjien määrästä.</p>
                        <p>Kieli: Suomi tai Englanti</p>
                        <p>Tila: Missä tahansa. Tasainen alusta ja tuulensuoja eduksi. Yleensä esitetty keskiaikatapahtumissa kadulla tai nurmikolla.</p>
                        
                    </div>
                    </div>

                    <br></br>

                    <div className="tableintro">
                    <div className="tabletext">
                        <p>"Juuri tällaista huumoria pitää täällä olla!"</p>
                        <p>- Mies Turun Keskiaikaisilla Markkinoilla</p>

                        <br></br>

                        <p>"Markkinoiden paras ja hauskin esitys. Ehdottomasti!"</p>
                        <p>- Nainen Turun Keskiaikaisilla Markkinoilla</p>
                        
                    </div>
                    </div>

                    <div className="moremargin"></div>


                    </div>,

                    show8_pics: ["./pictures5/narrit1.jpg", "./pictures5/narrit3.jpg", "./pictures5/narrit4.jpg", "./pictures5/narrit5.jpg", "./pictures5/narrit6.jpg", "./pictures5/narrit8.jpg", "./pictures5/narrit7.jpg", "./pictures5/leikarit.jpg", "./pictures5/urhonarri.jpg"],



                

            },

            articles: 

            <div>
            <div className="tabletitlewrap">
            <h1 className="tabletitle">Lehtiartikkeleita</h1>
     
            </div>

            <div className="tableintro">
            <div className="tabletext">

            <br></br>
            
            <a className="articlelink" rel="noopener noreferrer" href="http://www.sirkussirkus.com/artikkelit/2019-aamuset.jpg" target="_blank"><p>Merkkarit & Kai Kuutamo juhlakeikalla Vimmassa</p></a>
            <p><span className="articlenewspaper">Aamuset 19.11.2019</span></p>
    
            <br></br>

            <a className="articlelink" rel="noopener noreferrer" href="http://www.sirkussirkus.com/artikkelit/2019-turunsanomat-3.jpg" target="_blank"><p>Sirkusarvio: Katusirkuksen rentous kohtaa lastensirkuksen kirjavuuden jonglööri Kai Kuutamon kiertue-esityksessä</p></a>
            <p><span className="articlenewspaper">Turun Sanomat 29.9.2019</span></p>
    
            <br></br>

            <a className="articlelink" rel="noopener noreferrer" href="https://turunseutusanomat.fi/2019/06/harvaluodon-rannalla-keskikesaa-juhlisti-arviolta-yli-600-ihmista/?fbclid=IwAR3UfAptx0jmS5qV1JKButKJ2Wn79-axxwt-YhveYTjpLPvq_r6lkkjnrRc" target="_blank"><p>Harvaluodon rannalla keskikesää juhlisti arviolta yli 600 ihmistä</p></a>
            <p><span className="articlenewspaper">Turun Seutusanomat 25.6.2019</span></p>
    
            <br></br>


            <a className="articlelink" rel="noopener noreferrer" href="http://www.sirkussirkus.com/artikkelit/2019-turunsanomat-2.jpg" target="_blank"><p>Seikkisrockin yhdistämät</p></a>
            <p><span className="articlenewspaper">Turun Sanomat 2019 kesäkuu</span></p>
    
            <br></br>

            <a className="articlelink" rel="noopener noreferrer" href="http://www.sirkussirkus.com/artikkelit/2019-turunsanomat-1.jpg" target="_blank"><p>Taiturimaisia temppuja ja vuorovaikutusta</p></a>
            <p><span className="articlenewspaper">Turun Sanomat 13.4.2019</span></p>
    
            <br></br>

            <a className="articlelink" rel="noopener noreferrer" href="http://www.sirkussirkus.com/artikkelit/2018-aamuset.jpg" target="_blank"><p>Sirkusta Tunteella - Sirkusputiikin kauppias haluaa vähentää kuluttamista</p></a>
            <p><span className="articlenewspaper">Aamuset 14.2.2018</span></p>
    
            <br></br>

            <a className="articlelink" rel="noopener noreferrer" href="http://www.sirkussirkus.com/artikkelit/2017-turunsanomat-3.jpg" target="_blank"><p>Kohti Loveen Lankeamista</p></a>
            <p><span className="articlenewspaper">Turun Sanomat 2017 Lokakuu</span></p>
    
            <br></br>

            <a className="articlelink" rel="noopener noreferrer" href="http://www.sirkussirkus.com/artikkelit/2017-turunsanomat-2.jpg" target="_blank"><p>Pohjolan Äijä saapuu Metsäkirkkoon</p></a>
            <p><span className="articlenewspaper">Turun Sanomat 2017 Syyskuu</span></p>
    
            <br></br>

            <a className="articlelink" rel="noopener noreferrer" href="http://www.sirkussirkus.com/artikkelit/2017-turunsanomat-1.jpg" target="_blank"><p>Rokkimusaa ja jongleerausta</p></a>
            <p><span className="articlenewspaper">Turun Sanomat 28.5.2017</span></p>
    
            <br></br>

            <a className="articlelink" rel="noopener noreferrer" href="http://www.sirkussirkus.com/artikkelit/2017-turuntienoo.jpg" target="_blank"><p>Merimiesrock sekoitti Ruskotalon nuoren yleisön</p></a>
            <p><span className="articlenewspaper">Turun Tienoo 13.4.2017</span></p>
    
            <br></br>

            <a className="articlelink" rel="noopener noreferrer" href="http://www.auranaallot.fi/uutiset/paikallinen/festivaali-joka-juhlii-kaikkea-samanaikaisesti-monisyinen-festivaali?fbclid=IwAR3V4Je-MOtEchTinkZbd_mXRbYcl3ZbiMA5aP2obNpmwIKw6K6PZTMtg2c" target="_blank"><p>Festivaali, joka juhlii kaikkea samanaikaisesti on monisyinen festivaali</p></a>
            <p><span className="articlenewspaper">Auran Aallot 2015</span></p>

            <br></br>

            <a className="articlelink" rel="noopener noreferrer" href="https://www.ts.fi/uutiset/paikalliset/796198/Sirkustaiteilija+Kai+Kuutamo+rikkoi+jongleerauksen+Suomen+ennatyksen" target="_blank"><p>Sirkustaiteilija Kai Kuutamo rikkoi jongleerauksen Suomen ennätyksen</p></a>
            <p><span className="articlenewspaper">Turun Sanomat 18.7.2015</span></p>

            <br></br>

            <a className="articlelink" rel="noopener noreferrer" href="http://www.sirkussirkus.com/artikkelit/2015-paivakummunsanomat.jpg" target="_blank"><p>Sirkushuveja, taikatemppuja ja akrobatiaa hoitokodeissa</p></a>
            <p><span className="articlenewspaper">Hoitokoti Päiväkummun Sanomat 1/2015</span></p>
    
            <br></br>

            <a className="articlelink" rel="noopener noreferrer" href="http://www.sirkussirkus.com/artikkelit/2014-fidea.jpg" target="_blank"><p>Circus Kampot - Suomalainen sirkuskoulu Kambodzassa</p></a>
            <p><span className="articlenewspaper">Fidea Suomen Draama- ja Teatteriopetuksen liiton jäsenlehti 2014</span></p>
         
            <br></br>

            <a className="articlelink" rel="noopener noreferrer" href="https://www.ts.fi/kulttuuri/519198/Rytmikasta+jongleerausta" target="_blank"><p>Rytmikästä Jongleerausta</p></a>
            <p><span className="articlenewspaper">Turun Sanomat 6.8.2013</span></p>

            <br></br>

            <a className="articlelink" rel="noopener noreferrer" href="http://www.sirkussirkus.com/artikkelit/2012-aamuset.jpg" target="_blank"><p>Elämä yhtä sirkusta</p></a>
            <p><span className="articlenewspaper">Aamuset 2012 heinäkuu</span></p>

            <br></br>

            <a className="articlelink" rel="noopener noreferrer" href="https://www.ts.fi/kulttuuri/380163/Maailma+on+erilainen+sirkustaiteilijan+silmin" target="_blank"><p>Maailma on erilainen sirkustaiteilijan silmin</p></a>
            <p><span className="articlenewspaper">Turun Sanomat 19.8.2012</span></p>

            <br></br>

            <a className="articlelink" rel="noopener noreferrer" href="http://www.sirkussirkus.com/artikkelit/2012-turunsanomat.jpg" target="_blank"><p>Kuutamo tarjoaa logistiikkaa ja sirkushuveja</p></a>
            <p><span className="articlenewspaper">Turun Sanomat 2012 elokuu</span></p>

            <br></br>

            <a className="articlelink" rel="noopener noreferrer" href="http://tstv.fi/video/2699" target="_blank"><p>Sirkustaiteilija pahvilaatikoiden keskellä</p></a>
            <p><span className="articlenewspaper">TS-TV 13.8.2012</span></p>

            <br></br>

            <a className="articlelink" rel="noopener noreferrer" href="http://www.sirkussirkus.com/artikkelit/2010-turunsanomat.jpg" target="_blank"><p>Ihan Jonglöörinä</p></a>
            <p><span className="articlenewspaper">Turun Sanomat 22.1.2010</span></p>

            <br></br>

            <a className="articlelink" rel="noopener noreferrer" href="http://www.ts.fi/viihde/1074295603/Lapsille+raataloity+sirkus+taituroi+Seikkispuistossa" target="_blank"><p>Lapsille räätälöity sirkus taituroi Seikkailupuistossa</p></a>
            <p><span className="articlenewspaper">Turun Sanomat 19.7.2008</span></p>

            <br></br>

            <a className="articlelink" rel="noopener noreferrer" href="http://www.ts.fi/viihde/1074183475/Kun+jongloori+palaa+kotiinsa" target="_blank"><p>Kun jonglööri palaa kotiinsa</p></a>
            <p><span className="articlenewspaper">Turun Sanomat 27.2.2007</span></p>

            <br></br>


            </div>
            </div>

            </div>,

            contact:

            <div>
            <div className="tableintro">
            <div className="tabletext contacttext">

            <p id="contacttitle">Kai Kuutamo</p>
            <p>kai@sirkussirkus.com</p>
            <p>puh. 040 754 6182</p>
            <p>Turku</p>

            </div>
            </div>

            <div className="tableintro">
            <div className="tabletext contacttext">

            <p id="contacttitle2">Sirkussirkus Putiikki</p>
            <p>kauppa@sirkussirkus.com</p>
            <p>puh. 040 754 6182</p>
            <p>Lonttistentie 14, Turku</p>
            <a className="articlelink" rel="noopener noreferrer" href="http://putiikki.sirkussirkus.com" target="_blank"><p>www.sirkuskauppa.com</p></a>

            </div>
            </div>

            <div className="tableintro">
            <div className="tabletext contacttext">

            <p id="contacttitle2">Laskutus</p>
            <p>Sirkussirkus</p>
            <p>FI20038428</p>
            <p>Laivateollisuudenkatu 26 A 16</p>
            <p>20240 Turku</p>
            <p>FINLAND</p>
            <p></p>


            </div>
            </div>


            </div>,


form:

<div>

<div className="tabletitlewrap">
        <h1 style={{textAlign: "center"}} className="tabletitle">Kiitos!</h1>
        
</div>

<p id="thankyou">Tarjouspyyntösi on lähetetty!</p>

</div>,

promo:

<div>

<div className="tableintro">

<div className="tabletext">

<p id="promopicstext">Promootiokuvat painokelpoisina. Klikkaa suureksi.</p>

<div id="promopics">

<div className="promopiccont">
<a href="pictures7/kaikuutamo-promo1.jpg" rel="noopener noreferrer" target="blank"><img className="promopic" src="pictures7/promo1pieni.jpg" alt="Promo"></img></a>
<p>Kuvaaja: joku tyyppi</p>
</div>

<div className="promopiccont">
<a href="pictures7/kaikuutamo-promo2.PNG" rel="noopener noreferrer" target="blank"><img className="promopic" src="pictures7/promo2pieni.jpg" alt="Promo"></img></a>
<p>Kuvaaja: joku toinen tyyppi</p>
</div>

<div className="promopiccont">
<a id="promopic3" href="pictures7/kaikuutamo-promo3.jpg" rel="noopener noreferrer" target="blank"><img className="promopic" src="pictures7/promo3pieni.jpg" alt="Promo"></img></a>
<p>fdjskfjksjkdfjksjdfkjksjdkfjksjdfkjksjkdfjksjkdfjksjdfkj</p>
</div>

</div>

</div>

</div>

</div>

}


export default finnish;