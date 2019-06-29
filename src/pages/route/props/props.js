import * as React from "react";

class Props extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: props.name}
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                name: 'Tom'
            });
        }, 5000);
    }

    render() {
        return (
            <React.Fragment>
                <p>默认参数：{'{'}name:Jack{'}'},5秒后改为Tom</p>
                <p>My name is {this.state.name}</p>
            </React.Fragment>
        )
    }
}

Props.defaultProps = {
    name: 'Jack'
};

export default Props;
