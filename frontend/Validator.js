const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default class Validator {
    constructor (inputs) {
        this.inputs = inputs;
        this.validators = [
            () => this.checkEmpty(this.inputs.firstName),
            () => this.checkEmpty(this.inputs.lastName),
            () => this.checkEmail(this.inputs.email)
        ];
    }

    setValidInput (bool, element) {
        if (bool) {
            element.classList.remove("border-red-500");
        } else {
            element.classList.add("border-red-500");
        }

        return bool;
    }

    checkEmpty (element) {
        return this.setValidInput(element.value !== "", element);
    }

    checkEmail (element) {
        return this.setValidInput(regex.test(String(element.value).toLowerCase()), element);
    }

    validate () {
        return !this.validators.map((v) => v()).includes(false);
    }
}