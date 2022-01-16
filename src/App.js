import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './styles/App.css';

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import Sign from "./pages/sign/sign";
import CheckoutPage from "./pages/checkout/checkout";

import {auth, createUserProfileDocument} from "./firebase/firebase.utils";

import {connect} from "react-redux";
import { createStructuredSelector } from "reselect";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";


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
                })
            }
            setCurrentUser(userAuth)
        })
    }

    async componentWillUnmount () {
         await this.unsubscribeFromAuth();
    }


    render() {
        return (
            <div>
                <Header />
                <Routes>
                    <Route path={"/"} element={<HomePage/>} />
                    <Route path={"/shop"} element={<ShopPage/>} />
                    <Route exact path="/sign" element={(
                        this.props.currentUser ? <Navigate to="/" /> : <Sign />
                    )} />
                    <Route path={"/checkout"} element={<CheckoutPage/>} />
                </Routes>
            </div>
        )
    }

}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
