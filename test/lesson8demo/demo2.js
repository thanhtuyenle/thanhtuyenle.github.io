var student = {
    name : "Jim Carrey",
    course : "WAP",
    no : 12
    };
for (var key in student) {
console.log(key); // name, course, no
}
console.log(Object.keys(student)); // [name, course, no]
stu = Object.create(student);
console.log(stu);//return {}
console.log(stu.name); // Jim Carrey
for (var key in stu) {
console.log(key); // name, course, no
}
console.log(Object.keys(stu)); // [] 
delete student.no;
console.log(student); //return { name : "Jim Carrey", course : "WAP" };
console.log(stu);//return {}