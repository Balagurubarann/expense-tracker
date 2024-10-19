const Income = require('../models/income.model');

exports.add_income = async (req, res, next) => {

    try {

        const { amount, category, transactionTime, paidBy, description } = req.body;

        if (!amount || !paidBy) {
            return res.status(400).json({ message: "Field must be filled!", success: false });
        }

        const income = await Income.create({ amount, category, transactionTime, paidBy, description });

        if (!income) {
            return res.status(404).json({ message: "Can\'t add income", success: false });
        }

        return res.status(200).json({ message: "Income Added Successfully!", success: true });

    } catch (err) {
        next(err);
    }

}

exports.get_income = async (req, res, next) => {

    try {

        const incomes = await Income.find();

        if (!incomes) {
            return res.status(404).json({ message: "No incomes Found!", success: false });
        }

        return res.status(200).json({ message: "Incomes Found!", success: false, incomes });

    } catch (err) {
        next(err);
    }

}

exports.update_income = async (req, res, next) => {

    try {

        const { amount, category, transactionTime, paidBy, description } = req.body;

        if (!amount || !paidBy) {
            return res.status(404).json({ message: "Fields must not be empty!", success: false });
        }

        const { id } = req.params;

        const updated_income = await Income.findOneAndUpdate(
            { transactionId: id },
            {
                $set: {
                    amount,
                    category,
                    transactionTime, 
                    paidBy,
                    description
                }
            },
            { new: true }
        );

        if (!updated_income) {
            return res.status(404).json({ message: "Can\'t Update income!", success: false });
        }

        return res.status(200).json({ message: "Income Updated!", success: true, updated_income });

    } catch (err) {
        next(err);
    }

}

exports.delete_income = async (req, res, next) => {

    try {

        const { id } = req.params;

        if (!id) {
            return res.status(404).json({ message: "Transaction not found!", success: false });
        }

        await Income.deleteOne({ transactionId: id })
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
