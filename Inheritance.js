/*
JavaScript Class Inheritance
Use the "extends" keyword to inherit all methods from another class.
Use the "super" method to call the parent's constructor function.

Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.
*/
class Car{
    constructor(brand){
        this.car = brand;
    }

    present(){
        return `I have a ${this.car}`;
    }
}

class Model extends Car{
    constructor(brand,model){
        /*
        The super() method refers to the parent class.
        By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods. */
        super(brand);

        this.model = model;
    };

    show(){
        return `${this.present()} it is a ${this.model} model...`;
    }
};

let car = new Model('Audi','A6');
console.log(car.show());