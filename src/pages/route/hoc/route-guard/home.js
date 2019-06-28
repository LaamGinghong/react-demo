import * as React from "react";
import {notification} from "antd";
import {routeGuard} from "./route-guard";

class Home extends React.Component {
    componentWillMount() {
        notification.success({
            message: '登录',
            description: '成功！'
        });
    }

    render() {
        return 123;
    }
}

export default routeGuard(Home);
