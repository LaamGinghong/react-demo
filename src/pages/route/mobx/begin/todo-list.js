import {computed, observable, autorun, action} from "mobx";

export class TodoList {
    @observable todos = [
        {finished: true, title: '唱歌', id: 1}
    ];

    @computed
    get unfinishedTodoCount() {
        return this.todos.filter(item => !item.finished).length;
    }

    @computed
    get finishedTodoCount() {
        return this.todos.filter(item => item.finished).length;
    }

    @action
    setItem(e) {
        this.todos = [e];
    }

    constructor() {
        autorun(() => {
            console.log('完成了%d中的%d项', this.finishedTodoCount, this.todos.length);
        });
    }
}
