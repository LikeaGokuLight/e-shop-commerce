import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/App.css';

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import Sign from "./pages/sign/sign";


const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path={"/"} element={<HomePage/>} />
                <Route path={"/shop"} element={<ShopPage/>} />
                <Route path={"/sign"} element={<Sign/>} />
            </Routes>
        </div>
    )
}


export default App;
