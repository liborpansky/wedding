import React, { Component } from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import SectionTitle from '../section-title'
import './style.css'

class Gallery extends Component {
  render() {
    const { intl } = this.props
    return (
      <div id="gallery" className="Gallery-section section-padding pb-70">
        <SectionTitle section={intl.formatMessage({ id: 'our_gallery' })} />
        <div className="container">
          <div className="row">
            Qui troverete le foto del nostro giorno e del nostro viaggio di
            nozze! Se vuoi contribuire alla raccolta di meravigliosi ricordi
            scarica l'App WedShoots, accedi all'album condiviso inserendo il
            codice 0000000666 e il giorno del matrimonio divertiti a scattare e
            caricare tantissime foto!
          </div>
        </div>
      </div>
    )
  }
}

export default injectIntl(Gallery)
