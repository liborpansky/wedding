import React from 'react'
import { FormattedMessage } from 'gatsby-plugin-intl'
import './style.css'

const Footer = () => {
  return (
    <div className="footer-area">
      <div className="container">
        <div className="footer-content">
          <div className="content-sub">
            <h2>
              <FormattedMessage id="thank_you" />
            </h2>
            <span>
              <FormattedMessage id="for_being_with_us" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
