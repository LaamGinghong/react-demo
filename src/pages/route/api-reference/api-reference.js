import * as React from "react";
import {Button} from "antd";
import {Switch, Route, Redirect} from 'react-router-dom';

const cloneElement = React.lazy(() => import('./clone-element/clone-element'));
const isValidElement = React.lazy(() => import('./is-valid-element/is-valid-element'));
const createRef = React.lazy(() => import('./create-ref/create-ref'));

class ApiReference extends React.Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {url: '/api-reference/clone-element', name: 'cloneElement'},
            {url: '/api-reference/is-valid-element', name: 'isValidElement'},
            {url: '/api-reference/create-ref', name: 'createRef'}
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
                <div>
                    <Switch>
                        <Route exact path='/api-reference'
                               render={() => ((<Redirect to='/api-reference/clone-element'/>))}/>
                        <Route path='/api-reference/clone-element' component={cloneElement}/>
                        <Route path='/api-reference/is-valid-element' component={isValidElement}/>
                        <Route path='/api-reference/create-ref' component={createRef}/>
                    </Switch>
                </div>
            </>
        )
    }
}

export default ApiReference;
