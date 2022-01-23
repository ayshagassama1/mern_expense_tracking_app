const mongoose = require("mongoose");

const expenseSchema = mongoose.Schema({
    category: {
        type: String, 
        required: true
    },
    montant : {
         type: Number,
          required: true
        },
    user:{ 
        type: mongoose.Schema.Types.ObjectId, 
        required: true,
        ref: "User",
    },
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Expense",expenseSchema);