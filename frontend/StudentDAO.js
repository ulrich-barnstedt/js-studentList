export default class StudentDAO {
    constructor (baseUrl) {
        this.baseUrl = baseUrl;
        this.xhr = new XMLHttpRequest();
    }

    request (method, dir, body = {}, then = () => {}) {
        this.xhr.open(method, this.baseUrl + dir);
        this.xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        this.xhr.send(JSON.stringify(body));

        this.xhr.onload = () => {
            if (this.xhr.status > 299) return alert(`Request returned ${this.xhr.status} (${this.xhr.response})`);
            then();
        };
        this.xhr.onerror = () => {
            alert(`An error has occurred attempting to contact the server.`);
        }
    }

    testConnection () {
        this.request("GET", "/hello", {}, () => {
            console.log(`Connection works. (${this.xhr.response})`);
        })
    }

    loadStudents (cb) {
        this.request("GET", "/students", {}, () => {
            cb(JSON.parse(this.xhr.response));
        })
    }

    addStudent (student, cb) {
        this.request("POST", "/students", student, () => {
            cb(JSON.parse(this.xhr.response).id);
        })
    }

    deleteStudent (id) {
        this.request("DELETE", "/students", {id});
    }
}