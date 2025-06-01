import React, { use } from 'react';
import JobsCard from '../../Shared/JobsCard/JobsCard';

const HotJobs = ({ jobsPromise }) => {
    const jobsData = use(jobsPromise);
    console.log(jobsData)



    return (
        <div className='w-8/12 mx-auto'>

            <h2 className='font-bold text-xl py-5'>Total Jobs {jobsData.length}</h2>
            <div className='grid grid-cols-3 gap-10'>
                {
                    jobsData.map(jobs => <JobsCard key={jobs._id} jobs={jobs}></JobsCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;