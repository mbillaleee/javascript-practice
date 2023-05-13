// callback and higher order function

// function square(x){
//     console.log(`square of ${x}: ${x * x}`);

// }

// // square(5);
// const y = square;
// y(5);


// function higherOrderFunction(num, callback){
//     callback(num);
// }
// higherOrderFunction(6, square);



const taskOne = () => {
    console.log("Task1");
};
// const dataLoading = () =>{
//     console.log("Task2, Data loadsing");
// }
const taskTwo = () => {
setTimeout(dataLoading = () =>{
    console.log("Task2, Data loadsing");
}, 2000)
};
const taskThree = () => {
    console.log("Task3");
};
const taskFour = () => {
    console.log("Task4");
};
const taskFive = () => {
    console.log("Task5");
};
taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();