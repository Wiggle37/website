import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './App.css';

import Home from './Home/Home';
import NotFound from './NotFound/NotFound';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='*' element={<NotFound></NotFound>}
                </Routes>
            </BrowserRouter>
        </div>
    )
}
