import React, { useEffect } from 'react'
import Navbar from '../../components2/Navbar'
import { siteMetadata } from '../../../gatsby-config'
import Footer from '../../components2/footer'
import Scrollbar from '../../components2/scrollbar'

import './layout.css'

// import './index.css'
import '../../css/font-awesome.min.css'
import '../../css/flaticon.css'
import '../../css/responsive.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

interface Props {
  children?: React.ReactNode
  location: Location
}

const Layout: React.FC<Props> = ({ children, location }: Props) => {
  return (
    <div>
      <Navbar title={siteMetadata.title} location={location} />
      {children}
      {/* <Footer title={siteMetadata.title} author={siteMetadata.author} /> */}
      <Footer />
      <Scrollbar />
    </div>
  )
}

export default Layout
