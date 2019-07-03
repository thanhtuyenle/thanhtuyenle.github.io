var x = 5; // var is used intentionally
function foo() {console.log(this.x);}
foo();
const obj = {x: 10, bar: function () {console.log(this.x);}};
obj.bar();
const bar2 = obj.bar;
console.log(obj);
console.log(bar2);
bar2();
obj.foo = foo;
obj.foo();