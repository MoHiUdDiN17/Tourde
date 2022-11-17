import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import './AddService.css'
const AddService = () => {
    const { user } = useContext(AuthContext);
    const placeService = event => {
        event.preventDefault();
        const form = event.target;
        const photoURL = form.photoURL.value;
        const Introduction = form.Introduction.value;
        const Price = form.Price.value;
        const Offer = form.Offer.value;
        const name = form.name.value;
        const review = {
            name: name,
            photoUrl: photoURL,
            introduction: Introduction,
            Price: Price,
            Offer: Offer
        }
        console.log(review);
        fetch("https://assignment-11-mohiuddinngbhs-gmailcom.vercel.app/addservice", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
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
        <div className="min-h-screen bg-base-200 px-20">
            <form onSubmit={placeService}>
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
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
                            <span className="label-text">Introduction</span>
                        </label>
                        <textarea name="Introduction" type="text" className="textarea textarea-bordered h-24 w-full" placeholder="Enter Your Review" required></textarea>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input name="Price" type="text" placeholder="Enter Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Offer</span>
                        </label>
                        <input name="Offer" type="text" placeholder="Enter password" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default AddService;