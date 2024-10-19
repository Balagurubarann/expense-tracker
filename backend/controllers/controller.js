const Expense = require('../models/expense.model');
const Income = require('../models/income.model');

exports.getTransactions = async (req, res, next) => {
    
    try {
    
        const expense = await Expense.find();
        const income = await Income.find();
        
        return res.status(200).json({ message: "fetched transaction", expense, income });

    } catch (err) {
        next(err);
    }

}
