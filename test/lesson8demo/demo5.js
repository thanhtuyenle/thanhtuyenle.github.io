// By convention we use capital first letter for function constructor
function Course (coursename){
    this.coursename = coursename;
    console.log('Function Constructor Invoked!');
}
Course.prototype.register = function(){
    return 'Register ' + this.coursename;
}
var wap = new Course('WAP'); // Function Constructor Invoked!
console.log(wap); // Course {coursename: "WAP"}
console.log(wap.__proto__ === Course.prototype); // true
console.log(wap instanceof Course); // true
console.log(Course.prototype.register); // function(){ ... }
console.log(wap.register()); // Register WAP