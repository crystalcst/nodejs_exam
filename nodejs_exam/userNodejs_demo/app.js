const http = require('http');
const fs = require('fs');
const urlLib = require('url');
const querystring = require('querystring');

var users = {};

var server = http.createServer((req, res) => {
    var str = '';
    req.on('data', (data) => {
        str += data;
    });
    req.on('end', () => {
        var obj = urlLib.parse(req.url, true);
        var url = obj.pathname;
        const GET = obj.query;
        const POST = querystring.parse(str);

        if (url == '/user') { //访问接口
            switch (GET.act) {
                case 'reg':
                    if (users[GET.user]) {
                        res.write('{"ok":false,"msg":"此用户已经存在"}');
                    } else {
                        users[GET.user] = GET.pass;
                        res.write('{"ok":true,"msg":"注册成功"}');
                    }
                    break;
                case 'login':
                    if (users[GET.user] == null) {
                        res.write('{"ok":false,"msg":"此用户不存在"}');
                    } else if (users[GET.user] != GET.pass) {
                        res.write('{"ok":false,"msg":"用户名或密码错误"}');
                    } else {
                        res.write('{"ok":true,"msg":"登录成功"}');
                    }
                    break;
                default:
                    res.write('{"ok":false,"msg":"未知的act"}');
            }
            res.end();
        } else { //访问文件
            var path_file = './www'+url;
            console.log(path_file);
            fs.readFile(path_file, (err, data) => {
                if (err) {
                    res.write('404');
                } else {
                    res.write(data);
                }
                res.end();
            });
        }
    });
});
server.listen(8000, () => {
    console.log('Server is started');
})
