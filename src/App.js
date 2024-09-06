import React from "react"
import Header from "./Header"
import HeaderImage from "./HeaderImage"
import Body from "./Body"
import Footer from "./Footer"
import { Route } from "react-router-dom"
import { Routes } from 'react-router-dom';
import Login from './authentication/Login';
import SignUp from './authentication/SignUp';

function App(){
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element ={<Login />} />
                <Route path="/SignUp" element ={<SignUp />} />
            </Routes>
        </div>
    )
}

function Home(){
    return (
        <div>
            <HeaderImage />
            <Body />
            <Footer />
        </div>
    )
}

export default App