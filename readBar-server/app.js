//使用express创建服务器
const express=require("express")
var app=express();
app.listen(3000,()=>{
	console.log("服务器创建成功")
})
app.use(express.static("public"))




