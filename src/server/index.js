import 'babel-polyfill'
import express from 'express'
import bodyParser from 'body-parser'
import mailer from './mailer'
import mysql from 'mysql'

const app = express();
const PORT =process.env.PORT || 4000;
let user = undefined;

app.use(bodyParser.urlencoded({ extended: true }))
app.post('/registration', (req, res) => { 
    if(!req.body.email || !req.body.pass) return res.sendStatus(400)   
    const message = {        
        to: req.body.email,
        subject: 'Congratulations! You are successfully registred on our site',
        html: `
        <h2Congratulations, you have successfully registered on our Website!</h2>
        
        <i>your account details:</i>
        <ul>
            <li>login: ${req.body.email}</li>
            <li>password: ${req.body.pass}</li>
        </ul>
       <p>To confirm your Email, please, click on the link
        <a href="http://localhost:4000/confirmemail/${req.body.email}">Confirm Email</a>`
    }
    mailer(message) 
    user = req.body 
    console.log(res)
    res.redirect('http://localhost:3000/signup/#success')
    addUser(user.name,user.email,user.pass)
    user = undefined  
})

app.get('/confirmemail/:email', (req, res) => {
    res.redirect('http://localhost:3000/auth/#success')
    confirmEmail(req.params.email)
})

app.listen(PORT, () => console.log(`server listening at http://localhost:${PORT}/registration`))


let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'customtshirts',
    port: 3306
})

connection.connect((err) => {
    if(err){
        throw err
    }
    console.log('MySql Connected...')
});

app.post('/buying', (req,res) => {
    res.send(req.body.size)
})

app.get('/getusers',(req,res) => {
    let sql = 'SELECT * FROM users'
    let query = connection.query(sql, (err,results) => {
        if(err) throw err;
        res.send(results);
    })
})

app.get('/gettshirts',(req,res) => {
    let sql = 'SELECT * FROM tshirtsWithRating'
    let query = connection.query(sql, (err,results) => {
        if(err) throw err;
        res.send(results);
    })
})

app.get('/comments',(req,res) => {
    let sql = 'SELECT * FROM commentsWithNames'
    let query = connection.query(sql, (err,results) => {
        if(err) throw err;
        res.send(results);
    })
})

app.get('/gettshirts/:id',(req,res) => {
    let sql = `SELECT * FROM tshirtsWithRating WHERE tsId=${req.params.id}`;
    let query = connection.query(sql, (err,result) => {
        if(err) throw err;
        res.send(result);
    })
})

app.get('/getuser/:uName',(req,res) => {
    let sql = `SELECT * FROM userPortfolio WHERE uName="${req.params.uName}"`;
    let query = connection.query(sql, (err,result) => {
        if(err) throw err;
        res.send(result);
    })
})

app.get('/getuserinfo/:uName',(req,res) => {
    let sql = `SELECT * FROM users WHERE uName="${req.params.uName}"`;
    let query = connection.query(sql, (err,result) => {
        if(err) throw err;
        res.send(result);
    })
})

app.get('/getcomments/:id',(req,res) => {
    let sql = `SELECT * FROM commentsWithNames WHERE tshirtId=${req.params.id}`;
    let query = connection.query(sql, (err,results) => {
        if(err) throw err;
        res.send(results);
    })
})

function addUser(userName, userEmail, userPassword){
    let post={
        uId:null,
        uName:userName,
        uEmail:userEmail,
        uPassword:userPassword,
        uRole:'user',
        confirmEmail:false,
        interfacelanguage:null,
        interfaceTheme:null 
    }
    let sql= 'INSERT INTO users SET ?';
    let query=connection.query(sql,post, (err,result) => {
        if(err) throw err;
        console.log('New user added in table')
    })
}

function confirmEmail(userEmail){
    let sql=`UPDATE users SET confirmEmail=${true} WHERE uEmail = "${userEmail}"`;
    let query=connection.query(sql, (err,result) => {
        if(err) throw err;
        console.log(result);
    })
}