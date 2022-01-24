import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Header items={[
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' }
      ]}></Header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
