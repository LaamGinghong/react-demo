import React from "react";
import TodoListView from "./todo-list-view";
import {TodoList} from "./todo-list";

const store = new TodoList();

function Begin() {
    return (
        <div>
            <TodoListView todoList={store}/>
        </div>
    )
}

export default Begin;
