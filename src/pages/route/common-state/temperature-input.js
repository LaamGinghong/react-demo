import React from 'react';
import {Input} from "antd";

const scaleNames = {
    c: '摄氏温度',
    f: '华氏温度'
};

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        // this.state = {temperature: ''};
    }

    handleChange(e) {
        // this.setState({temperature: e.target.value});
        this.props.onTemperatureChange(e.target.value)
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>请输入水的{scaleNames[scale]}:</legend>
                <Input
                    value={temperature}
                    onChange={this.handleChange}/>
            </fieldset>
        );
    }
}

export default TemperatureInput;
