import React, { Component } from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import SectionTitle from '../section-title'
import './style.css'
import step1 from '../../images/gal/step1.png'
import step2 from '../../images/gal/step2.jpg'
import step3 from '../../images/gal/step3.png'
import trombetta from '../../images/gal/trombetta.png'
import googlePlay from '../../images/gal/googleplay.png'
import appleStore from '../../images/gal/appstore.png'

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
                <img src={step1} alt="" className="step-image" />
              </div>
              <p className="pt-4">
                <b>Installa l&apos;applicazione</b>
              </p>
              <p>
                Scarica l&apos;applicazione di WedShoots dal sito
                www.wedshoots.com/it, da Google Play o dall&apos;App Store.
              </p>

              <div className="row pt-4">
                <div className="col-6 col-sm-4 offset-sm-1 col-md-6 offset-md-0">
                  <a
                    rel="noreferrer"
                    className="wedshoots-steps-button apple"
                    href="https://app.appsflyer.com/id660256196?pid=WP-iOS-IT&amp;c=WP-IT-LANDINGS&amp;s=it"
                    target="_blank"
                  >
                    <img src={appleStore} loading="lazy" />
                  </a>
                </div>
                <div className="col-6 col-sm-4 offset-sm-1 col-md-6 offset-md-0">
                  <a
                    rel="noreferrer"
                    href="https://play.google.com/store/apps/details?id=net.bodas.android.wedshoots&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                    target="_blank"
                  >
                    <img src={googlePlay} loading="lazy" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div>
                <img src={step2} alt="" className="step-image" />
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
                <img src={step3} alt="" className="step-image" />
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
