const express = require('express');

const app = express();

const mongoose = require('mongoose');

const layouts = require("express-ejs-layouts");

const User = require("./models/user");

const Expense = require("./models/expense");

const userController = require('./controllers/userController');

const expenseController = require('./controllers/expenseController');

const userRoutes = require('./routes/user');
const expenseRoutes = require('./routes/expense');

app.set("view engine" ,"ejs");

//Connexion à la base de données 

mongoose.connect("mongodb://localhost:27017/expense");

const db =mongoose.connection;

db.once("open",() => {
    console.log('connected');
});

//app.use('/',expenseRoutes );
app.use('/',userRoutes);








module.exports = app;