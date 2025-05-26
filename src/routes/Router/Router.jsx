import { createBrowserRouter } from "react-router";
import RootLayout from "../../layouts/RootLayout/RootLayout";
import Home from "../../pages/Home/Home";
import Ragister from "../../pages/Ragister/Ragister";

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true, Component: Home
            },
            {
                path: 'register',
                Component: Ragister
            }
        ]
    }
])

export default router