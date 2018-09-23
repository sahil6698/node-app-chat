const path=require('path');
const express=require('express');

const app=express();

const publicPath=path.join(__dirname,'../public');
const port=process.env.port || 3000;
app.use(express.static(publicPath));

app.listen(port,()=>{
    console.log("App is running on port: "+port);
});