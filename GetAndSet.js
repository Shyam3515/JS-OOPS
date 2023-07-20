//Setters and getters using class

class Name{
    constructor(firstName,lastName){
        this._firstName = firstName;
        this.lastName = lastName;
    };
    /*Many programmers use an underscore character _ before the property name to separate the getter/setter from 
      the actual property: This is an private property.*/

    get firstName(){
        return this._firstName;
    }

    set firstName(value){
        this._firstName = this.Capitalize(value);
    }

    get lastName(){
        return this._lastName;
    }

    set lastName(value){
        this._lastName = this.Capitalize(value);;
    }

    Capitalize(value){
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

    fullName(){
       return this._firstName+" "+ this._lastName;
    }
}

const name = new Name('shyam','yadla');
name.firstName = 'yadla';
name.lastName = 'shyam';
console.log('*********Using Classes****************');
console.log(name.firstName,name.lastName,",", name.fullName());

//Setters and getters using constructor function;
function Person(firstName,lastName){
    this._firstName = firstName;
    this._lastName = lastName;

    /*
     * Now, to create a getter and a setter, we have to use the define property on the object constructor.
     * So if I say object dot, define property, this actually takes in three things.
     * It takes in the object itself, which is going to be 'this'.
     * It takes in the property that we want to add a getter and a setter for which in this case I want it to be 
        called  first name.
     * And then it takes an object with a getter and setter function.
     */
    Object.defineProperty(this, 'firstName',{
        get : function(){
            return this.capitalizeFirst(this._firstName);
        },
        set : function(value){
            this._firstName = value;
        }
    });

    Object.defineProperty(this, 'lastName',{
        get : function(){
            return this.capitalizeFirst(this._lastName);
        },
        set : function(value){
            this._lastName = value;
        }
    });

    Object.defineProperty(this, 'fullName',{
        get : function(){
            return this.firstName + ' '+ this.lastName;
        }
    });    
};

Person.prototype.capitalizeFirst = function(value){
    return value.charAt(0).toUpperCase() + value.slice(1);
}

const person1 = new Person('shyam','yadla');
console.log('*********Using Constructor****************');
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.fullName);


//Object Literals
const personObj = {
    _firstName : 'john',
    _lastName : 'doe',

    get firstName(){
        return Person.prototype.capitalizeFirst(this._firstName);
    },
    set firstName(value){
        this._firstName = value;
    },
    get lastName(){
        return Person.prototype.capitalizeFirst(this._lastName);
    },
    set lastName(value){
        this._lastName = value;
    },
    get fullName(){
        return this.firstName + ' ' + this.lastName;
    },
};
const person2 = Object.create(personObj);
console.log('*********Using Object Literals****************');
console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.fullName);