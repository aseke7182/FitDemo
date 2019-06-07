import React, { Component } from 'react'
import './Footer.css';

export class Footer extends Component {
    render() {
        return (
            <div className="footer">
            	<label className="contact">Contact us via:</label>
            <div className="contact-items">
            	<label className="mail contact-item row-sm-4">Email: <a href="mailto:pressFtoStayFit@gmail.com">PressFtoStayFit</a></label>
            	<label className="phone contact-item row-sm-4">Phone: <a>8-727-327-77-6</a></label>
            	<label className="tgg contact-item row-sm-4">Telegram: <a href="http://t.me/timque">@PressFtoStayFit</a></label>
            </div>
            </div>
        )
    }
}

export default Footer
