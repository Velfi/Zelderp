import * as React from 'react'
import Link from 'gatsby-link'

import { get } from 'lodash'

interface BlogPreviewProps {
  post: any
}

export class BlogPreview extends React.Component<BlogPreviewProps> {
  constructor(props: BlogPreviewProps) {
    super(props)
  }

  render() {
    const title =
      get(this.props.post, 'frontmatter.title') || this.props.post.fields.slug
    return (
      <div>
        <h4>
          <Link to={this.props.post.fields.slug}>
            {title}
          </Link>
        </h4>
        {/* <small>{this.props.post.frontmatter.date}</small> */}
        <p dangerouslySetInnerHTML={{ __html: this.props.post.excerpt }} />
      </div>
    )
  }
}

export default BlogPreview
