import {autorun, observable} from "mobx";

export const map = observable.map({key: 'value'});
map.set('key', 'new value');
autorun(() => {
    console.log(map.get('key'));
});
