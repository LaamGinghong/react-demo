import React, {Component} from 'react';
import {observer} from "mobx-react";
import {Button, Checkbox} from "antd";

const TodoView = observer(({todo}) =>
    <li>
        <Checkbox checked={todo.finished} onChange={() => todo.finished = !todo.finished}>{todo.title}</Checkbox>
    </li>
);

@observer
class TodoListView extends Component {
    todoList;
    constructor(props) {
        super(props);
        this.newItem = {
            finished: false,
            title: '打游戏',
            id: 2
        }
    }

    render() {
        return <div>
            <ul>
                {this.props.todoList.todos.map(item => <TodoView todo={item} key={item.id}/>)}
            </ul>
            Tasks left: {this.props.todoList.unfinishedTodoCount}
            <Button onClick={() => this.props.todoList.setItem(this.newItem)}>修改</Button>
        </div>
    }
}

export default TodoListView;
