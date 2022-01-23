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
/*exports.createExpense = (req, res, next) => {
    const expense = new Expense({
      categorie: req.body.categorie,
      montant: req.body.montant,
      date: req.body.date
    });
    Expense.save().then(
      () => {
        res.status(201).json({
          message: 'Post saved successfully!'
        });
        next();
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };*/

/*exports.getOneExpense = (req, res, next) => {
	Expense.findOne({
		_id: req.params.id,
	})
		.then((expense) => {
			res.status(200).json(expense);
			next();
		})
		.catch((error) => {
			res.status(404).json({
				error: error,
			});
		});
};

exports.modifyExpense = (req, res, next) => {
	const expense = new Expense({
		_id: req.params.id,
		categorie: req.body.categorie,
		montant: req.body.montant,
		date: req.body.date,
	});
	expense
		.updateOne({ _id: req.params.id }, user)
		.then(() => {
			res.status(201).json({
				message: "Expense updated successfully!",
			});
			next();
		})
		.catch((error) => {
			res.status(400).json({
				error: error,
			});
		});
};

exports.deleteExpense = (req, res, next) => {
	Expense.deleteOne({ _id: req.params.id })
		.then(() => {
			res.status(200).json({
				message: "Deleted!",
			});
			next();
		})
		.catch((error) => {
			res.status(400).json({
				error: error,
			});
		});
};

exports.getAllExpense = (req, res, next) => {
	Expense.find({}, (error, expenses) => {
		if (error) throw error;
		req.data = expenses;
		next();
	});
};

/*exports.getAllUser = (req, res, next) => {
    User.find().then(
      (users) => {
        res.status(200).json(users);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };*/
