import * as React from "react";
import {control} from "./control";

class Crud extends React.Component {

    render() {
        return <p>{this.props.message}</p>
    }
}

export default control(Crud);
