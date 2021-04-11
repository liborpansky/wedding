import React, { Component } from 'react'
import { FormattedMessage } from 'gatsby-plugin-intl'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Collapse, CardBody, Card } from 'reactstrap'
import { Link } from 'gatsby'
import './style.css'

export default class MobileMenu extends Component {
  state = {
    isMenuShow: false,
    isOpen: false,
  }

  menuHandler = () => {
    this.setState({
      isMenuShow: !this.state.isMenuShow,
    })
  }

  setIsOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    const { isMenuShow, isOpen } = this.state

    return (
      <div>
        <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
          {/* <div className="clox" onClick={this.menuHandler}>Close Me</div> */}
          <div className="logo2">
            <h2>
              <Link to="/home">Libor & Martina</Link>
            </h2>
          </div>
          <ul className="responsivemenu">
            <li>
              <Link onClick={this.setIsOpen} to="/">
                Home<i className="fa fa-angle-right" aria-hidden="true"></i>
              </Link>
            </li>
            <Collapse isOpen={isOpen}>
              <Card>
                <CardBody>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                </CardBody>
              </Card>
            </Collapse>
            <li>
              <AnchorLink href="#couple">
                <FormattedMessage id="couple" />
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#story">
                <FormattedMessage id="story" />
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#people">
                <FormattedMessage id="people" />
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#event">
                <FormattedMessage id="events" />
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#gallery">
                <FormattedMessage id="gallery" />
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#rsvp">
                <FormattedMessage id="rsvp" />
              </AnchorLink>
            </li>
          </ul>
        </div>

        <div className="showmenu" onClick={this.menuHandler}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
      </div>
    )
  }
}
