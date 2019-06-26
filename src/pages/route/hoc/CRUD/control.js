import * as React from "react";

export function control(Component) {
    return class extends React.Component {
        render() {
            const props = {
                ...this.props,
                message: 'Hello world!'
            };
            return <Component {...props}/>
        }
    }
}
