import React, {Suspense} from "react";
import {Button} from "antd";
import {Redirect, Route, Switch} from "react-router-dom";

class ObservableRelated extends React.Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {url: '/mobx/observable-related/observable', name: 'observable'}
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
                        <Route exact path='/mobx'
                               render={() => ((<Redirect to='/mobx/observable-related/observable'/>))}/>
                    </Switch>
                </Suspense>
            </div>
        )
    }
}

export default ObservableRelated;
