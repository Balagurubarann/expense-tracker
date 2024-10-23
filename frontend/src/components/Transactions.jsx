import { useState, useEffect } from "react";
import "./styles/transaction.css";

function Transactions() {

    const [userExpense, setUserExpense] = useState([]);
    const [userIncome, setUserIncome] = useState([]);

    async function fetchTransaction() {

        try {

            const expenseResponse = await fetch('http://127.0.0.1:1337/home/expenses/');
            const expenseResult = await expenseResponse.json();

            const incomeResponse = await fetch('http://127.0.0.1:1337/home/incomes/');
            const incomeResult = await incomeResponse.json();

            const { expense } = expenseResult;
            const { incomes } = incomeResult;

            setUserExpense(expense);
            setUserIncome(incomes);

            console.log(expense);
            console.log(incomes);

        } catch (err) {
            throw err;
        }

    }

    useEffect(() => {

        fetchTransaction();

    }, [])

    return  <>
                <div className="transaction-container">
                    <div className="expense-container">
                        {   
                            userExpense.reduce((exp, total) => exp.amount + total)
                        }
                    </div>
                </div>
            </>

}

export default Transactions;
