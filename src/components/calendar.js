import React from 'react';

import {connect} from 'react-redux';

import cloudAnim from './cloudanimation'

import Footer from './footer'


import './calendar.css';

class Calendar extends React.Component {

    constructor(props) {
        
        super();
    
    this.state = {
        pic: "",
        number: 0,
        
    }

    this.status = "off";
    this.pics = [];
    
    }

   
    componentDidMount () {
        cloudAnim();
    }

render () {

    return (
        <div className="tablewrap">
        <div className="tablewrap2">


        <div className="tableintro">

        <div className="calendar-wrap">
            
            <div className="month-block">
                <div className="white-line"></div>
                <p className="month-block-title">2020</p>
                <div className="white-line"></div>

                    <p className="month-block-title">JOULUKUU 2020</p>
                
                    <p className="month-block-text">13.12. Viking Line, Amorella</p>                                
                    <p className="month-block-text">10.-12.12. Kolme Väriä, Aurinkobaletti, Turku</p>


                    <p className="month-block-title">LOKAKUU 2020</p>
                    <p className="month-block-text">26.10. Paimion kirjasto, Paimio</p>
                    <p className="month-block-text">22.10. Perhetalo Piikkiö, Nuppula, Kaarina</p>
                    <p className="month-block-text">21.10. Perhetalo Oskariina, Kaarina</p>
                    <p className="month-block-text">20.10. Littoisten monitoimitalo, Kaarina</p>
                    <p className="month-block-text">5.10. Yksityistilaisuus, Kaarina</p>



                    <p className="month-block-title">SYYSKUU 2020</p>
                    <p className="month-block-text">30.9. Pilke-musiikkipäiväkoti Rumpali, Masku</p>                                            
                    <p className="month-block-text">25.9. Sirkus Faktorin residenssi, Orivesi</p>
                    <p className="month-block-text">24.9. Sirkus Faktorin residenssi, Orivesi</p>
                    <p className="month-block-text">23.9. Sirkus Faktorin residenssi, Orivesi</p>
                    <p className="month-block-text">22.9. Sirkus Faktorin residenssi, Orivesi</p>
                    <p className="month-block-text">21.9. Sirkus Faktorin residenssi, Orivesi</p>
                    <p className="month-block-text">20.9. Kauppakeskus Veturi, Kouvola</p>
                    <p className="month-block-text">19.9. Kauppakeskus Willa, Hyvinkää</p>
                    <p className="month-block-text">18.9. Sirkus Faktorin residenssi, Orivesi</p>
                    <p className="month-block-text">17.9. Sirkus Faktorin residenssi, Orivesi</p>
                    <p className="month-block-text">16.9. Sirkus Faktorin residenssi, Orivesi</p>
                    <p className="month-block-text">15.9. Sirkus Faktorin residenssi, Orivesi</p>
                    <p className="month-block-text">14.9. Sirkus Faktorin residenssi, Orivesi</p>
                    <p className="month-block-text">12.9. Logomo, Turku</p>
                    <p className="month-block-text">11.9. Pilke-päiväkoti Aurora ja Kipinä, Kaarina</p>
                    <p className="month-block-text">10.9. Lehmusvalkaman Vanhainkoti, Turku</p>
                    <p className="month-block-text">10.9. Uittamon päiväkoti, Turku (2 esitystä)</p>
                    <p className="month-block-text">9.9. Ruusukorttelin Hyvinvointikeskus, Turku</p>
                    <p className="month-block-text">8.9. Kaanaan päiväkoti, Raisio (2 esitystä)</p>


                    <p className="month-block-title">ELOKUU 2020</p>
                    <p className="month-block-text">31.8. Seniorisäätiö, Antinkoti, Helsinki</p>
                    <p className="month-block-text">31.8. Seniorisäätiö, Mariankoti, Helsinki</p>
                    <p className="month-block-text">29.8. Muinaistulien Yö, Kaarina (5 esitystä)</p>
                    <p className="month-block-text">29.8. Lasten Laulukaupunki, Salo</p>
                    <p className="month-block-text">27.8. Saga Kaskenniitty, Turku</p>
                    <p className="month-block-text">25.8. Saga Kaskenpuisto, Turku</p>
                    <p className="month-block-text">16.8. Hämeen Keskiaikafestivaali, Hämeenlinna</p>
                    <p className="month-block-text">15.8. Hämeen Keskiaikafestivaali, Hämeenlinna</p>
                    <p className="month-block-text">14.8. Hämeen Keskiaikafestivaali, Hämeenlinna</p>
                    <p className="month-block-text">12.8. Roihuvuoren Monipuolinen Palvelukeskus, Helsinki</p>
                    <p className="month-block-text">11.8. Yksityistilaisuus, Helsinki</p>
                    <p className="month-block-text">11.8. Saga Tammilinna, Helsinki</p>
                    <p className="month-block-text">11.8. Seniorisäätiö, Kannelkoti, Helsinki</p>
                    <p className="month-block-text">10.8. Sanervakoti, Helsinki</p>


                    <p className="month-block-title">HEINÄKUU 2020</p>
                    <p className="month-block-text">24.7. Villa Kaskimäki, Kirkkonummi</p>
                    <p className="month-block-text">23.7. Kinaporin Palvelukeskus, Helsinki</p>
                    <p className="month-block-text">22.7. Seniorisäätiö, Pakilakoti, Helsinki</p>
                    <p className="month-block-text">21.7. Seikkailupuisto, Turku</p>
                    <p className="month-block-text">14.7. Yksityistilaisuus, Turku</p>
                    <p className="month-block-text">9.7. Seikkailupuisto, Turku</p>


                    <p className="month-block-title">KESÄKUU 2020</p>
                    <p className="month-block-text">17.6. Turun Nuorisokeskus Vimma, Turku</p>


                    <p className="month-block-title">TOUKOKUU 2020</p>
                    <p className="month-block-text">27.5. Attendo Haarla, Turku</p>
                    <p className="month-block-text"></p>


                    <p className="month-block-title">MAALISKUU 2020</p>
                    <p className="month-block-text">12.3. Kaanaan päiväkoti, Raisio</p>
                    <p className="month-block-text">11.3. Pilke-päiväkoti Välskäri, Turku</p>
                    <p className="month-block-text">10.3. Pasalanpuiston päiväkoti, Raisio</p>
                    <p className="month-block-text">10.3. Leijapuiston päiväkoti, Raisio</p>
                    <p className="month-block-text">7.3. JDS 2020, Jyväskylä</p>
                    <p className="month-block-text">4.3. Pilke-päiväkoti Kanerva, Kaarina (2 esitystä)</p>
                    <p className="month-block-text"></p>


                    <p className="month-block-title">HELMIKUU 2020</p>
                    <p className="month-block-text">29.2. Yksityistilaisuus, Taivassalo</p>
                    <p className="month-block-text">28.2. Touhula-päiväkoti, Salo (2 esitystä)</p>
                    <p className="month-block-text">15.2. Lasten Syöpäpäivä, Sykerö ry, Kauppakeskus Mylly, Turku (2 esitystä)</p>
                    <p className="month-block-text">14.2. Cafe Mikael, Pansion Höveli, Turku</p>
                    <p className="month-block-text">8.2. Kauppakeskus Seppä, Jyväskylä (2 esitystä)</p>
                    <p className="month-block-text">4.2. Hajalan päiväkoti, Salo</p>
                    <p className="month-block-text">2.2. MLL Mynämäki, Laurin koulu, Mynämäki</p>
                    <p className="month-block-text"></p>


                    <div className="white-line"></div>
                <p className="month-block-title">2019</p>
                <div className="white-line"></div>

                  
            </div>

            <div className="calendar-empty-block"></div>

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

export default connect(mapStateToProps)(Calendar);