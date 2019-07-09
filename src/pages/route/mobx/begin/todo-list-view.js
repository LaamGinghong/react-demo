import React, {Component} from 'react';
import {observer} from "mobx-react";
import {Checkbox} from "antd";

const TodoView = observer(({todo}) =>
    <li>
        <Checkbox checked={todo.finished} onChange={() => todo.finished = !todo.finished}>{todo.title}</Checkbox>
    </li>
);

@observer
class TodoListView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <ul>
                {this.props.todoList.todos.map(item => <TodoView todo={item} key={item.id}/>)}
            </ul>
            Tasks left: {this.props.todoList.unfinishedTodoCount}
        </div>
    }
}

export default TodoListView;
