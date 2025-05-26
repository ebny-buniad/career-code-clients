import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Shared/Navbar/Navbar'
import Footer from '../../Shared/Footer/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;