import React from 'react';
import {withRouter} from 'react-router-dom';

class Button extends React.Component {

    routeJump(route) {
        this.props.history.push(route);
    }

    render() {
        return (
            <div>
                <button onClick={() => this.routeJump('/common-state')}>变量提升</button>
                <button onClick={() => this.routeJump('/component-group')}>组件组合</button>
                <button onClick={() => this.routeJump('/context/provider')}>context provider</button>
                <button onClick={() => this.routeJump('/context/consumer')}>context consumer</button>
            </div>
        )
    }
}

export default withRouter(Button);
