import React from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import ButtonGroup from './button-group';

const calculator = React.lazy(() => import('./route/common-state/calculator'));
const componentGroup = React.lazy(() => import('./route/component-group/parent'));
const context = React.lazy(() => import('./route/context/context'));

function Pages() {
    return (
        <div>
            <BrowserRouter>
                <ButtonGroup/>
                <React.Suspense fallback={<div>加载中...</div>}>
                    <Switch>
                        <Route exact path='/' render={() => ((<Redirect to='/common-state'/>))}/>
                        <Route path='/common-state' component={calculator}/>
                        <Route path='/component-group' component={componentGroup}/>
                        <Route path='/context' component={context}/>
                    </Switch>
                </React.Suspense>
            </BrowserRouter>
        </div>
    )
}

export default Pages;
