import React, { useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import classnames from 'classnames'
import { Link } from 'gatsby'
import SectionTitle from '../section-title'
import bride1 from '../../images/groomsmen-bridesmaid/1.png'
import bride2 from '../../images/groomsmen-bridesmaid/2.png'
import bride3 from '../../images/groomsmen-bridesmaid/3.jpg'
import bride4 from '../../images/groomsmen-bridesmaid/4.jpg'
import bride5 from '../../images/groomsmen-bridesmaid/5.jpg'
import bride6 from '../../images/groomsmen-bridesmaid/7.jpg'
import bride7 from '../../images/groomsmen-bridesmaid/6.jpg'
import bride8 from '../../images/groomsmen-bridesmaid/8.jpg'
import bride9 from '../../images/groomsmen-bridesmaid/9.jpg'
import bride10 from '../../images/groomsmen-bridesmaid/10.jpg'

import './style.css'

const People = (props) => {
  return (
    <div id="people" className="person-area section-padding pb-70">
      <div className="container">
        <SectionTitle section={'Groomsmen & Bridesmaid'} />
        <div className="person-area-menu">
          <div className="Groomsman-wrap">
            <div className="row">
              <div className="col-sm-4 offset-sm-1">
                <div className="person-wrap">
                  <div className="person-img">
                    <img src={bride1} alt="" />
                    <div className="social-list">
                      <ul>
                        <li>
                          <Link to="/">
                            <i className="fa fa-facebook-f"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <i className="fa fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <i className="fa fa-skype"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
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
                    <img src={bride2} alt="" />
                    <div className="social-list">
                      <ul>
                        <li>
                          <Link to="/">
                            <i className="fa fa-facebook-f"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <i className="fa fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <i className="fa fa-skype"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
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
