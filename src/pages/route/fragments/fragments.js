import React from "react";

function Fragments() {
    return (
        <React.Fragment>
            相当于ng中的ng-container或者ng-template
            <Child>123</Child>
            <Child>456</Child>
            <Child>789</Child>
        </React.Fragment>
    )
}

function Child(props) {
    return(
        <p>{props.children}</p>
    )
}

export default Fragments;
