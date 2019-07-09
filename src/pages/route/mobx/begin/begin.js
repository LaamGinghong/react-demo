import React from "react";
import TodoListView from "./todo-list-view";
import {TodoList} from "./todo-list";
import TimerView from "./timer-view";
import {appState} from './timer';
import {Divider} from "antd";

const todoList = new TodoList();

function Begin() {
    return (
        <div>
            <TodoListView todoList={todoList}/>
            <Divider/>
            <TimerView appState={appState}/>
        </div>
    )
}

export default Begin;
