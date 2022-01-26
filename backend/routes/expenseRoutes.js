const express = require('express');

const router = express.Router();


const {getExpense, createExpense, getExpenseId, UpdateExpense, DeleteExpense}= require('../controllers/expenseController');
const { protect} = require('../middlewares/authmiddleware');
//const Expense = require("../models/expense");

router.route("/").get(protect, getExpense);
router.route("/create").post(protect, createExpense);
router
    .route("/:id")
    .get(getExpenseId)
    .put(protect, UpdateExpense)
    .delete(protect, DeleteExpense);


module.exports = router;
//.put().delete();

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

