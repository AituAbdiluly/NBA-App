import React from 'react';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import Sidenav from './SideNav/SideNav';

import './header.css';

const Header = (props) => {

    const navBars = () => (
        <div className="bars">
             <FontAwesome name="bars"
                 style={{
                     color: '#dfdfdf',
                     padding: '10px',
                     cursor: 'pointer'
                 }}
                 onClick={props.onOpenNav}
             />
        </div>
    )

    const logo = () => {
        return (
            <Link to="/" className="logo">
                <img src="/images/nba_logo.png" alt="nba logo"/>
            </Link>
        )
    }

    return (
        <header className="header">

            <Sidenav {...props} />

            <div className="headerOpt">
                {navBars()}
                {logo()}
            </div>
        </header>
    );
};

export default Header;