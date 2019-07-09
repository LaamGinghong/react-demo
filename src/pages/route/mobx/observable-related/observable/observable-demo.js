import {observable} from "mobx";

export const map = observable.map({key: 'value'});
map.set('key', 'new value');

export const list = observable([1, 2, 3, 4]);
list[2] = 10;

export const person = observable({
    firstName: 'Sasha',
    lastName: 'Lum'
});
person.firstName = 'Sasha ';

export const temperature = observable.box(20);
temperature.set(50);
