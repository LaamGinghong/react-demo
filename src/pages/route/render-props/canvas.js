import * as React from "react";

class Canvas extends React.Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <div style={{
                width: '100px',
                height: '100px',
                position: 'absolute',
                left: mouse.x,
                top: mouse.y,
                background: 'pink'
            }}/>
        )

    }
}

export default Canvas;
