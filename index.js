// import http from "node:http"

// const app = http.createServer((request, response)=>{
//     // console.log('request:', request);
//     // console.log('response:',response);


//     response.end("servidor de node")
    
// })


// app.listen(8080,()=> 
// console.log('server ok in localhost:8080'))

import express from "express"

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(request,response)=>{
    response.send("get all")
})
app.get("/:id",(request,response)=>{
    response.send("get by id")
})

app.post("/",(request,response)=>{
    console.log("request:",request);
    
    response.send("post")
})

app.listen(8080,()=>{
    console.log('8080')
})
