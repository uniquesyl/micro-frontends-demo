const express = require("express");
const ejs = require("ejs");
const app = express();
const path = require('path'); //系统路径模块
const fs = require('fs'); //文件模块
var cookieParser = require('cookie-parser')
var util = require('util');

let apps;
fs.readFile('./public/apps.config.json',function(err,data){
  if(err){
      console.error(err);
  }
  apps = JSON.parse(data.toString()).apps;
})
app.use(cookieParser())
app.use(express.static('public'))


app.set("view engine","ejs");


app.get("*", (req, res) => {
    // 当前模板地址为views/index.ejs
    console.log('apps',apps)
    // console.log("Cookies: " + util.inspect(req.cookies));
    res.cookie("session_id", 'aaaaaabbbbbbbbbbb', {});
    res.render("index",{apps});
})
app.listen(3000, function () {
    console.log("开启服务成功！")
})