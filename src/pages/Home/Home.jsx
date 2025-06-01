import React, { Suspense } from 'react';
import HotJobs from './HotJobs';

const jobsPromise = fetch('http://localhost:3000/jobs').then(res => res.json());

const Home = () => {
    return (
        <div>
            Home

            <Suspense fallback={<p>Loading Jobs...</p>}>
                <HotJobs jobsPromise={jobsPromise}></HotJobs>
            </Suspense>
        </div>
    );
};

export default Home;