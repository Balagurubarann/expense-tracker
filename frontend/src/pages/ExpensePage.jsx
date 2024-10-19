import { useState } from 'react';

function ExpensePage() {

    function getCurrentDate() {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const hours = String(currentDate.getHours() > 12 ? currentDate.getHours() - 12: currentDate.getHours()).padStart(2, '0');
        const minutes = String(currentDate.getMinutes()).padStart(2, '0');

        return `${year}-${month}-${day}T${hours}:${minutes}`;
    }

    const [transactionDate, setTransactionDate] = useState(getCurrentDate());
    const [userInput, setUserInput] = useState({
        amount: 0,
        category: 'food',
        paidTo: '',
        description: '',
        account: 'cash'
    })

    function handleOnChange(e) {
        return setTransactionDate(e.target.value);
    }

    function handleUserInput(e) {
        const { name, value } = e.target;

        setUserInput(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    async function handleForm(e) {
        e.preventDefault();

        const { amount, category, account, paidTo, description } = userInput;

        console.log(userInput);

        await fetch('http://127.0.0.1:1337/home/add-expense/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount,
                category,
                account,
                paidTo, 
                description
            }),
        }) 
        .then(() => {
            console.log('Posted successfully!')
        })
        .catch(err => {
            console.log('Error happened: ', err);
        })

    }

    return  <>
                <form className="user-form expense-form" onSubmit={ handleForm }>
                    <div className="user-input user-input-row">
                        <label htmlFor="transactionTime">Transaction Time:</label>
                        <input type="datetime-local" className="bg-red border-none" name="transactionTime" id="transactionTime" value={ transactionDate }
                        onChange={ handleOnChange } required />
                    </div>
                    <div className="user-input">
                        <label htmlFor="amount">Expense Amount:</label>
                        <input type="number" name="amount" id="amount" required
                        onChange={ handleUserInput }
                        />
                    </div>
                    <div className="user-input">
                        <label htmlFor="category">Category:</label>
                        {/* <input type="text" name="category" id="category" required /> */}
                        <select required name="category" id="category" onChange={ handleUserInput } value={userInput.category} >
                            <option value="food">Food</option>
                            <option value="fuel">Fuel</option>
                            <option value="recharge">Recharge</option>
                            <option value="snack">Snack</option>
                        </select>
                    </div>
                    <div className="user-input">
                        <label htmlFor="account">Account:</label>
                        {/* <input type="text" name="category" id="category" required /> */}
                        <select required name="account" id="account" onChange={ handleUserInput }
                        value={userInput.account} >
                            <option value="cash">cash</option>
                            <option value="bankaccount">Bank Account</option>
                            <option value="pettycash">Petty Cash</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
                    <div className="user-input">
                        <label htmlFor="paidTo">Paid To:</label>
                        <input type="text" name="paidTo" id="paidTo" required 
                        onChange={ handleUserInput }
                        />
                    </div>
                    <div className="user-input">
                        <label htmlFor="description">Description:</label>
                        <input type="text" name="description" id="description" 
                        onChange={ handleUserInput }
                        />
                    </div>

                    <div className="btn-section">
                        <button type="submit" className='save'>
                            Save
                        </button>
                        <a href="/home/" className='btn cancel border-none'>
                            Cancel
                        </a>
                    </div>
                </form>
            </>
}

export default ExpensePage;
