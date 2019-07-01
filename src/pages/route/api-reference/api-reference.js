import * as React from "react";
import {Button} from "antd";
import {Switch, Route, Redirect} from 'react-router-dom';

const cloneElement = React.lazy(() => import('./clone-element/clone-element'));
const isValidElement = React.lazy(() => import('./is-valid-element/is-valid-element'));
const createRef = React.lazy(() => import('./create-ref/create-ref'));
const forwardRef = React.lazy(() => import('./forward-ref/forward-ref'));
const lazyLoad = React.lazy(() => import('./lazy-load/parent'));

class ApiReference extends React.Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {url: '/api-reference/clone-element', name: 'cloneElement'},
            {url: '/api-reference/is-valid-element', name: 'isValidElement'},
            {url: '/api-reference/create-ref', name: 'createRef'},
            {url: '/api-reference/forward-ref', name: 'forwardRef'},
            {url: '/api-reference/lazy-load', name: 'lazyLoad'}
        ]
    }

    routeJump(e) {
        this.props.history.push(e);
    }

    render() {
        const buttons = this.buttons.map((item, index) => {
            return (
                <Button
                    key={index}
                    onClick={() => this.routeJump(item.url)}
                    type='link'
                >{item.name}</Button>
            )
        });
        return (
            <>
                <p>{buttons}</p>
                <React.Suspense fallback={<div>加载中...</div>}>
                    <Switch>
                        <Route exact path='/api-reference'
                               render={() => ((<Redirect to='/api-reference/clone-element'/>))}/>
                        <Route path='/api-reference/clone-element' component={cloneElement}/>
                        <Route path='/api-reference/is-valid-element' component={isValidElement}/>
                        <Route path='/api-reference/create-ref' component={createRef}/>
                        <Route path='/api-reference/forward-ref' component={forwardRef}/>
                        <Route path='/api-reference/lazy-load' component={lazyLoad}/>
                    </Switch>
                </React.Suspense>
            </>
        )
    }
}

export default ApiReference;
