import { useState, useEffect } from "react";

function Transactions() {

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {

         fetch('http://127.0.0.1:1337/home/expenses/')

            .then(response => response.json())
            .then(data => {
                const { expense } = data;

            })
            .catch(err => {
                console.log(err);
            })

    }, [])

    return  <>
                <p>
                    User Transactions
                    { transactions }
                </p>
            </>

}

export default Transactions;
