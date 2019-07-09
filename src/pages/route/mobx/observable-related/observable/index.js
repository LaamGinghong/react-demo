import React from 'react';
import ObservableView from "./observable-view";
import {map} from "./observable-demo";

function observableIndex() {
    return (
        <div>
            <ObservableView map={map}/>
        </div>
    )
}

export default observableIndex;
