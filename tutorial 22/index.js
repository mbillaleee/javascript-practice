// for(var i = 1; i <= 100; i = i + 1){
//     if(i==10){
//         break;
//     }
//     document.write(" ," + i);
// }

// for(var i = 1; i <= 100; i = i + 1){
//     if(i==10){
//         continue;
//     }
//     document.write(" ," + i);
// }
for(var i = 1; i <= 100; i = i + 1){
    if(i %2 != 0){
        continue;
    }
    document.write(" ," + i);
}