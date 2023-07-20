//Object Literals
let person = {
    name : 'Shyam',
    sal : '200000',
    hobbies:['movies','books'],
    address :{
        state : 'bvrm',
        pin :521344
    }
}
let x= person.address.pin;
delete person.hobbies;
x=person
console.log(x);

//Object Constructor
let todo = new Object();
todo.id = 1;

let x1 = '';
x1 = todo;
console.log(x1);

//Spread Operator
const obj1 = {a:1,b:2,c:'Shyam'};
const obj2 = {e:1,d:2,f:'Sundar'};
const x3 = {...obj1,...obj2}//spread operator
console.log("X3:");
console.log(x3);

//before spread operator we assign operator
const x4 = Object.assign({},obj1,obj2);
console.log(x4)

//object methods
const x5 = Object.keys(todo).length;
let x6 = Object.entries(person)
let x7 = todo.hasOwnProperty('id')
console.log("X5 : "+ x5)
console.log("Entries",x6)
console.log("X7 : "+ x7)

//Object destructure, here renaming
const {id:todoIdl} = todo
console.log("Todo ID:" + todoIdl)

//Destructure Arrays 
const arr = [1,2,3,4]
const [first,...rest] = arr
console.log(first,rest)