import React, {Component} from 'react';
import {Button} from "antd";

class Mobx extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {url: '', name: '123123'}
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
            </>
        );
    }
}

export default Mobx;
