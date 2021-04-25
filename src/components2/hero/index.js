import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import Particles from 'react-particles-js'
import heart from '../../images/hero/icon.png'
import './style.css'

const PreviewHero = () => {
  const intl = useIntl()
  return (
    <div className="previewHeroArea item1" id="home">
      <div className="container">
        <div className="slide-content">
          <div className="slide-subtitle">
            <h4>{intl.formatMessage({ id: 'getting_married' })}</h4>
          </div>
          <div className="slide-title">
            <h2>{intl.formatMessage({ id: 'save_the_date' })}</h2>
          </div>
          <div className="slide-text">
            <p>{intl.formatMessage({ id: '20210712' })}</p>
          </div>
        </div>
      </div>

      <Particles
        className="particaleWrapper"
        params={{
          particles: {
            number: {
              value: 8,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              speed: 1.5,
              out_mode: 'in',
            },
            shape: {
              type: ['images', 'circle'],
              images: [
                {
                  src: `${heart}`,
                  height: 13,
                  width: 15,
                },
                {
                  src: `${heart}`,
                  height: 20,
                  width: 20,
                },
                {
                  src: `${heart}`,
                  height: 2,
                  width: 46,
                },
                {
                  src: `${heart}`,
                  height: 29,
                  width: 33,
                },
                {
                  src: `${heart}`,
                  height: 10,
                  width: 12,
                },
                {
                  src: `${heart}`,
                  height: 21,
                  width: 22,
                },
                {
                  src: `${heart}`,
                  height: 21,
                  width: 22,
                },
                {
                  src: `${heart}`,
                  height: 5,
                  width: 7,
                },
                {
                  src: `${heart}`,
                  height: 13,
                  width: 15,
                },
                {
                  src: `${heart}`,
                  height: 20,
                  width: 20,
                },
                {
                  src: `${heart}`,
                  height: 2,
                  width: 46,
                },
                {
                  src: `${heart}`,
                  height: 29,
                  width: 33,
                },
                {
                  src: `${heart}`,
                  height: 10,
                  width: 12,
                },
                {
                  src: `${heart}`,
                  height: 21,
                  width: 22,
                },
                {
                  src: `${heart}`,
                  height: 21,
                  width: 22,
                },
                {
                  src: `${heart}`,
                  height: 5,
                  width: 7,
                },
              ],
            },
            color: {
              value: '#85aaba',
            },
            size: {
              value: 20,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 10,
                sync: true,
              },
            },
          },
          opacity: {
            value: 0.4008530152163807,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          interactivity: {
            detect_on: 'window',
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
              onclick: {
                enable: false,
                mode: 'bubble',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: false,
        }}
      />
    </div>
  )
}
export default PreviewHero
