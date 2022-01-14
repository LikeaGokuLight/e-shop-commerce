import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/App.css';

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import Sign from "./pages/sign/sign";

import {auth} from "./firebase/firebase.utils";



class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        }

    }

    unsubscribeFromAuth =null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user })

            console.log(this.state.user)
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }


    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Routes>
                    <Route path={"/"} element={<HomePage/>} />
                    <Route path={"/shop"} element={<ShopPage/>} />
                    <Route path={"/sign"} element={<Sign/>} />
                </Routes>
            </div>
        )
    }

}


export default App;
