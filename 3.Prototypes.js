/* A prototype is just a special object where additional methods and properties can be attached and shared across all instances of its constructor function.

So whenever we did object dot something that's on the object's constructor in the object prototype.
*/

//create a new Constructor function with upperCase
function Rectangle(name,height,width){
    this.name = name;
    this.height = height;
    this.width = width;
}
//As area is not going to change[it will have width and height no need to change parameters] we are gonna keep it in prototype.

//And then we don't have to change anything else within the prototype.We still have access to this keyword, which is going to refer to this particular instance of the object.
Rectangle.prototype.area = function(){
    return this.height*this.width;
};

Rectangle.prototype.changeName = function(newName){
    return this.name = newName;
};

const rect = new Rectangle('name',20,30);
console.log(rect);
console.log(Object.getPrototypeOf(rect));
console.log(rect.area());
console.log(rect.changeName('Square'),"=>",rect.name);

//Constructor
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

//get Summary
//The reason we do this, is because we do want title, year, and author for every book, but we don't want get summary for every book... that's why we store it in the prototype...
Book.prototype.getSummary = function(){
    return `Book ${this.title}, is written by author ${this.author} in the year ${this.year}...`
}

//getAge
Book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year;
    return `Book ${this.title} is ${years} old...`
}

//Revise /Change Year
Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revised = true;
}
const book1 = new Book('JavaScript','"Shyam Yadla"','2000');
//here we get all basic properties and the get summary func that we added, this is good example of prototype.
console.log(book1)
book1.revise('2018')
console.log(book1)

