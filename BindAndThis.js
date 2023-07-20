/**
 * So if we use this KW within the global scope or within a regular function, then this is going to pertain
 to the window object. If we use it within a constructor function or a class, then we can use it to to
 access properties and methods for that object.

JavaScript gives us these methods that we can use to manually define what the this keyword means or what it points
to. And those three methods are call, bind and apply.
 */
class App {
    constructor(name) {
        this.ServerName = name;
        //So when you want to do something like this where you have an event listener and you want to call a class
        //method, if you're going to use the this keyword, then you want to use bind.
        document.querySelector('.click').addEventListener('click', this.getServerName.bind(this))
    };

    getServerName() {
        console.log(this.ServerName);
    }
};
const app = new App('localhost');

//W3 Schools
/**
 * Function Borrowing
    With the bind() method, an object can borrow a method from another object.
    The example below creates 2 objects (person and member).
    The member object borrows the fullName method from the person object:
 */
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const member = {
    firstName: "Hege",
    lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);
console.log(fullName());

//When a function is used as a callback, this is lost.
//The bind() method solves this problem.
//In the following example, the bind() method is used to bind person.display to person.
const person1 = {
    firstName: "John",
    lastName: "Doe",
    display: function () {
        console.log(this.firstName + " " + this.lastName);
    }
}

let display = person1.display.bind(person1);
setTimeout(display, 3000);
