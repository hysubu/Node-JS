
// Convert Object to JSON
// ----------------------------------------------------------------------------
// const data = {

//     name : "subrat Mohanty" , 
//     age : 21 , 
//     city : "Bhubaneswar"
// }
// const jsn = (JSON.stringify(data))
// console.log(jsn)
// {"name":"subrat Mohanty","age":21,"city":"Bhubaneswar"}
// ------------------------------------------------------------------------------------



//  ----------------------- Convert to JSON to Objects --------------------------------

// const jsn_obj = JSON.parse(jsn)
// console.log(jsn_obj)
// { name: 'subrat Mohanty', age: 21, city: 'Bhubaneswar' }






//  Create a file using fileSystem module and storing the JSON data 

const fs = require("fs")
const data = {
    name : "subrat Mohanty" , 
    age : 21 , 
    city : "Bhubaneswar", 
    contact : 121212121 , 
    salary : 122212121211212121

}
const jsn = (JSON.stringify(data))
try{
function create_json_file(jsn){
   fs.writeFile("json1.json", jsn , ()=>{
    console.log( 'File created')
    })
}
}catch(err){
    console.log( err)
}
console.log(create_json_file(jsn))
// File created


// Read the created JSON file  data  using  FileSystem 

function read_created_json_file(file){
    fs.readFile(file , "utf-8" , (err, data)=>{
        if (err){
            console.log(err)
        }else{
            console.log(JSON.parse(data))
        }  
    })  
}
read_created_json_file("json1.json")
//output : { name: 'subrat Mohanty', age: 21, city: 'Bhubaneswar' }



// fs.appendFile("json1.json" , jsn , (err)=>{
//     if(err){
//         console.log(err)

//     }else{
//         console.log('Data appended to json file ')
//     }

// })










