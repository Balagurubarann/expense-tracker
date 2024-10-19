import { useState } from 'react';

function IncomePage() {

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

    function handleOnChange(e) {
        return setTransactionDate(e.target.value);
    }

    return  <>
                <form className="user-form income-form">
                    <div className="user-input user-input-row">
                        <label htmlFor="transaction-date">Transaction Date:</label>
                        <input type="datetime-local" className="bg-success border-none" name="transaction-date" id="transaction-date" value={ transactionDate }
                        onChange={ handleOnChange } required />
                    </div>
                    <div className="user-input">
                        <label htmlFor="amount">Income Amount:</label>
                        <input type="number" name="amount" id="amount" required />
                    </div>
                    <div className="user-input">
                        <label htmlFor="category">Category:</label>
                        {/* <input type="text" name="category" id="category" required /> */}
                        <select required name="category" id="category">
                            <option value="cash">cash</option>
                            <option value="bankaccount">Bank Account</option>
                            <option value="pettycash">Petty Cash</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
                    <div className="user-input">
                        <label htmlFor="paidBy">Paid By:</label>
                        <input type="text" name="paidBy" id="paidBy" required />
                    </div>
                    <div className="user-input">
                        <label htmlFor="description">Description:</label>
                        <input type="text" name="description" id="description" />
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
