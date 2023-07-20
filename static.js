/**
 * Static class methods are defined on the class itself.
 * You cannot call a static method on an object, only on an object class.
 */

 class Car {
    constructor(name) {
      this.name = name;
    }
    static hello(x) {
        return "Hello " + x.name;
      }
  }
  
  const myCar = new Car("Ford");
  //console.log(Car.hello());// You can call 'hello()' on the Car Class:

  //If you want to use the myCar object inside the static method, you can send it as a parameter:
  console.log(Car.hello(myCar));