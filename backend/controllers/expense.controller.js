const Expense = require('../models/expense.model');

exports.add_expense = async (req, res, next) => {

    try {

        const { amount, category, account, transactionTime, paidTo, description } = req.body;

        if (!amount || !paidTo) {
            return res.status(400).json({ message: "Fields must be filled!", success: false });
        }

        const expense = await Expense.create({ amount, category, account, transactionTime, paidTo, description });

        if (!expense) {
            return res.status(404).json({ message: "Can\'t add expense", success: false });
        }

        return res.status(200).json({ message: "Expense Added Successfully!", success: true });

    } catch (err) {
        next(err);
    }

}

exports.get_expense = async (req, res, next) => {

    try {

        const expense = await Expense.find();

        if (!expense) {
            return res.status(404).json({ message: "No expense Found!", success: false });
        }

        return res.status(200).json({ message: "Expense Found!", success: false, expense });

    } catch (err) {
        next(err);
    }

}

// e8ef7737-c90f-4469-a1aa-1744b98a9586

exports.update_expense = async (req, res, next) => {

    try {

        const { amount, category, account, transactionTime, paidTo, description } = req.body;

        if (!amount || !paidTo) {
            return res.status(404).json({ message: "Fields must not be empty!", success: false });
        }

        const { id } = req.params;

        const updated_expense = await Expense.findOneAndUpdate(
            { transactionId: id },
            {
                $set: {
                    amount,
                    category,
                    account,
                    transactionTime, 
                    paidTo,
                    description
                }
            },
            { new: true }
        );

        if (!updated_expense) {
            return res.status(404).json({ message: "Can\'t Update expense!", success: false });
        }

        return res.status(200).json({ message: "Expense updated!", success: true, updated_expense });

    } catch (err) {
        next(err);
    }

}

exports.delete_expense = async (req, res, next) => {

    try {

        const { id } = req.params;

        if (!id) {
            return res.status(404).json({ message: "Transaction not found!", success: false });
        }

        await Expense.deleteOne({ transactionId: id })
            .then(() => {
                return res.status(200).json({ message: "Transaction deleted successfully!", success: true })
            })
            .catch(err => {
                return res.status(404).json({ message: err, success: false })
            })

    } catch (err) {
        next(err);
    }

}
