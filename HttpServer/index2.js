

const http = require("http")

const server = http.createServer((req, res)=>{
    if(req.url == "/"){
        res.end(" Hello Iam Home Page ")
    }else if(req.url ==  "/about"){
        res.end("Iam About Page ")
    }else{
        res.end("404 Not Found !")
    }
})

server.listen(8000 , "127.0.0.1", ()=>{
    console.log(`Listening on port 3500`)
})