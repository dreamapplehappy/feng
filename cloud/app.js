// 在 Cloud code 里初始化 Express 框架
var express = require('express');
var app = express();
var path = require('path');
var routes = require('cloud/routes/index');

// App 全局配置
app.set('views','cloud/views');   // 设置模板目录
app.set('view engine', 'ejs');    // 设置 template 引擎
app.use(express.bodyParser());    // 读取请求 body 的中间件
app.use(express.static(path.join(__dirname, '/public')));

// 使用 Express 路由 API 服务 /hello 的 HTTP GET 请求
app.get('/hello', routes.hello);
app.get('/', routes.index);
app.get('/user/register', routes.register);

app.post('/user/handleRegister', routes.handleRegister);


// 最后，必须有这行代码来使 express 响应 HTTP 请求
app.listen();

// app.listen(1337, '127.0.0.1');