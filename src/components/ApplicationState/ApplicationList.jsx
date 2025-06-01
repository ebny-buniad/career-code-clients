import React, { use } from 'react';
import ApplicationsTable from '../ApplicationsTable/ApplicationsTable';

const ApplicationList = ({ myApplicationsPromise }) => {

    const applications = use(myApplicationsPromise);
    console.log(applications)

    return (
        <div>
            Application List {applications.length}

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                SL
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map((application, index) => <ApplicationsTable key={application._id} application={application} index={index}></ApplicationsTable>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApplicationList;