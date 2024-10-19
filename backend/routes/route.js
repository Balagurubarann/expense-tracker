const router = require('express').Router();

// CONTROLLERS
const incomeController = require('../controllers/income.controller');
const expenseController = require('../controllers/expense.controller');
const controller = require('../controllers/controller');

// INCOME ROUTER
router
    .post('/home/add-income', incomeController.add_income)
    .get('/home/incomes', incomeController.get_income)
    .put('/home/update-income/:id', incomeController.update_income)
    .delete('/home/delete-income/:id', incomeController.delete_income);

// EXPENSE ROUTER
router
    .post('/home/add-expense', expenseController.add_expense)
    .get('/home/expenses', expenseController.get_expense)
    .put('/home/update-expense/:id', expenseController.update_expense)
    .delete('/home/delete-expense/:id', expenseController.delete_expense);

router
    .get('/home/transactions', controller.getTransactions);

module.exports = router;
