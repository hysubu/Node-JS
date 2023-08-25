// ---------------------------- Path Module -----------------------------
const link_path_module  =  "https://nodejs.org/api/path.html"



const path = require("path")
console.log(path.basename("E:/GIT/Node-JS/Pathmodule/path.js"))  // path.js


console.log(path.dirname("E:/GIT/Node-JS/Pathmodule/path.js"))   // E:/GIT/Node-JS/Pathmodule

console.log(path.extname("E:/GIT/Node-JS/Pathmodule/path.js"))   // .js


console.log(path.parse("E:/GIT/Node-JS/Pathmodule/path.js"))
// {
//   root: 'E:/',
//   dir: 'E:/GIT/Node-JS/Pathmodule',
//   base: 'path.js',
//   ext: '.js',
//   name: 'path'
// }

const d = path.format(
    {
        root: 'E:/',
        dir: 'E:/GIT/Node-JS/Pathmodule',
        base: 'path.js',
        ext: '.js',
        name: 'path'
      }
)
console.log("sds",d)