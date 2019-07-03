import React from 'react';
import {Button} from "antd";

function StateHook() {
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <p>你点击了{count}次。</p>
            <Button onClick={() => setCount(count + 1)}>按钮</Button>
            <ul>
                <li>React.userState()为一个长度为2的数组，</li>
                <li>第一个元素为当前的 state，</li>
                <li>第二个属性为修改 state 的方法，</li>
                <li>运用 es6 数组结构，可以自定义当前 state 以及 setState 方法的名字，</li>
                <li>一个组件内部可以有多个 React.useState()</li>
            </ul>
        </div>
    )
}

export default StateHook;
