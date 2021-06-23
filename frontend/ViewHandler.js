import Student from "./Student.js";
import Validator from "./Validator.js";

export default class ViewHandler {
    bindAddBtn (addFn, addBtn = "#addBtn") {
        document.querySelector(addBtn).onclick = (e) => {
            e.preventDefault();
            addFn();
        }
    }

    bindIO (
        inputs =
            {firstName : "#firstName", lastName : "#lastName", emailAddress : "#emailAddress"},
        output = "#elements"
    ) {
        this.inputs = {
            firstName : document.querySelector(inputs.firstName),
            lastName : document.querySelector(inputs.lastName),
            email : document.querySelector(inputs.emailAddress)
        }
        this.output = document.querySelector(output);
        this.validator = new Validator(this.inputs);
    }

    renderStudents (list, deleteFn) {
        this.output.innerHTML = "";

        list.forEach((s, i) => {
            let element = document.createElement("div");
            element.innerHTML = s.toHtml(i);
            element.querySelector("button").onclick = ({target}) => deleteFn(target);

            this.output.append(element);
        });
    }

    pullStudent () {
        if (!this.validator.validate()) return false;

        return new Student(
            this.inputs.firstName.value,
            this.inputs.lastName.value,
            this.inputs.email.value
        );
    }
}