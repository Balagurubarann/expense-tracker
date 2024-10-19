import { useState } from 'react';

function Navbar() {

    return  <>
                <div className="navbar">
                    <div className="logo">
                        <span>MONEY</span><p>MANAGER</p>
                    </div>
                    <div className="action-container">
                        <button className="action-btn">
                            <i className="fas fa-exchange"></i>
                        </button>
                        <button className="action-btn">
                            <i className="fas fa-exchange"></i>
                        </button>
                        <button className="action-btn">
                            <i className="fas fa-exchange"></i>
                        </button>
                        <button className="action-btn">
                            <i className="fas fa-exchange"></i>
                        </button>
                        <button className="action-btn">
                            <i className="fas fa-exchange"></i>
                        </button>
                        <button className="action-btn">
                            <i className="fas fa-exchange"></i>
                        </button>
                    </div>
                </div>
            </>

}

export default Navbar;
