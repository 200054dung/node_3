const express = require('express')
//routes.js をよみこむ
const routes = require('./routes')

const dotenv = require('dotenv')

dotenv.config()
const host = process.env.HOST
const port = process.env.PORT

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

//ejs をつかう
app.set('view engine', 'ejs')

//routes をつかう
app.use(routes)
// layout を使う

const layouts = require('express-ejs-layouts')
app.set('layouts','layouts/default')
app.use(layouts)

//ejsをつかう
app.set('view engine','ejs')

//routesをつかう
app.use(routes)

app.listen(port, host, () => {
    console.log('http://' + host + ':' + port)
})