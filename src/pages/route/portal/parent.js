import * as React from "react";
import Modal from "./modal";
import {Button} from "antd";

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clicks: 0};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // 事件会在点击 Child 组件的 Button 时触发，
        // 并且通过按钮更新 Parent 组件中的状态，
        // 尽管 Child 并不在 Parent 的子节点中
        this.setState(state => ({
            clicks: state.clicks + 1
        }))
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                生成出来的类似于ng的cdk中的overlay，不同之处在于生成的组件在行为逻辑上属于当前组件的子组件
                <p>点击次数：{this.state.clicks}</p>
                <Modal>
                    <Child/>
                </Modal>
            </div>
        )
    }
}

export default Parent;

function Child() {
    // 点击事件会通过按钮冒泡到 Parent 中，
    // 因为组件内没有 onClick 事件
    return <Button>点击</Button>
}
