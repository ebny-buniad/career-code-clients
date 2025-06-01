import React, { use } from 'react';
import { AuthContext } from '../../AuthContext/AuthContext';
import { Navigate, useNavigate } from 'react-router';

const SocialLogIn = ({ l_State }) => {

    const { googleSignIn } = use(AuthContext)
    const navigate = useNavigate();

    const handelGoogleLogin = () => {
        googleSignIn()
            .then(() => {
               navigate(l_State || '/')
            })
            .catch(() => {

            })

    }

    return (
        <div>
            <button onClick={handelGoogleLogin} className='btn w-full text-blue-500'>Login with Google</button>
        </div>
    );
};

export default SocialLogIn;