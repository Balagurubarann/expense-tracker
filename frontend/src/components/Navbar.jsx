import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

    return  <>
                <div className="navbar">
                    <div className="logo">
                        <span>MONEY</span><p>MANAGER</p>
                    </div>
                    <div className="action-container">
                        <Link className="action-btn" to="/home/">
                            Transactions
                        </Link>
                        <Link className="action-btn" to="/home/stats/">
                            Stats
                        </Link>
                        <Link className="action-btn" to="/home/add-expense/">
                            Add
                        </Link>
                        <Link className="action-btn" to="/home/bills/">
                            Billings
                        </Link>
                        <Link className="action-btn" to="/home/budget/">
                            Budget
                        </Link>
                        <Link className="action-btn" to="/settings/">
                            Settings
                        </Link>
                    </div>
                </div>
            </>

}

export default Navbar;
