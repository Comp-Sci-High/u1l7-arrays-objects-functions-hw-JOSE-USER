// HOMEWORK: CRUD Operations and Functions 
// Follow the instructions and complete each task.

// TASK 1: Arrays - Create, Read, Update, Delete (CRUD)
// A. Create an array called `fruits` that contains: "apple", "banana", "cherry".
// B. Read (log) the second fruit in the array.
// C. Update the third fruit to "orange".
// D. Add a new fruit, "grape", to the end of the array.
// E. Delete the last fruit in the array.
// F. Log the updated array.

let fruits = ["apple","bananna","cherry"]
console.log(fruits)
fruits.splice(2)
fruits.push("orange")
console.log(fruits)
fruits.push("grape")
console.log(fruits)
fruits.pop()
console.log(fruits)

// TASK 2: Objects - Create, Read, Update, Delete (CRUD)
// A. Create an object called `student` with the keys: name, age, and grade. (add your own values)
// B. Read (log) the student's age.
// C. Update the student's grade to "A+".
// D. Add a new property `isGraduated` and set it to `true`.
// E. Delete the `age` property from the object.
// F. Log the updated student object.

let student = {
   keys: 5,
   name: "John Appleseed",
   age:17,
   grade:"B"
}
console.log(student.age)
student.grade["A+"]
console.log(student.grade)
student.isGraduated = true
console.log(student.isGraduated)
delete student.age
console.log(student)
// TASK 3: Functions - Create and Call Functions
// A. Write a function called `calculateTotal` that takes two inputs: price and quantity.
//    The function should return the total price by multiplying price by quantity.

function calculateTotal(x,y){
   console.log(x*y)
}

// B. Call the `calculateTotal` function 3 times and console log the outputs
// First with the inputs 20 and 5
// Second with the inputs 12 and 8
// Third with the inputs 9 and 42
calculateTotal(20,5)
calculateTotal(12,8)
calculateTotal(9,42)
/*
   ==== Final Commit Instructions ====
   At this point, commit your work with an appropriate commit message.
   Sync changes to push your commits and submit the homework!
*/
