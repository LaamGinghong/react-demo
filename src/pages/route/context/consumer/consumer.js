import React from "react";
import {themes} from "../provider/theme-context";
import {ThemeContext} from "./theme-context";
import ThemeToggleButton from "./theme-toggle-button";

function Pipe() {
    return <ThemeToggleButton/>
}

class Consumer extends React.Component {
    constructor(props) {
        super(props);
        this.toggleTheme = this.toggleTheme.bind(this);
        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme
        };
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
                在子组件中调用父组件的方法和state控制子组件
                <ThemeContext.Provider value={this.state}>
                    <Pipe/>
                </ThemeContext.Provider>
            </React.Fragment>
        )
    }
}

export default Consumer;
