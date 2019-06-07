import React, { Component } from 'react'
import './Footer.css';

export class Footer extends Component {
    render() {
        return (
            <div className="footer">
            	<label className="contact">Contact us via:</label>
            <div className="contact-items">
            	<label className="mail contact-item row-sm-4">Email: <a href="http://aseke7182@gmail.com">Online Shop</a></label>
            	<label className="phone contact-item row-sm-4">Phone: <p> 8-707-681-33-41 </p> </label>
            	<label className="tgg contact-item row-sm-4">Telegram: <a href="http://t.me/aseke7182">@aseke7182</a></label>
            </div>
            </div>
        )
    }
}

export default Footer
