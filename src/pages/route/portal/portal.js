import React from "react";
import Parent from "./parent";

class Portal extends React.Component {
    constructor(props) {
        super(props);
        this.createModalNode()
    }

    createModalNode() {
        const div = document.createElement('div');
        div.setAttribute('id', 'modal-root');
        document.body.appendChild(div);
    }

    render() {
        return (
            <div>
                <div id="app-root"><Parent/></div>
            </div>
        );
    }
}

export default Portal;
