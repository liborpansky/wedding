import { graphql } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import React from 'react'

import { WeddingPageQueryQuery } from '../../types/graphql-types'
import { siteMetadata } from '../../gatsby-config'
// import Layout from '../components/layout/layout'
import Meta from '../components/meta/meta'

import Layout from '../components2/layout/layout'
import Couple2 from '../components2/couple2'
import PreviewHero from '../components2/hero'
import Story from '../components2/story'
import Welcome from '../components2/welcome-area'
import People from '../components2/people'
import Location from '../components2/location'
import Gallery from '../components2/gallery'
import Rsvp from '../components2/rsvp'
import Gift from '../components2/gift'
import Navbar from '../components2/Navbar'
import Saveday from '../components2/countdown'

interface Props {
  data: WeddingPageQueryQuery
  location: Location
}

const Wedding: React.FC<Props> = ({ location, data }: Props) => {
  const profile = data.profile?.childImageSharp?.fixed

  return (
    <Layout location={location}>
      <Navbar title={siteMetadata.title} location={location} />
      <PreviewHero />
      {/* <Saveday /> */}
      <Couple2 />
      <Welcome />
      <Story />
      <People />
      <Location />
      {/* <Gallery /> */}
      <Rsvp />
      <Gift />
    </Layout>
  )
}

export default Wedding

export const query = graphql`
  query WeddingPageQuery {
    profile: file(name: { eq: "profile" }) {
      childImageSharp {
        fixed(width: 120, height: 120) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`
