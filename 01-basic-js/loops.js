// web bocket - 5 times

// console.log("web bocket")
// console.log("web bocket")
// console.log("web bocket")
// console.log("web bocket")
// console.log("web bocket")

// in loops

// let i = 1;
// for (i = 1; i <= 5; i++){
//     console.log("web bocket")
// }

//calculate the sum of 1 to 5 

// let sum = 0;
// for (let i = 1; i <= 100; i++){
//     sum = sum + i;
// }
// console.log("sum = ", sum)

// let i = 1;
// while(i <= 5){
//     console.log("i = ",i)
//     i++;
// }

// let i = 1;
// do{
//     console.log("web bocket");
//     i++;
// } while( i<= 10)

// let str = "webbocket";
// // iterate the characters
// for(let i of str){
//     console.log(i)
// }

// let str = "javascript"
// let size = 0;
// for(let i of str){
//     console.log("i = ",i);
//     size++;
// }
// console.log("string size = ", size)
let student = {
    name: "rahul kumar",
    age: 25,
    CGPA: 9.7,
    isPass: true, 
}
// left side part is my keys & right side parts is my values
// here name, age, CGPA isPass is my keys
// rahul kumar, 25, 9.7, true is my values
for(let key in student){
    console.log("key = ","value = ", student[key])
}