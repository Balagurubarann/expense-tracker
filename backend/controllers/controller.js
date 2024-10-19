const Expense = require('../models/expense.model');
const Income = require('../models/income.model');

exports.getTransactions = async (req, res, next) => {
    
    try {
    
        const income = await Income.find();
        const expense = await Expense.find();
        
        return res.status(200).json(income);

    } catch (err) {
        next(err);
    }

}
