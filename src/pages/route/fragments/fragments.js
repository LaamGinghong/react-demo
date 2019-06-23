import React from "react";

function Fragments() {//标准写法
    return (
        <React.Fragment>
            相当于ng中的ng-container或者ng-template
            <Child>123</Child>
            <Child>456</Child>
            <Child>789</Child>
        </React.Fragment>
    )
}

/*function Fragments() { //短语法
    return(
        <>
            相当于ng中的ng-container或者ng-template
            <Child>123</Child>
            <Child>456</Child>
            <Child>789</Child>
        </>
    )
}*/

function Child(props) {
    return(
        <p>{props.children}</p>
    )
}

export default Fragments;
