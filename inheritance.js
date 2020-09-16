// class HM{
//     constructor(){
//         this.headmaster = "Abdul Kuddus";
//     }
// }

// class Student extends HM{
//     constructor(name, id, roll){
//         super()
//         this.name = name;
//         this.id = id;
//         this.roll = roll;
//     }
// }
// const student1 = new Student("Sarowar",4563, 02);
// const student2 = new Student("Sajjad", 6936, 03);
// const student3 = new Student("Somona", 69887, 01);
// const student4 = new Student("Sanjida", 6575, 10);

// console.log(student1, student2, student3, student4);


class father {
    constructor(){
        this.fatherName = "Jahirul Islam";
    }
}

class Child extends father{
    constructor(name, age, height, weight){
        super()
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }
        getFullName(){
            return this.name + " " + this.fatherName
        }
}

const son1 = new Child("Sarowar", 24, '5.6"', "64KG");
console.log(son1.getFullName());