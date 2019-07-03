/*let val = (function(){
    var ret = function(){ return {attr: "true"} }
    return ret;
    })();
    let val1 = val();
    let val2 = val1.attr;*/
//val is a function: because return ret = function(){ return {attr: "true"} }
//val1 is return object {attr: "true"}
//val2 is return String "true"
/*let module = (function(){
    x=10;
    let outer1="outer1";
    function f1(arg1, arg2){
    let func1 = function(){ return arg2;};
    }
    return outer1;
    })();
    alert(module);//return outer1
    alert(x);//return 10
    */
/*function foo(x, y){
    return function(z){
    return x+y+z;
    };
   }
   function bar (f){
    return f(10);
   }
var result = bar(foo(5,5));
alert(result);*/ //return 20
(function(x,y){
    "use strict";
    console.log(this); //if not use strict => return window
    console.log(x,y);
    const obj = {x:2, foo:function(){console.log(this.x)}};
    obj.foo();
    obj.bar = () =>console.log(this.x); //try to use something outside will be error because this is undefined. If not use strict, it will be undefined
    obj.bar();
   })(5,7);