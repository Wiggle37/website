import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
