import React from 'react';
import ObservableView from "./observable-view";
import * as props from "./observable-demo";

function observableIndex() {
    return (
        <div>
            <ObservableView {...props}/>
        </div>
    )
}

export default observableIndex;
