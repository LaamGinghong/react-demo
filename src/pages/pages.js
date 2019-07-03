import React from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import ButtonGroup from './button-group';

const calculator = React.lazy(() => import('./route/common-state/calculator'));
const componentGroup = React.lazy(() => import('./route/component-group/parent'));
const context = React.lazy(() => import('./route/context/context'));
const refDemo = React.lazy(() => import('./route/ref&dom/ref&demo'));
const fragments = React.lazy(() => import('./route/fragments/fragments'));
const hoc = React.lazy(() => import('./route/hoc/hoc'));
const portal = React.lazy(() => import('./route/portal/portal'));
const defaultProps = React.lazy(() => import('./route/default-props/default-props'));
const renderProps = React.lazy(() => import('./route/render-props/tracker'));
const fileInput = React.lazy(() => import('./route/file-input/file-input'));
const apiReference = React.lazy(() => import('./route/api-reference/api-reference'));
const hook = React.lazy(() => import('./route/hook/hook'));
const mobx = React.lazy(() => import('./route/mobx/mobx'));

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
                        <Route path='/ref&demo' component={refDemo}/>
                        <Route path='/fragments' component={fragments}/>
                        <Route path='/hoc' component={hoc}/>
                        <Route path='/portal' component={portal}/>
                        <Route path='/default-props' component={defaultProps}/>
                        <Route path='/render-props' component={renderProps}/>
                        <Route path='/file-input' component={fileInput}/>
                        <Route path='/api-reference' component={apiReference}/>
                        <Route path='/hook' component={hook}/>
                        <Route path='/mobx' component={mobx}/>
                    </Switch>
                </React.Suspense>
            </BrowserRouter>
        </div>
    )
}

export default Pages;
