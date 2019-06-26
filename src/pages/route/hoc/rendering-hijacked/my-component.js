import * as React from "react";
import {loading} from "./loading";

class MyComponent extends React.Component {
    render() {
        return <p>{this.props.data}</p>
    }
}

export default loading(MyComponent);
