import * as React from "react";

class LifeCircle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: 'constructor'
        };
        console.log(this.state.msg);
    }

    componentDidMount() {
        this.setState({msg: 'componentDidMount'});
        setTimeout(() => {
            console.log(this.state.msg);
        })
    }

    componentWillUnmount() {
        this.setState({msg: 'componentWillUnmount'});
        setTimeout(() => {
            console.log(this.state.msg);
        });
    }

    render() {
        return <p>当前的生命周期:{this.state.msg}</p>
    }
}

export default LifeCircle;
