import ObjectList from "./ObjectList.js";
import StudentDAO from "./StudentDAO.js";
import ViewHandler from "./ViewHandler.js";
import Student from "./Student.js";

export default class Facade {
    constructor () {
        this.dao = new StudentDAO("http://localhost:5000/api");
        this.vh = new ViewHandler();
        this.list = new ObjectList();
    }

    init () {
        this.vh.bindAddBtn(this.addStudent.bind(this));
        this.vh.bindIO();

        this.loadStudents();
    }

    rerender () {
        this.vh.renderStudents(this.list, this.deleteStudent.bind(this));
    }

    addStudent () {
        let pulled = this.vh.pullStudent();
        if (!pulled) return;

        this.dao.addStudent(pulled, updated => {
            pulled.id = updated;
            this.list.add(pulled);
            this.rerender();
        })
    }

    deleteStudent (target) {
        let id = target.getAttribute("data-id");

        this.list.deleteByID(id);
        this.rerender();
        this.dao.deleteStudent(id);
    }

    loadStudents () {
        this.dao.loadStudents((list) => {
            this.list.concat(list.map(base => new Student(base.firstName, base.lastName, base.email, base.id)));
            this.rerender();
        })
    }
}