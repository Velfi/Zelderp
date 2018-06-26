import * as React from 'react'
import Link from 'gatsby-link'
import Footer from '../components/Footer'

import 'prismjs/themes/prism.css'
import './index.css'

const BlogTitle = 'Lizard Squeal'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let headerContent;

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      headerContent = (
        <h1 className="header--home">
          <Link to={'/'}>{BlogTitle}</Link>
        </h1>
      )
    } else {
      headerContent = (
        <h3>
          <Link to={'/'}>{BlogTitle}</Link>
        </h3>
      )
    }
    return (
      <div className="site-wrapper">
        <header>
            {headerContent}
        </header>
        <main>{children()}</main>
        <Footer />
      </div>
    )
  }
}

export default Template
