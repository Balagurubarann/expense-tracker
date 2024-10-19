import { useState } from 'react';

function TransactionPage() {

    const [transactions, setTransactions] = useState({});

    const response = fetch('http://127.0.0.1:1337/home/transactions');

    setTransactions(() => response);

    return  <>

                <p>
                    { transactions }
                </p>

            </>

}

export default TransactionPage;
