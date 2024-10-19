import { Route, Routes } from 'react-router-dom';

import IncomePage from '../pages/IncomePage';
import ExpensePage from '../pages/ExpensePage';
import TransactionPage from '../pages/TransactionPage';

function Content() {
    
    return  <div className='content flex flex-col center'>
                
                <Routes>
                    <Route path='/home/add-income/' element={ <IncomePage /> } />
                    <Route path='/home/add-expense/' element={ <ExpensePage /> } />
                    <Route path='/home/transactions/' element={ <TransactionPage /> } />
                </Routes>
    
            </div>

}

export default Content;
