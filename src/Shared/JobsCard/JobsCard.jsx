import React from 'react';

const JobsCard = ({ jobs }) => {

    const { title, company_logo } = jobs

    return (
        <div>
            <div>
                <div className="card bg-base-100 shadow-sm">
                    <figure>
                        <img
                            src={company_logo}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {title}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobsCard;