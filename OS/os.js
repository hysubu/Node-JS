// -------------------------------Operating System ---------------------------------
const link_os_module  = "https://nodejs.org/api/os.html"

const os = require("os")
const freememory = os.freemem()
console.log("Free-RAM",`${freememory / 1024 /1024/1024}`) // Free-RAM 1.3442878723144531


const totalmemory = os.totalmem() 
console.log("Total - RAM",`${totalmemory / 1024 /1024/1024}`)//  7.326206207275391


console.log("platform-name",os.platform()) //win32

console.log( "Host-name" ,   os.hostname())  //LAPTOP-EU6SQLGE

console.log( "window-version" ,   os.version()) // Windows 10 Home Single Language


console.log( "window-type" ,   os.type()) // Windows_NT 


console.log( "Temp-data " ,   os.tmpdir()) // C:\Users\ssubr\AppData\Local\Temp

