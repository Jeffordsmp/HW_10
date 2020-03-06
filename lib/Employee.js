// (this class will be the basis for other three classes; they will `extend` from it)
// The Employee class will have the following properties and methods:

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.title = 'Employee';
        this.email = email
    }

    getName() {
        return this.name
    };
    getId() {
        return this.id
    };
    getEmail() {
        return this.email
    };
    getRole() {
        return this.title
    }
}

module.exports = Employee;

// name
// id
// title
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'