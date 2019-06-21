import React from "react";

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>水已经烧开</p>;
    }
    return <p>水还未烧开</p>
}

export default BoilingVerdict;
