import * as React from "react";
import {observer} from "mobx-react";
import {Button} from "antd";

@observer
class TimerView extends React.Component {
    constructor(props) {
        super(props);
        this.onReset = this.onReset.bind(this);
    }

    render() {
        return (
            <div>
                <Button onClick={this.onReset}>重置</Button>
                <p>{this.props.appState.timer}秒过去了</p>
            </div>
        );
    }

    onReset() {
        this.props.appState.resetTimer();
    }
}

export default TimerView;
