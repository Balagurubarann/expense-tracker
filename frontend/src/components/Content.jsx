import { Route, Routes } from 'react-router-dom';

import IncomePage from '../pages/IncomePage';
import ExpensePage from '../pages/ExpensePage';
import Transactions from './Transactions';

function Content() {
    
    return  <div className='content flex flex-col center'>
                
                <Routes>
                    <Route path='/home/add-income/' element={ <IncomePage /> } />
                    <Route path='/home/add-expense/' element={ <ExpensePage /> } />
                    <Route path='/home/transactions/' element={ <Transactions /> } />
                </Routes>
    
            </div>

}

export default Content;
