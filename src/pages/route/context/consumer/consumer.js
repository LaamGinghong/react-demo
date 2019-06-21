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
            <ThemeContext.Provider value={this.state}>
                <Pipe/>
            </ThemeContext.Provider>
        )
    }
}

export default Consumer;
