import React, { Component } from 'react'
import { FormattedMessage } from 'gatsby-plugin-intl'
import CountDown from 'reactjs-countdown'
import './style.css'

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
                  <div className="count-down-clock">
                    <CountDown deadline="July 12, 2021" />
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
