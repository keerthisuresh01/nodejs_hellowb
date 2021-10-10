var http=require('http');
const PORT=process.env.PORT ||4000;
var fs=require('fs');
var express=require('express');
var app=express();
app.get('/',(req,res)=>{
    fs.readFile('index.html',null,function(err,data){
        if(err){
            res.write("error");
        }
        else{
            res.write(data);
        }
    })
});  
app.listen(PORT);
console.log(PORT);