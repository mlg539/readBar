//使用express创建服务器
const express=require("express")
const fs=require("fs")
var app=express();
app.listen(3000,()=>{
	console.log("服务器创建成功")
})
app.use(express.static("public"))

//跨域访问配置
//1:加载模块cors
const cors = require("cors");
//2:配置cors
app.use(cors({
	origin: ["http://127.0.0.1:5500",
		"http://localhost:5500"],//允许列表
	credentials: true   //是否验证
}))

app.get("/getlist",(req,res)=>{
	fs.readdir("./public",(err,data)=>{
		res.send({code:1,msg:data})
	})

})




