const Expense = require("../models/expenseModels");
const asyncHandler = require("express-async-handler");

const getExpense = asyncHandler(async (req, res) => {
     const expenses = await Expense.find(req.user._id);
     res.json(expenses);
});

const  createExpense = asyncHandler(async(req, res) => {
  const { category , montant} = req.body;
  

  if(!category || !montant) {
    res.status(400);
    throw new Error("Please Fill all the Feilds");

  } else {
    const expense = new Expense({ user: req.user._id, category, montant});

    const createExpense = await expense.save();

    res.status(201).json(createExpense);

  }
});

const getExpenseId = asyncHandler(async (req, res) => {
  const expense = await Expense.findById(req.params.id);

  if(expense) {
    res.json(expense);
  } else {
    res.status(404).json({ message: "Expense not found"});
  }
  //res.json(expense);
});


const UpdateExpense =  asyncHandler(async(req, res) => {
  const { category, montant} = req.body;

  const expense = await Expense.findById(req.params.id);

  if(expense.user.toString() !==  req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  } 

  if(expense) {
    expense.category = category;
    expense.montant = montant;

    const updatedExpense = await expense.save();
    res.json(updatedExpense);
  } else {
    res.status(404);
    throw new Error("Expense not found");
  }
});

const DeleteExpense = asyncHandler (async(req, res) => {
  const expense = await Expense.findById(req.params.id);

  if(expense.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if(expense) {
    await expense.remove();
    res.json({ message: "Expense Removed"});
  } else {
    res.status(404);
    throw new Error("Expense not found");
  }
});
module.exports ={getExpense, createExpense, getExpenseId, UpdateExpense, DeleteExpense};