import * as React from "react";
import {Modal} from "antd";

export function routeGuard(Component) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                jurisdiction: localStorage.getItem('jurisdiction')
            };
            this.login = this.login.bind(this);
        }

        login() {
            this.props.history.goBack();
        }

        render() {
            return (
                this.state.jurisdiction ? <Component/> :
                    <Modal
                        visible
                        title='登录校验'
                        footer={null}
                        onCancel={this.login}
                    >
                        您还未登录，请登录后重试！
                    </Modal>
            )
        }
    };
}
