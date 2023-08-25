


const validator = require("validator")

// -------------------------------- isEmail ------------------------------
const email = "subrat@gmail.com"
if(validator.isEmail(email)){
    console.log("Successfully created ")
}
else{
    console.log("Email not valid ....!")
}


// --------------------- isJSON() ---------------------------------------
const jsn = "subrat"

// if (validator.isJSON(jsn)){
//     console.log("sussess")
// }
// else{
//     console.log("Not a JSON format ")
// }



// ----------------------------- isStrongPassword()-------------------------
const pass = "Subrat1@"
// if(validator.isStrongPassword(pass)){
//     console.log("successful")
// }
// else{
//     console.log("not successfull")
// }
