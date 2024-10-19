const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');


const expenseSchema = new mongoose.Schema({
    
    transactionId: {
        type: String,
        default: uuidv4
    },
    amount: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    account: {
        type: String,
        required: true
    },
    transactionTime: {
        type: Date,
        default: Date.now
    },
    paidTo: {
        type: String,
        required: true
    },
    description : {
        type: String
    }

}, {
    timestamps: true
});

const ExpenseModel = mongoose.model("expense", expenseSchema);

module.exports = ExpenseModel;
