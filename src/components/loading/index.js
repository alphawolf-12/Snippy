import React from 'react';
import './styles.css';

function Loading() {
    return (
        <div style={{position: 'absolute', top:'50%', left: '50%'}}>
            <div className='spinner'/>
        </div>
    )
}

export default Loading;
