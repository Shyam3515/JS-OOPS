/*
Okay, So now we're going to talk about property flags and descriptors.
So properties in objects basically have these permissions that we can set.

Object properties, besides a value, have three special attributes (so-called “flags”):
writable – if true, the value can be changed, otherwise it’s read-only.
enumerable – if true, then listed in loops, otherwise not listed.
configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.
value - The value of the property.

The method Object.getOwnPropertyDescriptor allows to query the full information about a property.
The syntax is:
let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);

obj :
The object to get information from.
propertyName :
The name of the property.
The returned value is a so-called “property descriptor” object: it contains the value and all the flags.

For instance:
*/

let user = {
    name: "Shyam",
    lName : "Yadla",
  };
  let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
  
  /**
   Here's the syntax of the method:

    => stringify(value, replacer, space)
    The value is the object you want to stringify. The replacer specifies values of properties to be 
    replaced while stringifying. And the space specifies whitespaces for the final output (which helps in readability).
   */
  alert( JSON.stringify(descriptor, null, 1) );
  console.log(descriptor);
/* property descriptor:
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/

/*
To change the flags, we can use Object.defineProperty.
The syntax is:
Object.defineProperty(obj, propertyName, descriptor)
obj, propertyName:
The object and its property to apply the descriptor.
descriptor:
Property descriptor object to apply.
*/
let user1 = {
    name: "Shyam",
    lName : "Yadla",
};

Object.defineProperty(user1, "name", {
  writable: false,
  enumerable: false,
  configurable: false
});

let descriptor1 = Object.getOwnPropertyDescriptor(user1, 'name');

alert( JSON.stringify(descriptor1) );
console.log(descriptor1);
//For getting all
console.log(Object.getOwnPropertyDescriptors(user1));