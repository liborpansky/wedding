import React from 'react'
import { FormattedMessage } from 'gatsby-plugin-intl'
import couple from '../../images/couple/1_res.jpg'
import './style.css'

const Couple2 = () => {
  return (
    <div id="couple" className="couple-area section-padding pb-70">
      <div className="container">
        <div className="col-l2">
          <div className="section-title text-center">
            <h2>
              <FormattedMessage id="happy_couple" />
            </h2>
          </div>
        </div>

        <div className="couple-wrap">
          <div className="row">
            <div className="col-md-6 offset-md-3 couple-single">
              <div className="couple-wrap2">
                <div className="couple-img3">
                  <img src={couple} alt="" />
                </div>
                <div className="couple-text">
                  <div className="couple-content">
                    <h4>MARTINA Longo &amp; LIBOR Pansky</h4>
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

export default Couple2
