const mongoose = require("mongoose");

const expenseSchema = mongoose.Schema({
    categorie: {type: String, required: true},
    montant : { type: Number, required: true},
    date : {type: Date, required: true},
    userId:{ type:Number, required:true},
});

module.exports = mongoose.model("Expense",expenseSchema);