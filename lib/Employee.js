// (this class will be the basis for other three classes; they will `extend` from it)
// The Employee class will have the following properties and methods:

class Employee {
    constructor(name, id, title) {
        this.name = name;
        this.id = id;
        this.title = title;
    }

    getName = function() {
        return this.name
    };
    getId = function() {
        return this.id
    };
    getEmail = function() {
        const lowName = this.name.toLowerCase()
        return `${lowName}@fakemail.com`
    };
    getRole = function() {
        return 'Employee'
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