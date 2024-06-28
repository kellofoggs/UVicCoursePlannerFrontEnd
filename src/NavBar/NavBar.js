// import logo from '../logo.svg';
import './NavBar.css';
import React, {Component} from 'react';

function DeskTopNav() {

    return(
        <nav id="desktop-nav">
            
            <div id="nav-name-div">UVic Course Planner</div>
            <div id="between-desktop-div"></div>
            <div id="desktop-ul-div">
                <ul id="desktop-nav-ul">
                <li><a href="#Home">Home</a></li>
                <li><a href= "#About">About</a></li>
                <li></li>
                <li></li>

                </ul>
            </div>


        </nav>


    );


}

export default DeskTopNav;
