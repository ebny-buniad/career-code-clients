import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Shared/Navbar/Navbar'

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default RootLayout;