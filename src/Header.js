import React, { Component } from 'react';
import { NavBar } from './NavBar.js';
import { Countdown } from './Countdown.js';

export class Header extends Component {
    render() {      
        return(
            <div className="Header">
                <div className="headerTitle">
                    <div className="AmaticSC mainTitle">GEORGE ANTONIOUS</div>
                    <div className="Pacifico subTitle">and</div>
                    <div className="AmaticSC mainTitle">JESSICA PRIETO</div>
                    <div className="date-wrapper container AmaticSC subTitle">
                        <div className="date">
                            <span><div class="mickey"></div></span>
                            <span className="">AUG.03.2019</span>
                            <span><div class="mickey"></div></span>
                        </div>
                    </div>
                </div>
                <Countdown date={'2019-08-03T14:00:00-07:00'} />
                <NavBar />
                <div className="headerPhoto"></div>
            </div>
        );
    }
}