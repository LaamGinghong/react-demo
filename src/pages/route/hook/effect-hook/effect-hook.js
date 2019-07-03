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
                <li>当组件触发 setState 事件的时候，会自动触发该方法，</li>
                <li>这里可以返回一个方法，当组件卸载的时候，会执行这个方法，</li>
                <li>userEffect 包含第二个参数，通知 React 当这个 state 变化的时候才触发 useEffect</li>
            </ul>
        </div>
    )
}

export default EffectHook;
