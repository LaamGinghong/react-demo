import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";

const crud = React.lazy(() => import('./CRUD/crud'));
const renderingHijacked = React.lazy(() => import('./rendering-hijacked/rendering-hijacked'));
const routeGuard = React.lazy(() => import('./route-guard/home'));

function hoc() {
    return (
        <React.Suspense fallback={<div>加载中...</div>}>
            <Switch>
                <Route exact path='/hoc' render={() => ((<Redirect to='/hoc/crud'/>))}/>
                <Route path='/hoc/crud' component={crud}/>
                <Route path='/hoc/rendering-hijacked' component={renderingHijacked}/>
                <Route path='/hoc/route-guard' component={routeGuard}/>
            </Switch>
        </React.Suspense>
    )
}

export default hoc;
