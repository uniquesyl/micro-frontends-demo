const express = require("express");
const ejs = require("ejs");
const app = express();
const path = require('path'); //系统路径模块
const fs = require('fs'); //文件模块
var cookieParser = require('cookie-parser')
var util = require('util');

app.use(cookieParser())
let options = {
  setHeaders: function (res, path, stat) {
    res.set('Access-Control-Allow-Origin', '*')
  }
}
app.use(express.static(path.join(__dirname, 'dist'),options));
app.listen(8081, function () {
    console.log("开启app1服务成功！")
})