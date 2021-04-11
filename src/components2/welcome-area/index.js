import React from 'react'
import { FormattedMessage } from 'gatsby-plugin-intl'
import { Link } from 'gatsby'
import './style.css'

const Welcome = () => {
  return (
    <div className="welcome-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="welcome-content">
              <h2>
                <FormattedMessage id="welcome_big_day" />
              </h2>
              <p>
                <FormattedMessage id="welcome_text" />
              </p>
              <div className="btn">
                <Link to="#rsvp">
                  <FormattedMessage id="rsvp" />
                </Link>
              </div>
              <div className="btn">
                <Link to="#event">
                  <FormattedMessage id="events" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
