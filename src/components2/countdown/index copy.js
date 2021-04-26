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
      <div className="flex-w flex-sa-m cd100 bor1 p-t-42 p-b-22 p-l-50 p-r-50 respon1">
        <div className="flex-col-c-m wsize2 m-b-20">
          <span className="l1-txt2 p-b-4 days">35</span>
          <span className="m2-txt2">Days</span>
        </div>
        <span className="l1-txt2 p-b-22">:</span>
        <div className="flex-col-c-m wsize2 m-b-20">
          <span className="l1-txt2 p-b-4 hours">17</span>
          <span className="m2-txt2">Hours</span>
        </div>
        <span className="l1-txt2 p-b-22 respon2">:</span>
        <div className="flex-col-c-m wsize2 m-b-20">
          <span className="l1-txt2 p-b-4 minutes">59</span>
          <span className="m2-txt2">Minutes</span>
        </div>
        <span className="l1-txt2 p-b-22">:</span>
        <div className="flex-col-c-m wsize2 m-b-20">
          <span className="l1-txt2 p-b-4 seconds">48</span>
          <span className="m2-txt2">Seconds</span>
        </div>
      </div>
      // <ul className="react-countdown">
      //   <li>
      //     <p classNames="digit">{days}</p>
      //     <p classNames="text">days</p>
      //   </li>
      //   <li>
      //     <p classNames="digit">{hours}</p>
      //     <p classNames="text">hour</p>
      //   </li>
      //   <li>
      //     <p classNames="digit">{minutes}</p>
      //     <p classNames="text">min</p>
      //   </li>
      //   <li>
      //     <p classNames="digit">{seconds}</p>
      //     <p classNames="text">Sec</p>
      //   </li>
      // </ul>
    )
  }
}

class Saveday extends Component {
  render() {
    return (
      <div className="count-down-area">
        <div className="count-down-sectionparallax">
          <div className="container">
            <div className="count-down-item count-down-item2">
              <div className="row">
                <div className="col-12 col-md-4 section-area">
                  <div className="section-sub"></div>
                  <h2 className="big">
                    <span>
                      <FormattedMessage id="we_are_waiting" />
                    </span>
                    <FormattedMessage id="the_big_day" />
                  </h2>
                </div>
                <div className="col-12 col-md-8 clock-area">
                  <div className="count-down-clock ">
                    <Countdown date={'July 12, 2021'} renderer={renderer} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Saveday
