import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Content from '../components/Content';

function MainPage() {

    return  <>
                <div className="main-container flex">
                    <Navbar />
                    <Content />
                </div>
            </>
}

export default MainPage;
