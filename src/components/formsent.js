import React from 'react';

import {connect} from 'react-redux';

import cloudAnim from './cloudanimation'

import './formsent.css';

import Footer from './footer'

class FormSent extends React.Component {



    componentDidMount () {

        cloudAnim();
    
    }
    

render () {

return (

    <div className="tablewrap">
    <div className="tablewrap2">
    <div className="formmargin"></div>

    {this.props.texts.form}

    <div className="formmargin"></div>
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

export default connect(mapStateToProps)(FormSent);
