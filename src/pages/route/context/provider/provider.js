import React from "react";
import Message from "./message";
import {ThemeContext, themes} from "./theme-context";

function Pipe(props) {
    return (
        <Message onClick={props.changeTheme}>Button</Message>
    )
}

class Provider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light
        };
        this.toggleTheme = this.toggleTheme.bind(this);
    }

    toggleTheme() {
        this.setState(state => {
            return {
                theme: state.theme === themes.dark ? themes.light : themes.dark
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                在中间组件中调用父组件的方法和state控制子组件
                <ThemeContext.Provider value={this.state.theme}>
                    <Pipe changeTheme={this.toggleTheme}/>
                </ThemeContext.Provider>
            </React.Fragment>
        )
    }
}

export default Provider;
