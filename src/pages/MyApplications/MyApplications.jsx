import React, { Suspense, use } from 'react';
import ApplicationState from '../../components/ApplicationState/ApplicationState';
import ApplicationList from '../../components/ApplicationState/ApplicationList';
import { AuthContext } from '../../AuthContext/AuthContext';

const myApplicationsPromise = email => {
    return fetch(`http://localhost:3000/applications?email=${email}`).then(res => res.json())
}

const MyApplications = () => {

    const { user } = use(AuthContext);

    return (
        <div>
            My Applications

            <ApplicationState></ApplicationState>
            <Suspense fallback={<p>Loading...</p>}>
                <ApplicationList myApplicationsPromise={myApplicationsPromise(user?.email)}></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;