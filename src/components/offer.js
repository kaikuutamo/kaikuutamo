import React from 'react';

import {connect} from 'react-redux';

import cloudAnim from './cloudanimation'

import './offer.css';

import FormDat from 'form-data';

import Footer from './footer'

import {Link} from 'react-router-dom';

class Offer extends React.Component {
 
    constructor(props) {
        super();



        this.text = {

            name: "",
            email: "",
            phone: "",
            location: "",
            date: "",
            time: "",
            audience: "",
            inout: ""

        }

        this.status = "";
    }

    form = (e) => {

        var text = {...this.text}

        switch (e.target.name) {

            case "name":
            text.name = e.target.value;
            break;

            case "email":
            text.email = e.target.value;
            break;

            case "phone":
            text.phone = e.target.value;
            break;            
            
            case "location":
            text.location = e.target.value;
            break;

            case "date":
            text.date = e.target.value;
            break;

            case "time":
            text.time = e.target.value;
            break;

            case "audience":
            text.audience = e.target.value;
            break;

            case "inout":
            text.inout = e.target.value;
            break;

            default:
                    break;

        }

        this.text = text;

        

    }

    audio = (e) => {

        this.status = e.target.value;

        
    }

    send = () => {

        if (this.text.name.length === 0 || this.text.email.length === 0 || this.text.phone.length === 0 || this.text.location.length === 0) {
            
            alert("Täytä ainakin punaisella tähdellä * merkityt kentät!");

        }

        else {

            var emailText = `
            
            Nimi: ${this.text.name}

            Sähköposti: ${this.text.email}

            Puhelinnumero: ${this.text.phone}

            Paikkakunta: ${this.text.location}

            Päivämäärä: ${this.text.date}

            Aika: ${this.text.time}

            Yleisö: ${this.text.audience}

            Ulko- vai sisätila: ${this.text.inout}

            Äänentoistolaitteet: ${this.status}
            
            `

            /* ---------Form and sending----------- */

            var data = new FormDat();
            var fileName = Date.now() + "";

            data.append("id", fileName);
            data.append("order", emailText);

            var request = new XMLHttpRequest();
            request.open("POST", "upload.php", true);
            request.send(data);

            var request2 = new XMLHttpRequest();
            request2.open("POST", "sendmail.php", true);
            request2.send(data);

            /* ------------------------------- */

            console.log(emailText)

            var link = document.getElementById("linktoformsent");

            link.click();

        }

    }


    componentDidMount () {

        cloudAnim();
    
    }
    

    render() {


        return (

            <div className="tablewrap">
            <div className="tablewrap2">

            <div>
            
            <div className="tabletitlewrap">
            <h1 style={{textAlign: "center"}} className="tabletitle">Tarjouspyyntö</h1>
            
            </div>

            <p id="forminfo">Täytä ainakin punaisella tähdellä <span style={{color: "red"}}>*</span> merkityt kentät.</p>

            <div id="form">

            <form id="theform">

            <p>Nimi <span style={{color: "red"}}>*</span></p>
            <input name="name" onChange={this.form} type="text"></input>

            
            <p>Sähköposti <span style={{color: "red"}}>*</span></p>
            <input name="email" onChange={this.form} type="text"></input>

            <p>Puhelinnumero <span style={{color: "red"}}>*</span></p>
            <input name="phone" onChange={this.form} type="text"></input>

            <p>Paikkakunta, jossa esitys tapahtuu <span style={{color: "red"}}>*</span></p>
            <input name="location" onChange={this.form} type="text"></input>

            <p>Päivämäärä, jos tiedossa</p>
            <input name="date" onChange={this.form} type="text"></input>

            <p>Kellonaika, jos tiedossa</p>
            <input name="time" onChange={this.form} type="text"></input>

            <p>Yleisömääräarvio, jos tiedossa</p>
            <input name="audience" onChange={this.form} type="text"></input>

            <p>Sisä- vai ulkotila, jos tiedossa</p>
            <input name="inout" onChange={this.form} type="text"></input>

            <p>Äänentoistolaitteet käytettävissä</p>

            <div id="checkbox">
            <p>Kyllä</p><input onClick={this.audio} type="radio" name="audio" value="yes"></input>
            
            <p>Ei</p><input onClick={this.audio} type="radio" name="audio" value="no"></input>
            
            <p>Ehkä</p><input onClick={this.audio} type="radio" name="audio" value="maybe"></input>
            </div>

            </form>

            <p onClick={this.send} id="send">Lähetä</p>

            <Link id="linktoformsent" to="/formsent"></Link>

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

export default connect(mapStateToProps)(Offer);