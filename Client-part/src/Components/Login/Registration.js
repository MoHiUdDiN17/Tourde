import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Registration = () => {
    const [error, setError] = useState();
    const navigate = useNavigate();
    const location = useLocation();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const from = location.state?.from?.pathname || '/';
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        console.log(form);
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }
    return (
        <div className="min-h-screen bg-base-200">
            <div className="">
                <div className="text-center">
                    <h1 className="text-5xl font-bold py-5">Registration!</h1>
                </div>
                <div className="card center w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input name="name" type="text" placeholder="Enter FullName" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photourl</span>
                                </label>
                                <input name="photoURL" type="text" placeholder="Enter Photourl" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="Enter Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="Enter password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                            {
                                error ? <p className=''>{error}</p> : ""
                            }
                        </div>
                    </form>
                    <div className='center'>
                        <p>Already create a account?</p>
                    </div>
                    <div className='center pb-5'><p className='text-sky-500 underline'><Link to='/login'>Login</Link></p></div>
                </div>
            </div>
        </div >
    );
};

export default Registration;
