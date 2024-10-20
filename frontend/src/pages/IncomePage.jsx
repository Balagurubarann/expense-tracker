import { useState } from 'react';
import OptionCard from '../components/OptionCard';


function IncomePage() {
    
    const [transactionDate, setTransactionDate] = useState(getCurrentDate());
    const [userData, setUserData] = useState({
        amount: '',
        category: 'cash',
        paidBy: '',
        description: ''
    });

    function getCurrentDate() {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const hours = String(currentDate.getHours() > 12 ? currentDate.getHours() - 12: currentDate.getHours()).padStart(2, '0');
        const minutes = String(currentDate.getMinutes()).padStart(2, '0');

        return `${year}-${month}-${day}T${hours}:${minutes}`;
    }

    function handleOnChange(e) {
        return setTransactionDate(e.target.value);
    }

    function handleUserInput(e) {
        const { name, value } = e.target;

        setUserData((prevData) => ({
            ...prevData,
            [name]: value
        }))

    }

    async function handleForm(e) {
        e.preventDefault();

        const { amount, category, paidBy, description } = userData;

        console.log(userData);

        await fetch('http://127.0.0.1:1337/home/add-income/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount,
                category,
                paidBy, 
                description
            }),
        }) 
        .then(() => {
            console.log('Income posted successfully!')
        })
        .catch(err => {
            console.log('Error happened: ', err);
        })

    }

    return  <>
    
                <form className="user-form income-form" onSubmit={ handleForm }>
                    <OptionCard />
                    <div className="user-input user-input-row">
                        <label htmlFor="transaction-date">Transaction Date:</label>
                        <input type="datetime-local" className="bg-success border-none" name="transaction-date" id="transaction-date" value={ transactionDate }
                        onChange={ handleOnChange } required />
                    </div>
                    <div className="user-input">
                        <label htmlFor="amount">Income Amount:</label>
                        <input type="number" name="amount" id="amount" required
                        onChange={ handleUserInput }
                        />
                    </div>
                    <div className="user-input">
                        <label htmlFor="category">Category:</label>
                        {/* <input type="text" name="category" id="category" required /> */}
                        <select required name="category" id="category" onChange={ handleUserInput }>
                            <option value="cash">cash</option>
                            <option value="bankaccount">Bank Account</option>
                            <option value="pettycash">Petty Cash</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
                    <div className="user-input">
                        <label htmlFor="paidBy">Paid By:</label>
                        <input type="text" name="paidBy" id="paidBy" required 
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

export default IncomePage;
