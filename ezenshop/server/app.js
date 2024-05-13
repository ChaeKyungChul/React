const express = require("express");
const bodyParser = require("body-parser");
const nunjucks = require("nunjucks");
const path = require('path');

const app = express();
const port = 5000;

//nunjucks 설정
nunjucks.configure('html', {
    autoescape: true,
    express: app
});

//정적파일이 저장된 디렉토리 설정
app.use(express.static('public'));

/*
const indexHtml = path.join(__dirname, '/html/index.html');
const joinHtml = path.join(__dirname, '/html/join.html');
const usersHtml = path.join(__dirname, '/html/users.html');
*/

//데이터 저장을 위한 배열
let users = [];

//미들웨어 body-parser 
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

//첫 페이지
app.get('/', (req, res)=> {
    res.render('index.html');
    //res.sendFile(indexHtml);
});
app.get('/join', (req, res)=> {
    res.render('join.html');
    //res.sendFile(joinHtml);
});
app.post('/join', (req, res)=>{
    const { username, userpass, useremail } = req.body;
    const newUser = { 
        id: users.length + 1,
        username,
        userpass,
        useremail
    };

    users.push(newUser);
    console.table(users);
    res.redirect('/users');
});

app.get('/users', (req, res)=> {
    res.render('users.html', {users});
    //res.sendFile(usersHtml);
});

app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`);
});