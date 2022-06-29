import React from 'react';

const Text = ({msg, color}) => {
    return (
        <div style={{color: color}}>{msg}</div>
    )
}

Text.defaultProps = {
    msg: 'No message provided',
    color: 'red'
}

export default Text;