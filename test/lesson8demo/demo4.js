function Employee(){
    this.company = 'MUM';
    this.year = '2016';
}
var emp = new Employee(); // {company: "MUM"} – no year!
console.log(emp);
Employee.prototype.intro = function(){
    return 'Hi I work for ' + this.company;
}
console.log(emp.intro()); // "Hi I work for MUM"