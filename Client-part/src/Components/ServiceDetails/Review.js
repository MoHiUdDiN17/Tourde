import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Review = (props) => {
    const { _id, name } = props.serviceDetails;
    const { user } = useContext(AuthContext);
    console.log(_id);
    const placeReview = event => {
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;
        const review = {
            service: _id,
            serviceName: name,
            photoURL: user.photoURL,
            email: user.email,
            message: message
        }
        console.log(review);
        fetch("https://assignment-11-mohiuddinngbhs-gmailcom.vercel.app/reviews", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(review)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                if (data.acknowledged) {
                    alert('Review is added successfully')
                    form.reset();
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };
    return (
        <div>
            <form onSubmit={placeReview} className='adjust'>
                <textarea name="message" type="text" className="textarea textarea-bordered h-24 w-full" placeholder="Enter Your Review" required></textarea>
                <input className='btn' type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default Review; 