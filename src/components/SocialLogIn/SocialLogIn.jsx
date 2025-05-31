import React, { use } from 'react';
import { AuthContext } from '../../AuthContext/AuthContext';

const SocialLogIn = () => {

    const { googleSignIn } = use(AuthContext)

    const handelGoogleLogin = () => {
        googleSignIn()
    }

    return (
        <div>
            <button onClick={handelGoogleLogin} className='btn w-full text-blue-500'>Login with Google</button>
        </div>
    );
};

export default SocialLogIn;