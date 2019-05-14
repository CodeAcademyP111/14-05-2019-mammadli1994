// var person = {
//     name: "Mushfiq",
//     surname: "Agayev",
//     age: 29,
//     fullname: function () {
//         return this.name + " " + this.surname;
//     },
//     allData: function () {
//         return this.age;
//     }
// }

// var person1 = {
//     name: "Cavid",
//     surname: "Beshirov",
//     age: 25,
//     fullname: function () {
//         return this.name + " " + this.surname;
//     },
//     allData: function () {
//         return this;
//     }
// }
// console.log(person1.allData())

// var Person = function (name, surname, age) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.examResult = [];
//     this.fullname = function () {
//         return this.name + " " + this.surname;
//     };
//     this.allData = function () {
//         return this.fullname() + " " + this.age;
//     };
//     this.addExamResult = function (exam) {
//         this.examResult.push(exam);
//     }
//     this.average = function () {
//         var sum = 0;
//         for (var i = 0; i < this.examResult.length; i++) {
//             sum += this.examResult[i]
//         }
//         return sum / this.examResult.length;
//     }
// }

// var Mushfiq = new Person("Mushfiq", "Aghayev", 29);
// var Cavid = new Person("Cavid", "Beshirov", 25);
// Cavid.addExamResult(75);
// Mushfiq.addExamResult(90);
// Mushfiq.addExamResult(80);
// console.log(Mushfiq.average());

// var Car = function (marka, model, color, tank, consumption) {
//     this.marka = marka;
//     this.model = model;
//     this.color = color;
//     this.tank = tank;
//     this.consumption = consumption;
//     this.initialFuelLevel = 0;
//     this.endFuelLevel = function (km) {
//         var endFuel = this.initialFuelLevel - this.consumption * km / 100;
//         if (endFuel >= 0) {
//             return endFuel;
//         }else{
//             return "kifayet qeder benzin yoxdur";
//         }

//     }
// }

// var bmw = new Car("BMW", "x6", "yellow", 75, 20);
// bmw.initialFuelLevel = 40;
// console.log(bmw.endFuelLevel(195))

// class Mat{
//     sum(x,y){
//         return x+y;
//     }
// }

// var mat=new Mat();

// console.log(mat.sum(5,7))

// class Person {
//     constructor(name, surname, age) {
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//         this.year = 1991;
//     }
//     fullname() {
//         return this.name + " " + this.surname;
//     }
//     allData() {
//         return this.fullname() + " " + this.age;
//     }
// }

// var Cavid = new Person("Cavid", "Beshirov", 25);

// console.log(Cavid.year)


class Car {
    constructor(marka, model, color, tank, consumption) {
        this.marka = marka;
        this.model = model;
        this.color = color;
        this.tank = tank;
        this.consumption = consumption;
        this.initialFuelLevel = 40;
    }

    endFuelLevel(km) {
        var endFuel = this.initialFuelLevel - this.consumption * km / 100;
        if (endFuel >= 0) {
            return endFuel;
        } else {
            return "kecerli deyil";
        }
    }
}

var mercedes = new Car("mercedes", "190", "black", 45, 10);
mercedes.initialFuelLevel=mercedes.endFuelLevel(150)
console.log(mercedes.initialFuelLevel)