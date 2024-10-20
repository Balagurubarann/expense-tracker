import { useState, useEffect } from 'react';

function ExpenseInfo() {

    const [transactions, setTransactions] = useState({
        
    });

    useEffect(() => {

        fetch('http://127.0.0.1:1337/home/transactions/')
            .then((response) => response.json())
            .then(json => {
                return setTransactions(() => {
                    json
                })
            })

    }, [transactions])

    return  <>

                <p>
                    { transactions }
                </p>

            </>

}

export default ExpenseInfo;
