import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Home/Home";
import About from "./About/About";
import Terms from "./Terms/Terms"
import NotFound from "./NotFound/NotFound";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
      
                <Header items={[
                    { name: "Home", path: "/" },
                    { name: "About", path: "/about" }
                ]}></Header>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/#" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/terms" element={<Terms />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>

                <Footer></Footer>
            </BrowserRouter> 
        </div>
    );
}

export default App;