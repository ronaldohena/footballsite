import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {CURRENT_YEAR } from '../../Config';
const Footer = () =>{
    return(
        <div className="footer">
            <Link to="/" className="logo">
            <img style={{width: '100px', height:'55px'}} 
                alt="logo nba" 
                src="/images/logo.png"
            />
            </Link>
            <div className="right">
                @NBA {CURRENT_YEAR} All rights reserved.
            </div>
        </div>
    )
}

export default Footer;