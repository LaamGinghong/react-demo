import React from 'react';

export function loading(Component) {
    return class extends React.Component {
        render() {
            return this.props.data ? <Component {...this.props}/> : <div>加载中...</div>
        }
    }
}
