import * as React from 'react';

const contentStyle = {
    margin: 0,
    textAlign: 'center'
}

export default (props: any) =>
    <p style={contentStyle}>&copy; {(new Date()).getFullYear()} Zelda Hessler</p>