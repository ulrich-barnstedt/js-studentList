export default class Student {
    constructor (firstName, lastName, email, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.id = id;
    }

    toHtml () {
        return `
            <div class="rounded-lg border-gray-700 border-2 p-2">
                <img src="https://icons-for-free.com/iconfiles/png/512/customer+man+profile+user+icon-1320183283254549972.png" style="filter: invert(0.7)" alt="user icon">
                <div class="border-gray-500 border rounded-md px-4 py-2 mt-2 text-center">
                    <p class="font-bold">
                        ${this.firstName} ${this.lastName}
                    </p>
                </div>
                <div class="mt-2 flex gap-2">
                    <a class="hover:bg-blue-600 hover:text-white rounded-md px-4 py-0.5 border border-blue-600 flex-1 text-center text-blue-600" href="mailto:${this.email}">
                        Email
                    </a>
                    <Button class="hover:bg-red-600 hover:text-white rounded-md px-4 py-0.5 border border-red-600 flex-1 text-center text-red-600" data-id="${this.id}">
                        Delete
                    </Button>
                </div>
            </div>
        `;
    }
}