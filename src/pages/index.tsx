import * as React from 'react'
import Link from 'gatsby-link'
import { get } from 'lodash'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import { BlogPreview } from '../components/BlogPreview'
import Card from '../components/Card';

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
        <Card style={{marginBottom: '1rem', background: 'white'}}>
          <h3 style={{marginBottom: '1rem'}}>Welcome!</h3>
          <Bio />
        </Card>
        {posts.map(({ node }: any) =>
          <Card key={node.fields.slug} style={{
            marginBottom: '1rem'
          }}>
            <BlogPreview post={node}/>
          </Card>
        )}
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
