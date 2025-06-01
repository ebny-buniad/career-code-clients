import { createBrowserRouter } from "react-router";
import RootLayout from "../../layouts/RootLayout/RootLayout";
import Home from "../../pages/Home/Home";
import Ragister from "../../pages/Ragister/Ragister";
import SignIn from "../../pages/SignIn/SignIn";
import JobDetails from "../../pages/JobDetails/JobDetails";
import ApplyJobs from "../../components/ApplyJobs/ApplyJobs";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyApplications from "../../pages/MyApplications/MyApplications";

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
            },
            {
                path: 'signin',
                Component: SignIn
            },
            {
                path: '/jobs/:id',
                Component: JobDetails,
                loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`)
            },
            {
                path: '/apply-jobs/:id',
                element: <PrivateRoute><ApplyJobs></ApplyJobs></PrivateRoute>
            },
            {
                path: 'my-applications',
                Component: MyApplications
            }
        ]
    }
])

export default router