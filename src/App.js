import React from "react";
import { Routes, Route , Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";
import Footer from './Footer/Footer';
import Copyright from './Copyright/Copyright';
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import ProductDetail from "./pages//ProductDetail";

export default class App extends React.Component {
    render() {
        return (
            <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home />} />
                    <Route path="catalog" element={<Catalog />}/>
                    <Route path="/catalog/:id" element={<ProductDetail/>} />
                </Route>        
            </Routes>
            </>
        )
    }
}

function Layout() {
    return(
        <>        
        <header>
            <Header/>
            <Navigation/>
        </header>
        <section>    
            <Outlet />
        </section>
        <footer>
            <Footer/>
            <Copyright/>
        </footer>
        </>
    )
}