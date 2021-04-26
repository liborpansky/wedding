import React, { Component } from 'react'
import { FormattedMessage } from 'gatsby-plugin-intl'
import Countdown from 'react-countdown'
import './style.css'

const Completionist = () => <span>You are good to go!</span>

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />
  } else {
    // Render a countdown
    return (
      <div className="flex-w flex-c">
        <div className="flex-col-c-m size2 how-countdown">
          <span className="l1-txt1 p-b-9 days">{days}</span>
          <span className="s1-txt1">Days</span>
        </div>
        <div className="flex-col-c-m size2 how-countdown">
          <span className="l1-txt1 p-b-9 hours">{hours}</span>
          <span className="s1-txt1">Hours</span>
        </div>
        <div className="flex-col-c-m size2 how-countdown">
          <span className="l1-txt1 p-b-9 minutes">{minutes}</span>
          <span className="s1-txt1">Minutes</span>
        </div>
        <div className="flex-col-c-m size2 how-countdown">
          <span className="l1-txt1 p-b-9 seconds">{seconds}</span>
          <span className="s1-txt1">Seconds</span>
        </div>
      </div>
    )
  }
}

class Saveday extends Component {
  render() {
    return (
      <div id="countdown" className="countdown-area section-padding">
        <div className="container">
          <div className="col-l2">
            <Countdown date={'July 12, 2021'} renderer={renderer} />
          </div>
        </div>
      </div>
    )
  }
}

export default Saveday
