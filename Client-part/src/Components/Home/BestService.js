import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
const BestService = (props) => {
    const { _id, name, photoUrl, introduction, Price, Offer } = props.ser;
    const limited = introduction.slice(0, 100) + "...";
    return (
        <div className='mb-5 m-auto'>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <figure className="px-10 pt-10">
                    <img src={photoUrl} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: {Price}</p>
                    <p>Offer: {Offer}</p>
                    <p>{limited}</p>
                    <Link to={`/service/${_id}`}>
                        <div className="card-actions">
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BestService;