
// using litrel 
const student = {name: 'sakib', id : 05 , job : "farmer"}
console.log(student.name,student.job);

//  using constructor
const person = new Object ('sakib');


const human = Object.create(student)
console.log(human.job);