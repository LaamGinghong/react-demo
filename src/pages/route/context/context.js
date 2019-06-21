import React from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

const provider = React.lazy(() => import('./provider/provider'));

function Context() {
    return (
        <BrowserRouter>
            <React.Suspense fallback={<div>加载中...</div>}>
                <Switch>
                    <Route exact path='/context' render={() => ((<Redirect to='/context/provider'/>))}/>
                    <Route path='/context/provider' component={provider}/>
                </Switch>
            </React.Suspense>
        </BrowserRouter>
    )
}

export default Context;
