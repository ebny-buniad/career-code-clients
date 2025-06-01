import axios from 'axios';
import React, { use } from 'react';
import { useParams } from 'react-router';
import { AuthContext } from '../../AuthContext/AuthContext';
import Swal from 'sweetalert2';

const ApplyJobs = () => {

    const { user } = use(AuthContext)
    const { id: jobID } = useParams();

    const handelApplyJob = e => {
        e.preventDefault();

        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;

        console.log(linkedin, github, resume)

        const application = {
            jobID,
            applicant: user.email,
            linkedin,
            github,
            resume
        }

        axios.post('http://localhost:3000/applications', {
            application
        })
            .then((data) => {
                console.log(data.data.insertedId)
                if (data.data) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch((error) => {
                console.log(error)
            })

    }

    return (
        <div>
            <form onSubmit={handelApplyJob} className='w-96 mx-auto my-5 py-5 shadow text-center rounded-xl space-y-2'>
                Apply Job <br /> <br />

                <label className="input validator">
                    <input
                        name='linkedin'
                        type="text"
                        required
                        placeholder="LinkedIn URL"
                    />
                </label>
                <label className="input validator">
                    <input
                        name='github'
                        type="text"
                        required
                        placeholder="Github URL"
                    />
                </label>
                <label className="input validator">
                    <input
                        name='resume'
                        type="text"
                        required
                        placeholder="Resume URL"
                    />
                </label> <br />
                <input className='btn' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ApplyJobs;