import IncomePage from './IncomePage';
import ExpensePage from './ExpensePage';
import OptionCard from '../components/OptionCard';
import Navbar from '../components/Navbar';

import { Routes, Route } from 'react-router-dom';

function HomePage() {



    return  <>
                <Navbar />
                {/* <div className="main-container">
                    
                    <Routes>
                        <Route path='/home/add-income' element={<IncomePage />} />
                        <Route path='/home/add-expense' element={<ExpensePage />} />
                    </Routes>
                </div> */}
            </>
}

export default HomePage;
