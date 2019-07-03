import React from 'react';
import {Button} from "antd";

function EffectHook() {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        document.title = `你点击了${count}次`;
    });


    return (
        <div>
            <p>你点击了{count}次</p>
            <Button onClick={() => setCount(count + 1)}>按钮</Button>
            <ul>
                <li>React.useEffect()相当于 componentDidMount 和 componentDidUpdate,</li>
                <li>当组件触发 setState 事件的时候，会自动触发该方法</li>
            </ul>
        </div>
    )
}

export default EffectHook;
