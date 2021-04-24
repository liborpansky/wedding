import React, { Component } from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import SectionTitle from '../section-title'
import './style.css'
import step1 from '../../images/gal/step1.png'
import step2 from '../../images/gal/step2.jpg'
import step3 from '../../images/gal/step3.png'
import trombetta from '../../images/gal/trombetta.png'

class Gallery extends Component {
  render() {
    const { intl } = this.props
    return (
      <div id="gallery" className="Gallery-section section-padding pb-70">
        <SectionTitle section={intl.formatMessage({ id: 'our_gallery' })} />
        <div className="container text-center">
          <div className="row text-center">
            <div className="col col-xs-12">
              <h6>
                Vuoi partecipare alla raccolta delle foto del nostro grande
                giorno?
              </h6>
            </div>
          </div>

          <div className="row pt-5">
            <div className="col-xs-12 col-lg-4">
              <div>
                <img src={step1} alt="" className="step-immage" />
              </div>
              <p className="pt-4">
                <b>Installa l&apos;applicazione</b>
              </p>
              <p>
                Scarica l&apos;applicazione di WedShoots dal sito
                www.wedshoots.com/it, da Google Play o dall&apos;App Store.
              </p>

              <div className="row pt-4">
                <div className="col-xs-12 col-md-6">
                  <a
                    rel="noreferrer"
                    className="wedshoots-steps-button apple"
                    href="https://app.appsflyer.com/id660256196?pid=WP-iOS-IT&amp;c=WP-IT-LANDINGS&amp;s=it"
                    target="_blank"
                  >
                    <img
                      src="https://cdn1.matrimonio.com/assets/img/footer/appstore.png"
                      srcSet="https://cdn1.matrimonio.com/assets/img/footer/appstore@2x.png 2x"
                      loading="lazy"
                    />
                  </a>
                </div>
                <div className="col-xs-12 col-md-6">
                  <a
                    rel="noreferrer"
                    className="wedshoots-steps-button android"
                    href="https://app.appsflyer.com/net.bodas.android.wedshoots?pid=WP-Android-IT&amp;c=WP-IT-LANDINGS"
                    target="_blank"
                  >
                    <img
                      src="https://cdn1.matrimonio.com/assets/img/footer/googleplay.png"
                      srcSet="https://cdn1.matrimonio.com/assets/img/footer/googleplay@2x.png 2x"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-lg-4">
              <div>
                <img src={step2} alt="" className="step-immage" />
              </div>
              <p className="pt-4">
                <b>Accedi all&apos;album</b>
              </p>
              <p>
                Apri Wedshoots dal tuo smartphone, inserisci il tuo nome e il
                codice dell&apos;album o scannerizza il codice QR.
              </p>
              <p>Codice dell&apos;album:</p>
              <p>
                <b>ITcefc67a3</b>
              </p>
            </div>

            <div className="col-xs-12 col-lg-4">
              <div>
                <img src={step3} alt="" className="step-immage" />
              </div>
              <p className="pt-4">
                <b>Divertiti</b>
              </p>
              <p>
                Il giorno del matrimonio divertiti, scatta tantissime foto e
                caricale sull&apos;album condiviso!
              </p>
              <img src={trombetta} alt="" className="gallery-icon" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default injectIntl(Gallery)
