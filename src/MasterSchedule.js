import React, { Component } from 'react';
import { PlainNavBar } from './PlainNavBar';
import { ExpandableItem } from './ExpandableItem';
import { PlainElement } from './PlainElement';

export class MasterSchedule extends Component {
  render() {
    let massSchedule =
      <ul>
        <li>George w/ parents</li>
        <li>Hany Youakim &amp; Lina Girgis</li>
        <li>Roberto Prieto &amp; Hannah Prieto</li>
        <li>Jacob Joaquin (Coin &amp; Ring bearer)</li>
        <li>Nicole Prieto &amp; Danny Khadour</li>
        <li>Justine Prieto &amp; Nicko Prieto</li>
        <li>Catherine Antonious &amp; Mina Youakim</li>
        <li>Danielle Prieto &amp; Sam Jawich</li>
        <li>Katrina Prieto &amp; Ryan Huard</li>
        <li>David Skrundz &amp; Andrea Garrovillio &amp; Steven Boddez</li>
        <li>Thomas Fenton &amp; Liza Kharlova &amp; Curtis Malainey</li>
        <li>Anna Youakin (Flower girl)</li>
        <li>Jess w/ parents</li>
      </ul>

    let liturgyOfTheWord =
      <ul>
        <li>Opening</li>
        <li>First Reading - Caleb Lagrange</li>
        <li>Responsorial Psalm - Paulo Intal</li>
        <li>Second Reading - Mary Youakim</li>
        <li>Gospel - Ricardo Santiago</li>
        <li>Homily - Ricardo Santiago</li>
        <li>Prayers of the Faithful - Ricardo Santiago</li>
      </ul>

    let riteOfMarriage =
      <ul>
        <li>Exchanging of Vows</li>
        <li>Blessing and Exchange of Rings - Jacob Joaquin</li>
        <li>Candle Ceremony - Justine &amp; Nicko</li>
        <li>Veil Ceremony - Catherine &amp; Mina</li>
        <li>Cord Ceremony - Danielle &amp; Sam</li>
      </ul>

    let liturgyOfTheEucharist = 
      <ul>
        <li>Offering of Gifts - Nicole Prieto &amp; Danny Khadour</li>
      </ul>

    let exitMarch = 
      <ul>
        <li>George &amp; Jess</li>
        <li>Jess's Parents</li>
        <li>George's Parents</li>
        <li>Rest of the party in same order as entrance</li>
      </ul>

    let rehearsalDay = 
      <ul>
        <li>
          <strong>4pm - 5:30pm: </strong>Rehearsal Mass @ St. Albert the Great Prish
          <p><ul><li><em>See <a href="#mass-schedule">mass schedule</a> above</em></li></ul></p>
        </li>
        <li>
          <strong>6:30 pm - evening: </strong> Rehearsal cocktail @ Deerfoot Inn (Mackenzie Room)
        </li>
      </ul>

    let groomsMenPrep =
      <ul>
        <li><strong>10am - 12pm: </strong>George and Danny (Bestman) get ready @ Danny's place</li>
        <li><strong>12:30pm: </strong>All dressed up groomsmen meet at Prestwick Fountain Park by St. Albert the Great Parish to get some nice shots hanging around before the wedding</li>
        <li><strong>1:20pm: </strong>Walk to church and get boutonnieres placed</li>
      </ul>

    let bridesMaidsprep =
      <ul>
        <li><strong>8:00am: </strong>Start getting ready @ Deerfoot Inn</li>
        <li><strong>1:20pm: </strong>Arrive at church</li>
      </ul>

    let weddingDay = 
      <ul>
        <li><strong>1pm: </strong>Florist arrives to prep for placing boutonnieres</li>
        <li>
          <strong>1:00pm - 1:30pm: </strong>Bridal party arrives at church to prep for mass
          <ul>
            <li>This includes sponsors/ring bearer/flower girl</li>
            <li>Groomsmen will get their boutonnieres pinned there</li>
          </ul>
        </li>
        <li>
          <strong>2:00pm - 3:30pm: </strong>Mass and Ceremony @ St.Albert the Great Parish
          <ul><li><em>See <a href="#mass-schedule">mass schedule</a> above</em></li></ul>
        </li>
        <li><strong>3:30pm - 4:00pm: </strong>Guest greetings</li>
        <li><strong>4:00pm - 4:30pm: </strong>Pictures at church
          <ul>
            <li>Pictures of just George and Jess</li>
            <li>Pictures with George's immediate family</li>
            <li>Pictures with Jess's immediate family</li>
            <li>Pictures with while wedding entourage</li>
            <li>Pictures with just the goomsmen &amp; bridesmaids</li>
            <li>Picture with Jess's extended family</li>
            <li>Pictures with George's extended family</li>
          </ul>
        </li>
        <li><strong>4:30pm - 5:00pm: </strong>Travel w/ bridal party to Fish Creek Park for photos</li>
        <li><strong>5:00pm - 6:30pm: </strong>Pictures w/ bridal party @ Fish Creek Park</li>
        <li>
          <strong>6:00pm: </strong>Doors open at reception
          <ul>
            <li>Bar opens</li>
            <li>Photobooth opens</li>
          </ul>
        </li>
        <li><strong>6:30pm - 7:00pm</strong> Bridal Party travel to Deerfoot Inn &amp; Casino for reception</li>
        <li>
          <strong>7:15pm: </strong>Welcome announcement + Bridal Party entrance
          <ul>
            <li>Entrance Song: Happily Ever After</li>
          </ul>
        </li>
        <li>
          <strong>7:20pm: </strong>Dinner starts
          <ul>
            <li>Starts with table 1, then we can randomly select the rest of the tables</li>
            <li>After all tables are called up start dinner music </li>
            <li>Dinner Music: <a href="https://open.spotify.com/album/6zDt4j28xSMo28ZfrjZese?si=ghecLtlXSgu5dwP4XYdRFA" target="_blank">Disney happily ever after wedding</a></li>
          </ul>
        </li>
        <li>
          <strong>8:10pm - 8:50pm: </strong>Formal Program
          <ul>
            <li>Close Photobooth temporarily</li>
            <li>Distribute champagne for toasts</li>
            <li>8:10pm: Best Man Speech</li>
            <li>8:15pm: Maid of Honor Speech</li>
            <li>8:20pm: Liza’s Speech</li>
            <li>8:25pm: Parents of the Bride Speech</li>
            <li>8:30pm: Parents of the Groom Speech</li>
            <li>8:35pm: Video Presentation</li>
            <li>8:45pm: George &amp; Jess’ Speech and thanks</li>
          </ul>
        </li>
        <li>
          <strong>8:50pm - 9:00pm: </strong>Dances
          <ul>
            <li>First Dance</li>
            <li>Father-Daughter Dance</li>
          </ul>
        </li>
        <li><strong>9:00pm - 9:10pm: </strong>Wedding Game 1</li>
        <li><strong>9:10pm - 9:20pm: </strong>Bouquet/Garter toss</li>
        <li><strong>9:20pm - 9:30pm: </strong>Wedding Game 2</li>
        <li><strong>9:30pm: </strong>Cutting of the Cake</li>
        <li><strong>9:35pm: </strong>Start dance &amp; reopen photobooth</li>
        <li>
          <strong>9:45pm: </strong>
          <ul>
            <li>announce desserts are available</li>
            <li>George and Jess steps out for night time shots outside</li>
          </ul>
        </li>
        <li><strong>12:30 am - 1pm: </strong>Doors close</li>
      </ul>
    let schedule = [
      {
        identifier: "mass-schedule",
        title: "Mass Schedule",
        text: 
          <div>
            <ExpandableItem
              key="master-sched"
              title="Entrance"
              text={massSchedule}
            />
            <ExpandableItem
              key="liturgy-of-the-word"
              title="Liturgy of the Word"
              text={liturgyOfTheWord}
            />
            <ExpandableItem
              key="rite-of-marriage"
              title="Rite of Marriage"
              text={riteOfMarriage}
            />
            <ExpandableItem
              key="liturgy-of-the-eucharist"
              title="Liturgy of the Eucharist"
              text={liturgyOfTheEucharist}
            />
            <ExpandableItem
              key="exit-march"
              title="Exit March"
              text={exitMarch}
            />
          </div>
      }, {
        identifier: "rehearsal-day",
        title: "Friday, August 2nd 2019 - Rehearsal Day",
        text: rehearsalDay
      }, {
        identifier: "groomsmen-prep",
        title: "Saturday, August 3rd 2019 - Groomsman Prep",
        text: groomsMenPrep
      }, {
        identifier: "bridesmaids-prep",
        title: "Saturday, August 3rd 2019 - Bridesmaids Prep",
        text: bridesMaidsprep
      }, {
        identifier: "wedding-day",
        title: "Saturday, August 3rd 2019 - Wedding Day",
        text: weddingDay
      }
    ];
    
    let renderedSchedule = [];

    for (let i in schedule) {
      renderedSchedule.push(
        <div className="ei-wrapper">
          <ExpandableItem 
            key={i}
            identifier={schedule[i].identifier}
            title={schedule[i].title}
            text={schedule[i].text} />
        </div>
      )
    }

    return (
      <div className="MasterSchedule">
          <PlainNavBar />
          <div className="Header">
            <PlainElement 
              key="master-sched-pe"
              pid="masterSchedule"
              title="Master Schedule"
              content={renderedSchedule}
              border="true"/>
          </div>
      </div>
    )
  }
}