import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import SideNav from './SideNav/sideNav';

const Header = (props) => {

    const navBars = () => (
        <div className='bars' onClick={props.onOpenNav}>
            <FontAwesome
                name='bars'
                style={{
                    color:'#dfdfdf',
                    padding:'10px',
                    cursor:'pointer'
                }}
            />
        </div>
    );

    const logo = () => (
            <Link to='/' className={logo}>
                <img src='/images/logo.png' alt='nba logo'/>
            </Link>
    );

    return (
        <header className='header'>
            <SideNav {...props} />
            <div className='headerOptions'>
                {navBars()}
                {logo()}
            </div>
        </header>
    );
};

export default Header;
