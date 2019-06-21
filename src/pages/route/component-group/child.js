import React from 'react';
import './child.css';

function Child(props) {
    return (
        <p className={props.className}>
            {props.children}
        </p>
    )
}

export default Child;
