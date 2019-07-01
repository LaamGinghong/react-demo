import * as React from "react";
import {Input} from "antd";

class CreateRef extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }

    render() {
        return (
            <>
                <Input ref={this.inputRef}/>
            </>
        )
    }
}

export default CreateRef;
