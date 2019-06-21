import React from "react";
import {ThemeContext} from "./theme-context";

class Message extends React.Component {
    render() {
        const props = this.props;
        const theme = this.context;
        return(
            <button {...props} style={{backgroundColor:theme.background}}/>
        )
    }
}

Message.contextType = ThemeContext;
export default Message;
