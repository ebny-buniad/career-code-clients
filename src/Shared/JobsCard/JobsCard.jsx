import React from 'react';
import { Link } from 'react-router';

const JobsCard = ({ jobs }) => {

    const { title, company_logo, location, company, _id, description, requirements, salaryRange } = jobs

    return (
        <div>
            <div>
                <div className="card bg-base-100 shadow-sm">
                    <figure className='flex gap-4'>
                        <img
                            src={company_logo}
                            alt="Shoes" />
                        <div>
                            <h3 className='text-2xl font-bold'>{company}</h3>
                            <p>{location}</p>
                        </div>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {title}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>{description}</p>
                        <div className="card-actions">
                            {
                                requirements.map((skill, index) => <div key={index} className="badge badge-outline">{skill}</div>)
                            }

                        </div>
                        <p>Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                        <div className="card-actions justify-end">
                            <Link to={`/jobs/${_id}`}><button className="btn btn-primary">See Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobsCard;