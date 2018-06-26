import * as React from 'react'
import Link from 'gatsby-link'
import { get } from 'lodash'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import { BlogPreview } from '../components/BlogPreview'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div className="content-wrapper">
        <Helmet title={siteTitle} />
        <h3>Welcome!</h3>
        <Bio />
        <h3>Stuff I Wrote</h3>
        {posts.map(({ node }: any) => (
          <BlogPreview key={node.fields.slug} post={node} />
        ))}
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
