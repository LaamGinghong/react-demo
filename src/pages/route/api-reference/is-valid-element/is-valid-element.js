import * as React from "react";
import {Button, Select} from "antd";

const {Option} = Select;

class IsValidElement extends React.Component {
    constructor(props) {
        super(props);
        this.element = [
            {name: 'IsValidElement', value: 1},
            {name: 'Button', value: 2},
            {name: 'p', value: 3}
        ];
        this.state = {
            value: 1
        };
        this.judgeIsValidElement = this.judgeIsValidElement.bind(this);
    }

    judgeIsValidElement(e) {
        this.setState({
            value: e
        });
        let value;
        switch (e) {
            case 1:
                value = IsValidElement;
                break;
            case 2:
                value = <Button/>;
                break;
            default:
                value = <p/>;
        }
        alert(`这${React.isValidElement(value) ? '是' : '不是'}一个React元素`);
    }

    render() {
        return (
            <div>
                <Select style={{width: 300}} value={this.state.value} onChange={this.judgeIsValidElement}>
                    {this.element.map((item, index) => {
                        return (
                            <Option value={item.value} key={index}>{item.name}</Option>
                        )
                    })}
                </Select>
            </div>
        );
    }
}

export default IsValidElement;
