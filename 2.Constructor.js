//Constructor function
//here date is a constructor function.
//whenever you see a new word, we are basically initializing a constructor function.
//So here we're initializing this date variable to hold a new date object.
const date = new Date();


//create a new Constructor function with upperCase
function Rectangle(name,height,width){
    this.name = name;
    this.height = height;
    this.width = width;
    this.area = function(){
        return this.height*this.width
    };
}

const rect = new Rectangle('name',20,30);
/*when we use new Keyword four things happens:
    1) A new empty object is created.
    2) The constructor function is called with the arguments you passed in.
    3) The this keyword is set to the new empty  object.
    4) The new object is returned from the constructor function.
*/
console.log(rect.area())
//gives constructor function
console.log(rect.constructor)
//rect is an instance it was created from rectangle constructor. and it returns true;
console.log(rect instanceof constructor)


//Constructor
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function(){
        return `Book ${this.title}, is written by author ${this.author} in the year ${this.year}...`
    }
}

//This is converted form of an ES2015 class, for above constructor
class Book1 {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;

        this.getSummary = function () {
            return `Book ${this.title}, is written by author ${this.author} in the year ${this.year}...`;
        };
    }
}

const book1 = new Book('JavaScript','Shyam Yadla','2000');
console.log(book1)