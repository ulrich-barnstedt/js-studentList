export default class ObjectList {
    constructor () {
        this.list = [];
    }

    add (obj) {
        this.list.push(obj);
        return this.list.length - 1;
    }

    getByID (id) {
        return this.list.find((elem) => {
            return elem.id === id;
        })
    }

    getAll () {
        return this.list;
    }

    forEach (fn) {
        this.list.forEach(fn);
    }

    deleteByID (id) {
        this.list = this.list.filter((elem) => {
            return elem.id !== id;
        });
    }

    concat (secondList) {
        this.list = [...this.list, ...secondList];
    }
}