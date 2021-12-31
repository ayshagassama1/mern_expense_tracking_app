const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

const expenseController = require('../controllers/expenseController');

//const Expense = require("../models/expense");

/*router.get("/", expenseController.getAllExpense,  (req, res, next) => {
    res.render("expense",{ expenses: req.data});
});

router.get("/", userController.createUser,  (req, res, next) => {
    res.render("user");
});

router.get("/:id", userController.getOneUser,  (req, res, next) => {
    res.render("user");
});

router.get("/:id", userController.modifyUser,  (req, res, next) => {
    res.render("user");
});*/

/*router.get("/", userController.getAllUser,  (req, res, next) => {
    res.render("user",{ users: req.data});
});
/*router.get('/', expenseController.getAllExpense);
/*router.post('/', userController.createUser);
router.get('/:id', userController.getOneUser);
router.put('/:id', userController.modifyUser);
router.delete('/:id', userController.deleteUser);*/

module.exports = router;