import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import './styles/App.css';

import HomePage from "./pages/homepage/homepage";


const HatsPage = () => <div><h1>Hats Page</h1></div>


const App = () => {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<HomePage/>} />
                <Route path={"/shop/hats"} element={<HatsPage/>} />
            </Routes>
        </div>
    )
}


export default App;
