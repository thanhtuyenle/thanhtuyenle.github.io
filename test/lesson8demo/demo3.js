function Person(name, age){
    this.name = name;
    this.age = age;
    this.income = 0;
}
const person1 = new Person("Sally", 23);
console.log(person1);
console.log(person1.income);
person1.income = 1000;
console.log(person1);