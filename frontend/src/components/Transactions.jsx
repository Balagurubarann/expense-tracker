import { useState, useEffect } from "react";

function Transactions() {

    const [userExpense, setUserExpense] = useState([]);
    const [userIncome, setUserIncome] = useState([]);

    async function fetchExpense() {

        try {

        const response = await fetch('http://127.0.0.1:1337/home/expenses/');
        const result = await response.json();

        const { expense } = result;

        setUserExpense(expense);

        console.log(expense);

        } catch (err) {
            throw err;
        }

    }

    async function fetchIncome() {

        try {

        const response = await fetch('http://127.0.0.1:1337/home/incomes/');
        const result = await response.json();

        const { incomes } = result;

        setUserIncome(incomes);

        console.log(incomes);

        } catch (err) {
            throw err;
        }

    }

    useEffect(() => {

        fetchExpense();
        fetchIncome();

    }, [])

    return  <>
                <p>
                    User Transactions

                    {
                        userExpense.map((exp, index) => (
                            <li key={index}>{exp.amount}</li>
                        ))
                    }

                </p>
            </>

}

export default Transactions;
