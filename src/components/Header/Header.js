import React from 'react';
import style from './Header.css'
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import Sidenav from './SideNav/SideNav';


const Header = (props) =>{

    const logo =()=>(
            <Link className="logo" to="/">
                <img style={{width: '100px', height:'55px'}} 
                    alt="logo nba" 
                    src="/images/logo.png"
                />
            </Link>
    )

    const navBars = () => (
        <div className={style.bars}>
            <FontAwesome name="bars"
                onClick={props.onOpenNav}
                style={{
                    color: '#dfdfdf',
                    padding: '10px',
                    cursor: 'pointer'
                }}
            />
        </div>
    )

    return(
        <header className="header">
            <Sidenav {...props} />
            <div className="headerOpt">
                {navBars()}
                {logo()}
            </div>
        </header>
    )
}

export default Header;