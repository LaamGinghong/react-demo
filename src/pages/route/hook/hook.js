import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import {Button} from "antd";

const stateHook = React.lazy(() => import('./state-hook/state-hook'));
const effectHook = React.lazy(() => import('./effect-hook/effect-hook'));
const commonHook = React.lazy(() => import('./common-hook/common-hook'));

class Hook extends React.Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {url: '/hook/state-hook', name: 'State Hook'},
            {url: '/hook/effect-hook', name: 'Effect Hook'},
            {url: '/hook/common-hook', name: 'Common Hook'}
        ]
    }

    routeJump(url) {
        this.props.history.push(url);
    }

    render() {
        const buttons = this.buttons.map((item, index) => (
            <Button key={index} type='link' onClick={() => this.routeJump(item.url)}>{item.name}</Button>
        ));
        return (
            <>
                {buttons}
                <React.Suspense fallback={<div>加载中...</div>}>
                    <Switch>
                        <Route exact path='/hook'
                               render={() => ((<Redirect to='/hook/state-hook'/>))}/>
                        <Route path='/hook/state-hook' component={stateHook}/>
                        <Route path='/hook/effect-hook' component={effectHook}/>
                        <Route path='/hook/common-hook' component={commonHook}/>
                    </Switch>
                </React.Suspense>
            </>
        )
    }

}

export default Hook;
