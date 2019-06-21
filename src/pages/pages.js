import React from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Button from './button';

const calculator = React.lazy(() => import('./route/common-state/calculator'));

function Pages() {
    return (
        <div>
            <BrowserRouter>
                <Button/>
                <React.Suspense fallback={<div>加载中...</div>}>
                    <Switch>
                        <Route exact path='/' render={() => ((<Redirect to='/common-state'/>))}/>
                        <Route path='/common-state' component={calculator}/>
                    </Switch>
                </React.Suspense>
            </BrowserRouter>
        </div>
    )
}

export default Pages;
