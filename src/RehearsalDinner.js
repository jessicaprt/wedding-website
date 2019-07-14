import React, { Component } from 'react';
import { PlainElement } from './PlainElement.js';
import { PlainNavBar } from './PlainNavBar.js';

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

export class RehearsalDinner extends Component {
    render() {
        let RehearsalDinnerContent =
            <div className="RehearsalDinner">
                <p className="sub"><em>Friday, August 2, 2019</em></p>

                <p>Hello Bridal party! We are getting super close to the day of the wedding.</p>
                <p>First of all, we want to thank you all for playing a special part in our special day. As part of our celebration,
                    we request that you also attend our rehearsal day on Friday, 2nd of August. During that day we will cover
                    the order for when we all march down the aisle, the parts of the ceremony,
                    and also what each of you would need to do during the day of the wedding. We will also have a cocktail afterwards.
                </p>
                <p>Below are the times that you need to know.</p>

                <div class="times">
                    <p><strong>4:00 pm</strong> - Ceremony Rehearsal - <em>St Albert the Great Parish</em></p>
                    <p><strong>6:30 pm</strong> - Rehearsal cocktails - <em>Deerfoot Inn &amp; Casino (Mackenzie Room)</em></p>
                </div>

                <p>If you have any questions or if you have any issues with the schedule, feel free to text either one of us.</p>
                <p>💜 George and Jess</p>
            </div>

        let WeddingEntourageContent =
            <div className="BridalParty">
                <p className="sub">Here's the official list of our wedding entourage and everybody involved in our wedding ceremony.</p>

                <strong>George's Parents</strong>
                <ul className="list">
                    <li>Samy Antonious</li>
                    <li>Christine Antonious</li>
                </ul>

                <strong>Jessica's Parents</strong>
                <ul className="list">
                    <li>Nicky Prieto</li>
                    <li>Maricor Prieto</li>
                </ul>

                <strong>Principal Sponsors (Godparents)</strong>
                <ul className="list">
                    <li>Bob Prieto</li>
                    <li>Hannah Prieto</li>
                    <li>Hany Youakim</li>
                    <li>Lina Girgis</li>
                </ul>

                <strong>Best Man</strong>
                <ul className="list">
                    <li>Danny Khadour</li>
                </ul>

                <strong>Maid-of-Honor</strong>
                <ul className="list">
                    <li>Nicole Prieto</li>
                </ul>

                <strong>Flower Girl</strong>
                <ul className="list">
                    <li>Anna Youakim</li>
                </ul>

                <strong>Ring and Coin Bearer</strong>
                <ul className="list">
                    <li>Jacob Joaquin</li>
                </ul>

                <strong>Bridesmaids and Groomsmen</strong>
                <p><em className="list-sub">(also the official pairings for the aisle)<br/>
                    also note: we have more groomsmen than bridesmaids.</em>
                    </p>
                <ul className="list">
                    <li>Nicko Prieto <span className="and">and</span> Justine Prieto</li>
                    <li>Mina Youakim <span className="and">and</span> Catherine Antonious</li>
                    <li>Sam Jawich <span className="and">and</span> Danielle Prieto</li>
                    <li>Ryan Huard <span className="and">and</span> Katrina Prieto</li>
                    <li>Thomas Fenton, Curtis Malainey <span className="and">and</span> Liza Kharlova</li>
                    <li>Steve Boddez, David Skrundz <span className="and">and</span> Andrea Garrovillo</li>
                </ul>

                <strong>Wedding Ceremony Leaders</strong>
                <ul className="list">
                    <li><span className="leader">Mass Celebrants: </span> Fr. Chris Sobanski and Dcn. Ricardo Santiago</li>
                    <li><span className="leader">First Reading:</span> Caleb Lagrange</li>
                    <li><span className="leader">Responsorial Psalm:</span> Paulo Intal</li>
                    <li><span className="leader">Second Reading: </span> Mary Youakim</li>
                    <li> &nbsp; </li>
                    <li><span className="leader">Candle Ceremony: </span> Nicko Prieto, Justine Prieto</li>
                    <li><span className="leader">Veil Ceremony: </span> Mina Youakim, Catherine Antonious</li>
                    <li><span className="leader">Cord Ceremony: </span> Sam Jawich, Danielle Prieto</li>
                </ul>
                <p className="footer"><em></em></p>
            </div>

        return (
          <div className="App RehearsalDinnerMain">
              <PlainNavBar />
              <div className="Header">
                <PlainElement
                    pid="rehearsal"
                    title="Rehearsal Day"
                    content={RehearsalDinnerContent}
                    border="true"/>

                <PlainElement
                    pid="bridalParty"
                    title="the Wedding Entourage"
                    content={WeddingEntourageContent}
                    border="true"/>
                </div>
          </div>
        );
      }
}