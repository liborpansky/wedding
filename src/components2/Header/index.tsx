import React from 'react'
import { Link } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import MobileMenu from '../MobileMenu'
import Language from '../language'

import './style.css'

interface Props {
  title: string
  location: Location
}

const Header: React.FC<Props> = ({ location, title }: Props) => {
  const intl = useIntl()
  return (
    <div className="Header_root">
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-10">
              <div className="logo">
                <h2>
                  <Link to="/">
                    Libor
                    <span>
                      <i className="fa fa-heart" aria-hidden="true"></i>
                    </span>
                    Martina
                  </Link>
                </h2>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="header-menu d-lg-block d-none">
                <ul className="mobile-menu d-flex">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <AnchorLink href="#couple">
                      {intl.formatMessage({ id: 'couple' })}
                    </AnchorLink>
                  </li>
                  <li>
                    <AnchorLink href="#story">
                      {intl.formatMessage({ id: 'story' })}
                    </AnchorLink>
                  </li>
                  <li>
                    <AnchorLink href="#people">
                      {intl.formatMessage({ id: 'people' })}
                    </AnchorLink>
                  </li>
                  <li>
                    <AnchorLink href="#event">
                      {intl.formatMessage({ id: 'events' })}
                    </AnchorLink>
                  </li>
                  <li>
                    <AnchorLink href="#gallery">
                      {intl.formatMessage({ id: 'gallery' })}
                    </AnchorLink>
                  </li>
                  <li>
                    <AnchorLink href="#rsvp">
                      {intl.formatMessage({ id: 'rsvp' })}
                    </AnchorLink>
                  </li>
                  <li>
                    <Language />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-2">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
