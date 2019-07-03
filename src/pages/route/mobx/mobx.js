import React, {Component, lazy, Suspense} from 'react';
import {Button} from "antd";
import {Switch, Route, Redirect} from 'react-router-dom';

const begin = lazy(() => import('./begin/begin'));

class Mobx extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {url: '/mobx/begin', name: '起始'}
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
                <Suspense fallback={<div>加载中...</div>}>
                    <Switch>
                        <Route exact path='/mobx'
                               render={() => ((<Redirect to='/mobx/begin'/>))}/>
                        <Route path='/mobx/begin' component={begin}/>
                    </Switch>
                </Suspense>
            </>
        );
    }
}

export default Mobx;
