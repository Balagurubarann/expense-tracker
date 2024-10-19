import { useState, useEffect } from 'react';

function TransactionPage() {

    const [transactions, setTransactions] = useState('');

    useEffect(() => {

        const response = fetch('http://127.0.0.1:1337/home/transactions');

        setTransactions(() => response);

    }, [transactions])

    return  <>

                <p>
                    { transactions }
                </p>

            </>

}

export default TransactionPage;
