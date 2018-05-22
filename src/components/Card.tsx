import * as React from 'react'

const cardStyle = {
    boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)',
    padding: '1rem',
    border: '1px solid #e8e8e8',
    borderRadius: '2px',
}

export default (props: any) =>
    <div style={Object.assign(cardStyle, props.style)}>
        {props.children}
    </div>
