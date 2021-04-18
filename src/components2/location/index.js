import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import { Link } from 'gatsby'
import SectionTitle from '../section-title'
import story1 from '../../images/events/1.png'
import story2 from '../../images/events/2.png'
import story3 from '../../images/events/3.png'
import story4 from '../../images/events/4.png'

import './style.css'

const Location = () => {
  const intl = useIntl()
  return (
    <div id="event" className="service-area section-padding">
      <div className="container">
        <SectionTitle section={intl.formatMessage({ id: 'when_where' })} />
        <div className="service-area-menu">
          <div className="Ceremony-wrap">
            <div className="row">
              <div className="col-lg-5">
                <div className="ceromony-img">
                  <img src={story1} alt="" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="ceromony-content">
                  <h3>{intl.formatMessage({ id: 'event_1_title' })}</h3>
                  <span>{intl.formatMessage({ id: 'event_1_date' })}</span>
                  <span>{intl.formatMessage({ id: 'event_1_address' })}</span>
                  <p>TOGLIMI</p>
                  <Link to="/">
                    {intl.formatMessage({ id: 'see_location' })}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Ceremony-wrap">
          <div className="row">
            <div className="col-lg-7">
              <div className="ceromony-content ceromony-content2">
                <h3>{intl.formatMessage({ id: 'event_2_title' })}</h3>
                <span>{intl.formatMessage({ id: 'event_2_date' })}</span>
                <span>{intl.formatMessage({ id: 'event_2_address' })}</span>
                <Link to="/">{intl.formatMessage({ id: 'see_location' })}</Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="ceromony-img">
                <img src={story2} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="Ceremony-wrap">
          <div className="row">
            <div className="col-lg-5">
              <div className="ceromony-img">
                <img src={story3} alt="" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="ceromony-content">
                <h3>{intl.formatMessage({ id: 'event_3_title' })}</h3>
                <span>{intl.formatMessage({ id: 'event_3_date' })}</span>
                <span>{intl.formatMessage({ id: 'event_3_address' })}</span>
                <Link to="/">{intl.formatMessage({ id: 'see_location' })}</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="Ceremony-wrap">
          <div className="row">
            <div className="col-lg-7">
              <div className="ceromony-content ceromony-content2">
                <h3>{intl.formatMessage({ id: 'event_4_title' })}</h3>
                <span>{intl.formatMessage({ id: 'event_4_date' })}</span>
                <span>{intl.formatMessage({ id: 'event_4_address' })}</span>
                <Link to="/">{intl.formatMessage({ id: 'see_location' })}</Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="ceromony-img">
                <img src={story4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Location
