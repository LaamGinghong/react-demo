import React, {lazy, Suspense} from "react";
import {Button} from "antd";
import {Redirect, Route, Switch} from "react-router-dom";

const observableIndex = lazy(() => import('./observable'));
const observableDecorateIndex = lazy(() => import('./@observable'));

class ObservableRelated extends React.Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {url: '/mobx/observable-related/observable', name: 'observable'},
            {url: '/mobx/observable-related/observable-decorate', name: '@observable'}
        ];
    }

    routeJump(url) {
        this.props.history.push(url);
    }

    render() {
        const buttons = this.buttons.map((item, index) => (
            <Button key={index} type='dashed' onClick={() => this.routeJump(item.url)}>{item.name}</Button>
        ));
        return (
            <div>
                {buttons}
                <Suspense fallback={<div>加载中...</div>}>
                    <Switch>
                        <Route exact path='/mobx/observable-related'
                               render={() => ((<Redirect to='/mobx/observable-related/observable'/>))}/>
                        <Route path='/mobx/observable-related/observable' component={observableIndex}/>
                        <Route path='/mobx/observable-related/observable-decorate'
                               component={observableDecorateIndex}/>
                    </Switch>
                </Suspense>
            </div>
        )
    }
}

export default ObservableRelated;
