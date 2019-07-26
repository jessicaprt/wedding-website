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
                            <p>aug.03.2019 - Calgary, AB</p>
                        </div>
                    </div>
                </div>
                <Countdown date={'2019-08-03T14:00:00-06:00'} />
                <NavBar />
                <div className="headerPhoto"></div>
            </div>
        );
    }
}