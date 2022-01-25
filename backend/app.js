const express = require('express');
const dotenv  = require("dotenv");
const connectDB = require("./config/db");


const app = express();
dotenv.config();
//connectDB();



const mongoose = require('mongoose');

const layouts = require("express-ejs-layouts");

const User = require("./models/userModels");

const Expense = require("./models/expenseModels");

const userController = require('./controllers/userController');

const expenseController = require('./controllers/expenseController');

const userRoutes = require('./routes/userRoutes');
const expenseRoutes = require('./routes/expenseRoutes');

const {notFound, errorHandler} = require("./middlewares/errormiddleware");

app.set("view engine" ,"ejs");



//Connexion à la base de données 

mongoose.connect("mongodb://localhost:27017/expense");

const db =mongoose.connection;

db.once("open",() => {
    console.log('connected');
});

app.use(express.json());
app.use('/api/users',userRoutes);
app.use('/api/expenses',expenseRoutes);

app.get("/", (req, res) => {
    res.send("API is running..");
});

//app.use('/',expenseRoutes );

//app.use( notFound);
//app.use( errorHandler);








module.exports = app;