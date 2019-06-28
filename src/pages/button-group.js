import React from 'react';
import {withRouter} from 'react-router-dom';
import {Button} from "antd";

class ButtonGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonLists: [
                {url: '/common-state', name: '变量提升', type: 'primary'},
                {url: '/component-group', name: '组件组合'},
                {url: '/context/provider', name: 'context provider'},
                {url: '/context/consumer', name: 'context consumer'},
                {url: '/ref&demo', name: 'ref and demo'},
                {url: '/fragments', name: 'fragments'},
                {url: '/hoc/crud', name: 'hoc CRUD'},
                {url: '/hoc/rendering-hijacked', name: 'hoc rendering hijacked'},
                {url: '/hoc/route-guard', name: 'hoc 路由守卫'}
            ]
        }
    }


    componentDidMount() {
        const pathname = this.props.location.pathname;
        this.setType(pathname);
        this.props.history.listen(route => {
            this.setType(route.pathname);
        })
    }

    setType(name) {
        this.setState(state => {
            return {
                buttonLists: state.buttonLists.map(item => ({
                    url: item.url,
                    name: item.name,
                    type: item.url === name ? 'primary' : ''
                }))
            }
        });
    }

    routeJump(route) {
        this.props.history.push(route);
    }


    render() {
        const buttons = this.state.buttonLists.map((item, index) => {
            return (
                <Button type={item.type} key={index} onClick={() => this.routeJump(item.url)}>{item.name}</Button>
            )
        });
        return (
            <div>
                {buttons}
            </div>
        )
    }
}

export default withRouter(ButtonGroup);

