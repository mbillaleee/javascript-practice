// how to crate promise 
// const promise1 = new Promise((resolve, reject)=> {
//     let completedPromise = false;
//     if(completedPromise){
//         resolve("Complete promise 1");
//     }else{
//         reject("Not complete promise 1");
//     }
// });
// // console.log(promise);
// promise1.then((res)=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// })


const promise1 = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        resolve("Complete promise 1");
    }, 1000);
});
const promise2 = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        resolve("Complete promise 2");
    }, 5000);
});

Promise.race([promise1, promise2]).then((res)=>console.log(res));
console.log("end");










