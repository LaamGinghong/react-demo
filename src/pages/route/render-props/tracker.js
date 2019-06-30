import * as React from "react";
import Mouse from "./mouse";
import Canvas from "./canvas";

class Tracker extends React.Component {
    render() {
        return (
            <div style={{height: '100%'}}>
                <h1>鼠标位置追踪器！</h1>
                <Mouse render={mouse => (
                    <Canvas mouse={mouse}/>
                )}/>
            </div>
        )
    }
}

export default Tracker;
