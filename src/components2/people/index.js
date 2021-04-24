import React, { useState } from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import { Link } from 'gatsby'
import SectionTitle from '../section-title'
import groomsman from '../../images/groomsmen-bridesmaid/1.jpg'
import bridesmaid from '../../images/groomsmen-bridesmaid/2.png'

import './style.css'

const People = (props) => {
  const intl = useIntl()
  return (
    <div id="people" className="person-area section-padding pb-70">
      <div className="container">
        <SectionTitle
          section={intl.formatMessage({ id: 'groomsmen_bridesmaid' })}
        />
        <div className="person-area-menu">
          <div className="Groomsman-wrap">
            <div className="row">
              <div className="col-sm-4 offset-sm-1">
                <div className="person-wrap">
                  <div className="person-img">
                    <img src={groomsman} alt="" />
                  </div>
                  <div className="person-content">
                    <h3>Federico</h3>
                    <span>Fratello di lei</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 offset-sm-2">
                <div className="person-wrap">
                  <div className="person-img">
                    <img src={bridesmaid} alt="" />
                  </div>
                  <div className="person-content">
                    <h3>Lenka</h3>
                    <span>Sorella di lui</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default People
