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