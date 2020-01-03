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
  // console.log(JSON.parse(data.toString()).apps);
  apps = JSON.parse(data.toString()).apps;
})
app.use(cookieParser())
app.use(express.static('public'))

// var bodyParser = require('body-parser'); //对post请求的请求体进行解析模块
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'views')));
// 设置扩展名为 html
// app.engine('.html',require('ejs').__express);
// 或
// app.engine('html', ejs.renderFile);

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