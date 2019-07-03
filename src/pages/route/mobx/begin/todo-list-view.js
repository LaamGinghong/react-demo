import React, {Component} from 'react';
import {observer} from "mobx-react";

const TodoView = observer(({todo}) =>
    <li>
        <input
            type="checkbox"
            checked={todo.finished}
            onClick={() => todo.finished = !todo.finished}
        />{todo.title}
    </li>
);

@observer
class TodoListView extends Component {

    render() {
        return <div>
            <ul>
                {this.props.todoList.todos.map(item => <TodoListView todo={item} key={item.id}/>)}
            </ul>
            Tasks left: {this.props.todoList.unfinishedTodoCount}
        </div>
    }
}

export default TodoListView;
