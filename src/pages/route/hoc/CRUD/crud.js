import * as React from "react";
import {control} from "./control";

class Crud extends React.Component {

    render() {
        return(
            <React.Fragment>
                <p>可用于props参数的增删改查</p>
                <p>{this.props.message}</p>
            </React.Fragment>
        )
    }
}

export default control(Crud);
