import React from "react";
import Input from 'antd/es/input';
import 'antd/es/input/style/css';
import Button from "antd/es/button";
import 'antd/es/button/style/css';

class RefDemo extends React.Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
        this.getRef = this.getRef.bind(this);
    }

    getRef() {
        this.input.current.focus();
    }

    render() {
        return (
            <div>
                <Button onClick={this.getRef}>获取ref</Button>
                <Input placeholder='请输入' ref={this.input}/>
            </div>
        )
    }
}

export default RefDemo;
//就是ng里面的ViewElementRef
