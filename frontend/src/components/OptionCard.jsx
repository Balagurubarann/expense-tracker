import { Link } from 'react-router-dom';
import { useState } from 'react';

function OptionCard() {

    const [currentOption, setCurrentOption] = useState('expense');

    return  <>
                <div className="option-card">
                    <div className="option">
                        <Link to="/home/add-income" className={currentOption === 'income' ? 'btn bg-success border-none': 'btn'} onClick={(e) => setCurrentOption('income')} tabIndex={1}>
                            <span>Income</span>
                        </Link>
                    </div>
                    <div className="option">
                        <Link to="/home/add-expense" className={currentOption === 'expense' ? 'btn bg-red border-none': 'btn'} onClick={(e) => setCurrentOption('expense')} tabIndex={2}>
                            <span>Expense</span>
                        </Link>
                    </div>
                </div>
            </>

}

export default OptionCard;
