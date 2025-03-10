// let firstname= "Benjamin";
// let lastname= "Shagunna";
// let age= 23;
//     age=24
// let isStudent= true
// const country="Nigeria"


// console.log(firstname);
// console.log(lastname);
// console.log(age);
// console.log(isStudent);
// console.log(country);

// var person= {
//     firstName: "Benjamin",
//     lastName: "Shagunna" ,
//     age: 23,
//     isStudent: true,
// };
// const country="Nigeria"

// console.log();
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(country);

// // console.log('My name is ${firstName} ${lastName}.');


// // Output
// console.log(`My name is ${person.firstName} ${person.lastName}.`);
// console.log(`I am ${person.age} years old.`);
// console.log(`I am from ${country}.`);
// console.log(`Am I a student? ${person.isStudent}`); 
// document.write(person)

// OPERATORS

// Arithemetic operators

// var a=10;
// var b=3;

// console.log(a+b);
// console.log(a-b);
// console.log(a/b);
// console.log(a*b);
// console.log(a**b);
// console.log(a%b);
// console.log(++b);
// console.log(--a);


// console.log(a);
// console.log(b);


// var x=10

// console.log(x-=100);
// console.log(x+=0);
// console.log(x/=3);
// console.log(x*=100);
// console.log(x%=2);
// console.log();

// console.log(5=="5");
// console.log(5==="5");
// console.log(5!="5");
// console.log(5!=="5");

// // Condition

// let age = 18;
// if (age > 18) {
//     console.log(Adult)
// }
// else (age < 18) {
//    console.log(child);
// }

// var age=17
// var ageTest = age >=18? 
// console.log("Adult"):
// console.log("Child");





    
// ageTest > 18? console.log("Adult"): console.log("Child");






// console.log(typeof (undefined));
// console.log(typeof("benjamin"));
// console.log(typeof(15));
// console.log(typeof(person={}));
// console.log(typeof null);

// let numbers=[1,2,3,4,5,6]

// console.log(numbers);


var baseSalary = 200000

let yearsOfExperience = parseInt(prompt("enter your years of experience:"));
let performanceRating = parseInt(prompt("enter your performance {1 to 5}"));

let finalSalary = baseSalary;

    
    if (yearsOfExperience >=3) {
        finalSalary += baseSalary*0.10;
    }
   if (performanceRating <=2) {
    finalSalary -= baseSalary*0.05
   } 


if (yearsOfExperience >5 && performanceRating ==5) {
    finalSalary += 50000;
}
if (yearsOfExperience <2 || performanceRating <3) {
    finalSalary -= 20000;
}
if (performanceRating >=4) {
    console.log("High performer");
}
else {console.log("Needs Improvement");
};

console.log(`Final Salary ${finalSalary}`);
// console.log(`Performance Status ${performanceRating}`);

