import React from 'react';
import { Link } from "react-router-dom";
import FontAwesome from 'react-fontawesome';
import './sideNav.css'

const SideNavItems = () => {

    const items = [
        {
            icon: 'home',
            text: 'HOME',
            link: '/'
        },
        {
            icon: 'file-text-o',
            text: 'NEWS',
            link: '/news'
        },
        {
            icon: 'play',
            text: 'VIDEOS',
            link: '/videos'
        },
    ];

    const showItems = () => {
        return items.map((item, i) => {
            return (
                <div key={i} className={item.type}>
                    <Link to={item.link}>
                        <FontAwesome name={item.icon} />
                        {item.text}
                    </Link>
                </div>
            )
        })
    };

    return (
        <div>
            {showItems()}
        </div>
    );
};

export default SideNavItems;
