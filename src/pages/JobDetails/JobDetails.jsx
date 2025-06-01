import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const { title, jobType, status, applicationDeadline, _id } = useLoaderData();
    return (
        <div className='m-10 shadow py-10 px-5 space-y-5'>
            <h3 className='text-2xl font-bold'>{title}</h3>
            <p>Job Type: {jobType}</p>
            <p>Date: {applicationDeadline}</p>
            <p>Status: {status}</p>

            <Link to={`/apply-jobs/${_id}`}><button className='btn'>Apply Now</button></Link>
        </div>
    );
};

export default JobDetails;