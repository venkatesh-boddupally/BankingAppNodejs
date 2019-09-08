const fs = require('fs');
const path = require('path');
const { accounts, users, writeJSON} = require('./data')
const servicesRoutes = require('../src/routes/services')
const accountRoutes = require('../src/routes/accounts')

const express = require('express')
const app = express();

const DataFolderPath = path.join(__dirname, 'json')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))
app.use('/account', accountRoutes)
app.use('/services', servicesRoutes)


app.get('/profile', (req, res) => {
    return res.render('profile', {user: users[0]})
})

app.get('/', (req, res) => {
    return res.render('index', {title: 'Account Summary', accounts: accounts})
})


app.listen(3000, ()=>{
    console.log('Application started')
})