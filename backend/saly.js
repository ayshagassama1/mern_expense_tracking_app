const express = require("express");

const app = express();

const expenseController = require("./controllers/expenseController");

const mongoose  = require("mongoose");

const layouts = require("express-ejs-layouts");


const User = require("./models/user");

const Expense = require("./models/expense");

app.set("view engine" ,"ejs");


mongoose.connect("mongodb://localhost:27017/expense");

const db =mongoose.connection;

db.once("open",() => {
    console.log('connected');
});


let myQuery = User.find();

myQuery.exec((error, data) => {
    if(data) console.log(`${data}`);
});

/*User.create(
    {
        firstName: "Saly",
        lastName: "Samake",
        email:"samake.saly@ugb.edu.sn",
    },
    (error, savedDocument) => {
        if(error) console.log(error);
        console.log(savedDocument);
    }
);*/

/*Expense.create(
    {
        categorie: "Alimentation",
        montant: 5000,
        date:27/12/2021,
        userId:2,
    },
    (error, savedDocument) => {
        if(error) console.log(error);
        console.log(savedDocument);
    }
);*/

// affichage des utilisateurs dans le navigateur
app.get("/users", (req, res) =>{
    User.find({}, (error, users) => {
        if(error) throw error;
        res.json(users);
    });
});

/*app.get("/expenses", (req, res) =>{
    Expense.find({}, (error, expenses) => {
        if(error) throw error;
        res.json(expenses);
    });
});*/

app.get("/expense", expenseController.getAllExpense, (req, res, next) => {
    res.render("expense",{ expenses: req.data});
});

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"),() =>{
     console.log(`Server running at http://localhost:${app.get("port")}`);
});