// console.log("Hello Iam Node Js Iam Start Now Are you Ready ")


// File System

//create file using file system 

// const fs = require("fs")
// fs.writeFileSync("read.txt" , "hello iam read file iam a first file of creating thissjbdjb,jasdas " )
//   // here we create a file using 
// writeFileSync method  
// this function mean if the read.txt file already exist then it will update if it will
// / not exists it will creat it 

// -----------------------------APPend Data in file ------------------------------------



//  if we want to append any data in this  read file or existing file  so we can use appendFileSync() method 

// Example :
// const fs = require("fs") 
// fs.appendFileSync("read.txt" , "Hey iam appending in this file ")
// // 






// ------------------------- Read File  data ------------------------------------

// const fs = require("fs") 
// const read = fs.readFileSync("read.txt" )
// console.log(read)   // object  
// Out put <Buffer 20 20 20 20 68 65 6c 6c 6f 20 69 61 6d 20 72 65 61 64 20 66 69 6c 65 20 69 61 6d 20 61 20 66 69 72 73 74 20 66 69 6c 65 20 6f 66 20 63 72 65 61 74 69 ... 44 more bytes>

// console.log(read.toString())   //    hello iam read file iam a first file of creating thissjbdjbHey iam appending in this file 



// --------------------------- Rename File  ----------------------------------


// const fs = require("fs")

// fs.renameSync("read.txt" , "readwrite.text")
