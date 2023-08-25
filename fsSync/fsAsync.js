

// ---------------------- ASYNCHRONOUS FILESYSTEM ------------------------------

// --------------------- Create File--------------------------------------------

// here i use settimeout method its create  file using Asynchronous 
// const fs = require("fs")
// setTimeout(()=>{
//     fs.writeFile("file.txt" , "for Asynchronous File create" , (err)=>{
//         console.log("created successfully")
//         console.log(err)
//     })
// }, 1000)
// console.log("hello")






// ------------------------------------ Update File -------------------------------

// const fs = require("fs")

// fs.appendFile("file.tx","\adding new data or update the data in this file" , (err)=>{
//     if (err){
//         console.log("error", err)
//     }
//     console.log("updATED SUCCESSFULL")
// })


// ------------------------------------- READ FILE -----------------------------------


// const fs = require("fs")
// fs.readFile("file.txt" ,"utf-8" , (err, data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
// })
// output : for Asynchronous File createadding new data or update the data in this fileadding new data or update the data in this fileadding new data or update the data in this file




// ---------------------------- ASYNC and SYNC difference ----------------------------------

// SYNC


// const fs = require("fs")
// const read = fs.readFileSync("file.txt" , "utf-8")
// console.log(read)
// console.log("after reading ")

// OutPut :
// for Asynchronous File createadding new data or update the data in this fileadding new data or update the data in this fileadding new data or update the data in this file
// after reading


// ASYNC :

// const fs = require('fs')
// fs.readFile("file.txt", "utf-8" , (err, data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
// })
// console.log("after reading the data")  

// OUTPUT :-
// after reading the data 
// for Asynchronous File createadding new data or update the data in this fileadding new data or update the data in this fileadding new data or update the data in this file



const fs = require("fs")
fs.mkdir("fsAsync" , (err)=>{
    if (err){
        console.log(err)
    }
    console.log("Successfull Created")

})






