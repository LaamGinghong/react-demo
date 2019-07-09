import React from "react";
import ObservableDecorateView from "./observable-decorate-view";
import {ObservableDecorateDemo} from "./observable-decorate-demo";

const observableDecorateDemo = new ObservableDecorateDemo();

function ObservableDecorateIndex() {
    return (
        <div>
            <ObservableDecorateView observableDecorateDemo={observableDecorateDemo}/>
        </div>
    )
}

export default ObservableDecorateIndex;
