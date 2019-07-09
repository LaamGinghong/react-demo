import {observable, computed} from "mobx";

export class ObservableDecorateDemo {
    @observable price = 0;
    @observable amount = 1;

     get total() {
        return this.price * this.amount;
    }
}
