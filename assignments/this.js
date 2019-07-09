/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding is in the global scope, bound to default.
* 2. Implicit Binding is whatever to the left of the dot syntax === this
* 3. New Binding creates a new object that is referenced by ```this``` variable, it uses the methods and properties from ```this```.
* 4. Explicit Binding uses functions to apply, bind, and call properties and attach to function/object.
*
* write out a code example of each explanation above
*/

// Principle 1
let hey = function() {
    console.log("Hi")
}

hey();

// code example for Window Binding

// Principle 2

function oy(){
	console.log(this.a);
}

var yo = {
	a: 'Jacob',
	oy: oy
};

yo.oy();

// code example for Implicit Binding

// Principle 3

function NB() {        
    this.name = 'Jacob';
    this.say = function () {
    return "I am " + this.name; 
   };
}

var name = 'Moose';
var result = new NB();
console.log(result.name);

// code example for New Binding

// Principle 4

function HeroVillan(attributes) {
    Humanoid.call(this, attributes); // this function would inherit Humanoid function with this line.
      this.ability = attributes.ability;
      this.finish = attributes.finish;
  }
  
// code example for Explicit Binding