//Object.property()
const SLiteral = 'Hello';
console.log(typeof(SLiteral));

//we can create string as an object
const SObject = new String('Hello');
console.log(typeof(SObject));

//For instance, if I have a string literal and then I use to uppercase, what happens is something called boxing.
/*Boxing, because we can't use a method on a primitive data type such as SLiteral right here. 
  So what happens is behind the scenes, JavaScript adds a wrapper object to the literal and basically turns it into 
  the SObject, and this is called Boxing.

 Boxing: when JavaScript adds the wrapper object onto a literal.
 Unboxing: when an object is turned in back into a literal.
*/
//Boxing
console.log(SLiteral.toUpperCase(),typeof(SLiteral.toUpperCase()));
//UnBoxing
//Now the reason we can use this method value of I mean you see that it's not on the string object, there's no value of here.
//But if we look in the string prototype, we have all the methods that we can use for strings.
console.log(SObject.valueOf(),typeof SObject.valueOf());

//Function
const funcLit = function(x){
    return x*x;
}
console.log(funcLit, typeof funcLit);
console.log(funcLit(5));

//this is same as above;
const funcObj = new Function('x', 'return x*x');
console.log(funcObj(5));