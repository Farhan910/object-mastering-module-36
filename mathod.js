const student = {
    id: 1,
    name : 'mamun',
    money : 5000,
    subject : ['english', 'bangla,'],
    bestFriend:{
        name : 'kamun',
        id:5
    },
    takeExam : function (){
        console.log(this.name)
    },
    treat : function(expenses){
        this.money = this.money - expenses
        return this.money
    }

}

student.takeExam()
const remaining= student.treat(400)
console.log(remaining);
