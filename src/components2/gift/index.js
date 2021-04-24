import React, { Component } from 'react'
import { FormattedMessage } from 'gatsby-plugin-intl'
import './style.css'

class Gift extends Component {
  render() {
    var settings = {
      dots: false,
      arrows: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
      <div className="gift-area">
        <div className="container">
          <div className="col-12">
            <div className="section-title text-center">
              <h2>
                <FormattedMessage id="gift_registration" />
              </h2>
              <h5>
                <FormattedMessage id="gift_registration_text" />
              </h5>
              <div className="pt-4">
                <b>INTESTATARIO:</b> Martina Longo
              </div>
              <div>
                <b>IBAN:</b> IT02A0306979494100000000912
              </div>
              <div className="pb-5">
                <b>Swift:</b> IBSPITNA160
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Gift
