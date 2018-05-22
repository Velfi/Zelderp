import * as React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Footer from '../components/Footer'

import 'prismjs/themes/prism.css'
import './index.css'
import * as theme from '../utils/theme.json'

const BlogTitle = 'Lizard Squeal'

const siteWrapperStyle = {
  background: theme.site.background,
  minWidth: '100%',
  minHeight: '100%',
  display: 'flex',
  flexFlow: 'column',
}

const [headerWrapperStyle, mainWrapperStyle, footerWrapperStyle] = Array(3).fill({
  maxWidth: '48rem',
  margin: '0.25rem auto 0',
  padding: '0 0.5rem',
  width: '100%',
})

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      header = (
        <h1 className="header--home">
          <Link
            to={'/'}
          >
            {BlogTitle}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            marginBottom: '0.5rem',
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {BlogTitle}
          </Link>
        </h3>
      )
    }
    return (
      <div style={siteWrapperStyle}>
        <header style={headerWrapperStyle}>
          <Card style={{background: theme.content.background}}>{header}</Card>
        </header>
        <main style={mainWrapperStyle}>
          {children()}
        </main>
        <footer style={footerWrapperStyle}>
          <Card>
            <Footer />
          </Card>
        </footer>
      </div>
    )
  }
}

export default Template
