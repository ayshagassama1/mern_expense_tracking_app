const Expense = require("../models/expense");

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

exports.getOneExpense = (req, res, next) => {
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
