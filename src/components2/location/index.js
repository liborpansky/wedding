import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import { Link } from 'gatsby'
import SectionTitle from '../section-title'
import story1 from '../../images/events/1.jpg'
import story2 from '../../images/events/2.jpg'
import story3 from '../../images/events/3.jpg'

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
                  <p>{intl.formatMessage({ id: 'event_1_description' })}</p>
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
                <p>{intl.formatMessage({ id: 'event_2_description' })}</p>
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
                <p>{intl.formatMessage({ id: 'event_3_description' })}</p>
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
                <p>{intl.formatMessage({ id: 'event_4_description' })}</p>
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
      </div>
    </div>
  )
}
export default Location
