/**
 * node.js的入口文件.
 */
var http = require("http");
http.createServer(function(request, response){
    //发送http头部ͷ
    //http状态值：200
    //内容类型：text/html
    response.writeHead(200, {'Content-Type': 'text/html'});
    //设置显示字符编码
    response.write("<head><meta charset='utf-8'></head>");
    //发送响应数据
    response.end("Hello World! 来自node.js1 \n");
    //后台终端打印信息
    console.log("Server running at http://localhost:3000/hello world!");
}).listen(3000);