import MyComponent from "./my-component";
import React from "react";

class RenderingHijacked extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({data: 123});
        }, 5000);
    }

    render() {
        return (
            <div>
                <p>可用于渲染劫持，例如：Loading</p>
                <MyComponent data={this.state.data}/>
            </div>
        )
    }
}

export default RenderingHijacked;
