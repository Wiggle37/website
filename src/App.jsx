import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Terms from "./Pages/Terms/Terms";

import Account from "./Pages/Accounts/Account/Account";
import Login from "./Pages/Accounts/Login/Login";
import CreateAccount from "./Pages/Accounts/CreateAccount/CreateAccout"

import NotFound from "./Pages/NotFound/NotFound";

import Test from "./Pages/Test/Test"

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

                    <Route path="/account" element={<Account />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/createaccount" element={<CreateAccount/>} />

                    <Route path="*" element={<NotFound />} />

                    <Route path="/test" element={<Test />} />
                </Routes>

                <Footer></Footer>
            </BrowserRouter> 
        </div>
    );
}

export default App;