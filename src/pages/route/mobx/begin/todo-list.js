import {computed, observable} from "mobx";

export class TodoList {
    @observable todos = [];

    @computed
    get unfinishedTodoCount() {
        return this.todos.filter(item => !item.finished).length
    }
}
