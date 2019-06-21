import {ThemeContext} from "./theme-context";
import React from 'react';

function ThemeToggleButton() {
    return (
        <ThemeContext.Consumer>
            {({theme, toggleTheme}) => (
                <button onClick={toggleTheme} style={{backgroundColor: theme.background}}>
                    变更主题
                </button>
            )}
        </ThemeContext.Consumer>
    );
}

export default ThemeToggleButton;
