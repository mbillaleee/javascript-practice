//how to create a object
//how to print the value of an object
// adding a constructor 
// adding function inside a construct

function Student(name, age, cgpa, lang){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;

    this.display = function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.lang);
    }
}

var student1 = new Student("Masum", 27, 2.83, ["Bangla", "Turkey", "English"]);
var student2 = new Student("Billal", 28, 2.83, ["Bangla", "Hindi", "English"]);
var student3 = new Student("Mukta", 29, 2.83, ["Bangla", "Kanror", "English"]);

student1.display();
student2.display();
student3.display();