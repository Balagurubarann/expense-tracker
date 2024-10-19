const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const incomeSchema = new mongoose.Schema({
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
    
    transactionTime: {
        type: Date,
        default: Date.now
    },
    paidBy: {
        type: String,
        required: true
    },
    description : {
        type: String
    }

}, {
    timestamps: true
});

const IncomeModel = mongoose.model("Income", incomeSchema);

module.exports = IncomeModel;
