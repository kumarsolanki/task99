import React from 'react';

import './Navbar.css';
import Logo from './logo/Logo';
import Searchbar from './searchbar/Searchbar';
import Appbar from './actions/appBar';
import SubRedditBar from './subRedditBar';

export default function Navbar() {

    return (
    <div>
        <div className="navbar">
            <Logo />
            <Searchbar />
            <Appbar/>
        </div>
        <div className="check"><SubRedditBar/></div>   
    </div>
    );
}