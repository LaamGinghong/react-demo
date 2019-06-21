import {ThemeContext} from "./theme-context";
import React from 'react';

function ThemeToggleButton() {
    return (
        <ThemeContext.Consumer>
            {(theme, toggleTheme) => (
                <button onClick={toggleTheme} style={{background: theme.background}}>变换主题</button>
            )}
        </ThemeContext.Consumer>
    )
}

export default ThemeToggleButton;
