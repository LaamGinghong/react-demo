import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";

const provider = React.lazy(() => import('./provider/provider'));
const consumer = React.lazy(() => import('./consumer/consumer'));

function Context() {
    return (
        <React.Suspense fallback={<div>加载中...</div>}>
            <Switch>
                <Route exact path='/context' render={() => ((<Redirect to='/context/provider'/>))}/>
                <Route path='/context/provider' component={provider}/>
                <Route path='/context/consumer' component={consumer}/>
            </Switch>
        </React.Suspense>
    )
}

export default Context;
