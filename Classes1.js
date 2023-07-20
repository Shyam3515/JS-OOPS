/*
ECMAScript 2015, also known as ES6, introduced JavaScript Classes.
A JavaScript class is not an object.
JavaScript Classes are templates for JavaScript Objects.
*/

class Rectangle{
    constructor(name,height,width){
        this.name = name;
        this.height = height;
        this.width = width;
    }

    area(){
        return this.height * this.width;
    }

    perimeter(){
        return 2 * (this.height + this.width);
    }
};
//When you have a class, you can use the class to create objects:
const rect = new Rectangle('Rectangle',10,20);
console.log(rect.area());
console.log(rect.perimeter());