import * as React from 'react'

class StyleGuide extends React.Component {
  render() {
    return (
      <div>
        <h1>Header 1</h1>
        <h2>Header 2</h2>
        <h3>Header 3</h3>
        <h4>Header 4</h4>
        <h5>Header 5</h5>
        <h6>Header 6</h6>

        <p>
          This is body text. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
          ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
          Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia
          nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque
          sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut
          ligula vel nunc egestas porttitor.
        </p>

        <p>This is an <a href="/">anchor tag</a> set in a paragraph.</p>
      </div>
    )
  }
}

export default StyleGuide
