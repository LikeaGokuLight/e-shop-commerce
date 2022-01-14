import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/App.css';

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import Sign from "./pages/sign/sign";

import {auth, createUserProfileDocument} from "./firebase/firebase.utils";



class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        }

    }

    unsubscribeFromAuth =null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth)

                userRef.onSnapshot(snapShot => {
                    this.setState({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    })

                    console.log(this.state)

                })
            }
            this.setState({ currentUser: userAuth })
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
