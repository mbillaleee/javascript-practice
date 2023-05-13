const taskOne = () => {
    return new Promise((resolve, reject)=>{
        resolve("Task 1 is complete");
    })
};
const taskTwo = () => {
    return new Promise((resolve, reject)=>{
        resolve("Task 2 is complete");
    })};
const taskThree = () => {
    return new Promise((resolve, reject)=>{
        reject("Task 3 is complete");
    })};
const taskFour = () => {
    return new Promise((resolve, reject)=>{
        resolve("Task 4 is complete");
    })};
const taskFive = () => {
    return new Promise((resolve, reject)=>{
        resolve("Task 5 is complete");
    })};


// taskOne().then((res)=>console.log(res))
// .then(taskTwo).then((res)=>console.log(res))
// .then(taskThree).then((res)=>console.log(res))
// .then(taskFour).then((res)=>console.log(res))
// .then(taskFive).then((res)=>console.log(res))
// .catch((err)=>console.log(err));

// async function callAllTask(){
const callAllTask = async () =>{
    try{
        const t1 =await taskOne();
    console.log(t1);
    const t2 =await taskTwo(t1);
    console.log(t2);
    const t3 =await taskThree(t2);
    console.log(t3);
    const t4 =await taskFour();
    console.log(t4);
    const t5 =await taskFive();
    console.log(t5);
    }catch(e){
        console.log(e);
    }
};
callAllTask();