import * as React from 'react'

const lizardPic = require('../../static/lizard-squeal.png')

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          marginBottom: '0.5rem',
        }}
      >
        <img
          src={lizardPic}
          alt={`Zelda Hessler`}
          style={{
            border: '1px solid #e8e8e8',
            borderRadius: '5rem',
            float: 'right',
            height: 'auto',
            margin: 0,
            minWidth: '115px',
            width: '20%',
            maxWidth: '160px',
          }}
        />
        <p style={{ margin: 0, fontSize: '1.40rem' }}>
          I'm Zelda Hessler. I'm software developer at{' '}
          <a href="https://www.nerdery.com/">The Nerdery</a> in Chicago, IL.
          There's a link to my GitHub profile in the footer. Thanks to Ashley
          for the logo.
        </p>
      </div>
    )
  }
}

export default Bio
