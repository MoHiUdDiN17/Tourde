import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import './Login.css'
const Login = () => {
    const [error, setError] = useState('');
    const { signIn, setLoading, providerLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                const currentUser = {
                    email: user.email
                }

                console.log(currentUser);

                // get jwt token
                fetch('https://assignment-11-mohiuddinngbhs-gmailcom.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        // local storage is the easiest but not the best place to store jwt token
                        localStorage.setItem('genius-token', data.token);
                        navigate(from, { replace: true });
                    });
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
            })

    }
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        console.log(form);
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');

                const currentUser = {
                    email: user.email
                }

                console.log(currentUser);

                // get jwt token
                fetch('https://assignment-11-mohiuddinngbhs-gmailcom.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        // local storage is the easiest but not the best place to store jwt token
                        localStorage.setItem('genius-token', data.token);
                        navigate(from, { replace: true });
                    });
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }
    return (
        <div className="min-h-screen bg-base-200">
            <div className="">
                <div className="text-center">
                    <h1 className="text-5xl font-bold py-5">Login!</h1>
                </div>
                <div className="card center w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" />
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
                        <p>Have not create a account?</p>
                    </div>
                    <div className='center'><p className='text-sky-500 underline'><Link to='/registration'>create a new account</Link></p></div>
                    <div className='py-5 center'>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-secondary"><i class="fa-brands fa-google mr-2"></i> Login with Google</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;