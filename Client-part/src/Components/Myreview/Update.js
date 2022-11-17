import React, { useContext } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Update = () => {
    const reviewdetails = useLoaderData();
    const { _id, message } = reviewdetails[0];
    const { user } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const UpdateReview = event => {
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;
        console.log(message);
        fetch(`https://assignment-11-mohiuddinngbhs-gmailcom.vercel.app/update/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify({ message: message })
        })
            .then(res => res.json())
            .then(data => {
                form.reset();
                navigate(from, { replace: true });
            })
    }

    return (
        <div className="form-control mx-10">
            <form onSubmit={UpdateReview}>
                <label className="label">
                    <span className="label-text">Review</span>
                </label>
                <textarea name="message" type="text" className="textarea textarea-bordered h-24 w-full">{message}</textarea>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    );
};

export default Update;