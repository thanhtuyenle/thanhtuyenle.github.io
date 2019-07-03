var person = {
    first: 'Default',
    last: 'Default',
    greet: function() { return 'Hi' + this.first; } //use this in functions
}
var jim = Object.create(person);
console.log(jim['first']); // Default - Inheritance
console.log(jim.hasOwnProperty('first')); // false
console.log(jim.greet());
jim.first = 'Jim';
console.log(jim.hasOwnProperty('first')); // true
console.log(jim); // {first: 'Jim'} – No last & greet()
jim.greet(); // Hi Jim 