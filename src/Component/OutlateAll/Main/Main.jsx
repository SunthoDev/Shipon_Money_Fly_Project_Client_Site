import React from 'react';
import "./Main.css"
import { Outlet,useLocation  } from 'react-router-dom';
import Header from '../Header/Header';
import HeaderBottom from '../HeaderBottom/HeaderBottom';
import Footer from '../Footer/Footer';

const Main = () => {

    const location = useLocation();

    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;