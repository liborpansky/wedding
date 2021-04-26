import React from 'react'
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl'
import itFlag from '../../images/flags/it.png'
import czFlag from '../../images/flags/cz.png'
import './style.css'

const languageName = {
  it: 'Italiano',
  cz: 'Česky',
}

const Language = () => {
  return (
    <div>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages
            .filter((x) => x !== currentLocale)
            .map((language) => (
              <a
                key={language}
                onClick={() => changeLocale(language)}
                style={{
                  margin: 10,
                  textDecoration: `underline`,
                  cursor: `pointer`,
                }}
              >
                <img
                  className="flag"
                  src={currentLocale === 'it' ? czFlag : itFlag}
                  alt="Cambia lingua"
                />
                {/* {languageName[language]} */}
              </a>
            ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Language
