import * as React from 'react'

const NotFoundPage = () => (
  <div className="card">
    <h1>404 - NOT FOUND</h1>
    <p
      style={{
        fontSize: '150%',
        lineHeight: '1.4',
        marginBottom: '2.0rem',
        fontStyle: 'italic',
      }}
    >
      The memory throws up high and dry<br />
      A crowd of twisted things;<br />
      A twisted branch upon the beach<br />
      Eaten smooth, and polished<br />
      As if the world gave up<br />
      The secret of its skeleton,<br />
      Stiff and white.<br />
      A broken spring in a factory yard,<br />
      Rust that clings to the form that the strength has left<br />
      Hard and curled and ready to snap.<br />
    </p>
    <p
      style={{
        fontSize: '150%',
        textAlign: 'right',
        paddingRight: '3rem',
        fontWeight: 'bold',
      }}
    >
      <a
        style={{ color: 'rgba(0, 0, 0, 0.87)' }}
        href="https://www.poets.org/poetsorg/poem/rhapsody-windy-night"
      >
        T. S. Eliot
      </a>
    </p>
  </div>
)

export default NotFoundPage
