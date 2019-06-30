import * as React from "react";
import {Button} from "antd";
import {Switch, Route, Redirect} from 'react-router-dom';

const cloneElement = React.lazy(() => import('./clone-element/clone-element'));

class ApiReference extends React.Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {url: '/clone-element', name: 'cloneElement'}
        ]
    }

    render() {
        const buttons = this.buttons.map((item, index) => {
            return (
                <Button key={index} type='link'>{item.name}</Button>
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
                    </Switch>
                </div>
            </>
        )
    }
}

export default ApiReference;
