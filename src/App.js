import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/App.css';

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import Sign from "./pages/sign/sign";

import {auth, createUserProfileDocument} from "./firebase/firebase.utils";

import {connect} from "react-redux";

import { setCurrentUser } from "./redux/user/user.actions";


class App extends React.Component {

    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth)

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id:snapShot.id,
                        ...snapShot.data()
                    })

                    console.log(this.state)

                })
            }
            setCurrentUser(userAuth)
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }


    render() {
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

}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
    null, mapDispatchToProps
)(App);
