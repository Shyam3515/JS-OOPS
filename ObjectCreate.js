//Adding objects to prototypes...
const rectanglePrototype = {
    area : function(){
        return this.height*this.width;
    },
    perimeter : function(){
        return 2*(this.height+this.width);
    },
    isSquare : function(){
        return this.height == this.width;
    }
}
/*
All right, so now we just have an object of prototype. So obviously this isn't doing anything yet, but what we're going to do is, use the object and create method.
And I'm going to put this into a function called Create Rectangle. So that way, whenever we want to create a new rectangle object, we can just use this function and this is going to take in a height and a width.
Okay, So this will be an alternate way to create rectangles other than using a constructor function.
*/

function CreateRectangle(height,width){
    /*JavaScript object.create() method is used to create a new object with the specified prototype object and properties.
    So we're going to return from this object. So we're going to use the object constructors prototype method of create.So object create. */
    //this takes object of methods and object of prototypes.
    return Object.create(rectanglePrototype,{
        height:{
            value : height
        },
        width:{
            value : width
        }
    });
};

const rect = CreateRectangle(10,20);
console.log(rect);// you can see it's an object with height and width;
console.log("Rectangle Area : "+rect.area());
console.log("IS Square : "+rect.isSquare());


//Prototypical Inheritance;
function Shape(name){
    this.name = name;
}
//One of the reasons that you use inheritance is to inherit prototypes.
Shape.prototype.logName = function(){
    console.log(`Shape name : ${this.name}`);
};

//To inherit Shape prototypes:
    //So we're able to use on the rectangle object, which uses the rectangle constructor which inherits from the shape and also inherits the prototypes.
Rectangle.prototype = Object.create(Shape.prototype);//it takes in object of prototypes.
//this is example of Polymorphism: logName same method that does 2 different things....
Rectangle.prototype.logName = function(){
    console.log(`Rectangle name : ${this.name}`);
};
Circle.prototype = Object.create(Shape.prototype);

//Set prototype constructors
Rectangle.prototype.constructor = Rectangle;
Circle.prototype.constructor = Circle;



//Constructor function
function Rectangle(name,height,width){

    /*
    In regular function this keyword pretends to the window object, which obviously we don't want.
    We want it to pretends to the objects instance that uses the constructor function.
    
    So what we can do is we can use the call method.
    So if we use call, it will still call the function, but it allows us to pass in this whatever the
    context of this, which in this case will be this object.
    */
    
    Shape.call(this,name);
    this.height = height;
    this.width = width;
};
/*
And what I want to be able to do is have other shapes that will inherit this this shape constructor.
And if we put prototypes on shape, then circles, rectangles.Whatever shapes we create should be able to access those prototype methods.
*/
function Circle(name,radius){
    Shape.call(this,name);
    this.radius = radius;
}

const rect1 = new Rectangle('Rectangle',10,20);
const cir = new Circle('Circle',20);
console.log(rect1,cir);
rect1.logName();
cir.logName();