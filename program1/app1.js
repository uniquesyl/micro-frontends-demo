const express = require("express");
const ejs = require("ejs");
const app = express();
const path = require('path'); //系统路径模块
const fs = require('fs'); //文件模块
var cookieParser = require('cookie-parser')
var util = require('util');

app.use(cookieParser())
// let options = {
//   setHeaders: function (res, path, stat) {
//     res.set('Access-Control-Allow-Origin', '*')
//   }
// }

// app.use(express.static(path.join(__dirname, 'dist/js'),options));
app.get("*", (req, res) => {
  console.log("Cookies: " + util.inspect(req.cookies));
  const response = fs.readFileSync(
    path.resolve(__dirname, "./dist/js/app.js"),
    "utf-8"
  );
  res.set('Access-Control-Allow-Origin', '*')
  res.send(response);
})
app.listen(8081, function () {
    console.log("开启app1服务成功！")
})