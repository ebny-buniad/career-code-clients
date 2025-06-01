import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../AuthContext/AuthContext';
import SocialLogIn from '../../components/SocialLogIn/SocialLogIn';



const SignIn = () => {

    const location = useLocation();
    const l_State = location.state;
    const navigate = useNavigate()

    const { signin } = use(AuthContext)
    const handelSignIn = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        signin(email, password)
            .then(() => {
                navigate(l_State || '/')
            })
            .catch(() => {
            })
    }


    return (
        <div>
            <div className="hero h-[600px]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src="https://static.vecteezy.com/system/resources/previews/010/925/404/non_2x/registration-page-name-and-password-field-fill-in-form-menu-bar-corporate-website-create-account-user-information-flat-design-modern-illustration-vector.jpg" alt="" />
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h3 className='text-xl font-bold'>Sign In</h3>
                            <form onSubmit={handelSignIn}>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input name='email' type="email" className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input name='password' type="password" className="input" placeholder="Password" />
                                    <p>Forget password?</p>
                                    <button type='submit' className="btn btn-neutral mt-4">Sign In</button>
                                </fieldset>
                            </form>
                            <SocialLogIn l_State={l_State}></SocialLogIn>
                            <p><Link to='/register'>Don't have an account? Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;