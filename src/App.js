import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './App.css';
import Home from './Home/Home'

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
