import React from 'react';
import { Link } from "react-router-dom";
import FontAwesome from 'react-fontawesome';
import './sideNav.css'

const SideNavItems = () => {
    return (
        <div className='options'>
            <Link to='/'>
                <FontAwesome name='home' />
                HOME
            </Link>
        </div>
    );
};

export default SideNavItems;
