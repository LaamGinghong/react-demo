import * as React from "react";
import {Button} from "antd";

class ForwardRef extends React.Component {
    constructor(props) {
        super(props);
        this.specialButtonRef = React.createRef();
    }

    render() {
        return (
            <div>
                <SpecialButton ref={this.specialButtonRef}/>
            </div>
        );
    }
}

const SpecialButton = React.forwardRef((props, ref) => {
    return (
        <Button ref={ref}>按钮</Button>
    )
});

export default ForwardRef;
