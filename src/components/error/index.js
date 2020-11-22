import React from 'react'

function Error(props) {
    return (
        <div style={{position: 'absolute', top:'50%', left:'40%'}}>
            {'!!!!' + props.msg + '!!!!' }
        </div>
    )
}

export default Error;
