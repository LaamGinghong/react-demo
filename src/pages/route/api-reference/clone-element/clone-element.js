import * as React from "react";
import {Button} from "antd";

class CloneElement extends React.Component {
    render() {
        return (
            <>
                <Button>按钮</Button>
                {React.cloneElement(<Button>按钮</Button>)}
            </>
        )
    }
}

export default CloneElement;
