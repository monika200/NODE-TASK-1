const os = require('os');//1 module
const path = require("path");//2 module
const fs = require("fs");
const http = require("http");

let httpserver =http.createServer((req,res)=>{
    res.end("Welcome")
    })
    httpserver.listen(3000);

fs.writeFile("book.txt","Hello How are you?",(err)=>{
        if(err) throw err;
        console.log("File updated")
})
fs.writeFile("book1.txt","Hello How are you?",(err)=>{
    if(err) throw err;
    console.log("File updated")
})
fs.writeFile("book2.txt","Hello How are you?",(err)=>{
    if(err) throw err;
    console.log("File updated")
})
fs.writeFile("book3.txt","Hello How are you?",(err)=>{
    if(err) throw err;
    console.log("File updated")
})
fs.readFile("book1.txt", "UTF-8", (err, data)=>{
    if(err) throw err;
    console.log("data read");
    console.log(data);
})
fs.readFile("book2.txt", "UTF-8", (err, data)=>{
    if(err) throw err;
    console.log("data read");
    console.log(data);
})
fs.readFile("book3.txt", "UTF-8", (err, data)=>{
    if(err) throw err;
    console.log("data read");
    console.log(data);
})
fs.readFile("book.txt", "UTF-8", (err, data)=>{
    if(err) throw err;
    console.log("data read");
    console.log(data);
})
fs.readdir("../NODE-TASK1", (err, files)=>{
    if(err) throw err;
    console.log("data read");
    console.log(files);
})

console.log(path.isAbsolute("./clac.js"));//it will return path is true for absolute or false for relative
console.log(os.platform());

 