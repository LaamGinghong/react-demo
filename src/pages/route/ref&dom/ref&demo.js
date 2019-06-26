import React from "react";
import {Input, Button} from "antd";

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
                相当于ng中的@ViewElementRef
                <Button onClick={this.getRef}>获取ref</Button>
                <Input placeholder='请输入' ref={this.input}/>
            </div>
        )
    }
}

export default RefDemo;
