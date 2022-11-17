import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import Review from './Review';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import './ServiceDetails.css'
import ShowReview from './ShowReview';
const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    const { user } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const { _id, name, photoUrl, introduction, Price, Offer } = serviceDetails;
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://assignment-11-mohiuddinngbhs-gmailcom.vercel.app/review/${_id}`);
            const data = await response.json();
            setData(data);
        }
        fetchData();
    }, [])
    return (
        <div className='bg-base-200 pb-5'>
            <div className='App pt-5'>
                <PhotoProvider>
                    <PhotoView src={photoUrl}>
                        <img src={photoUrl} alt="" className="max-w-sm center rounded-lg" />
                    </PhotoView>
                </PhotoProvider>
                <h1 className="text-5xl font-bold">{name}</h1>
                <p className="py-3 text-2xl">Price : {Price}</p>
                <p className="text-xl">Offer : {Offer}</p>
                <p className="py-6 mx-10">{introduction}</p>
            </div>
            <h1 className="text-5xl font-bold ml-10 my-5">Reviews</h1>
            <div className='mb-10'>
                {
                    data.map(dt => <ShowReview
                        dt={dt}
                    ></ShowReview>)
                }
            </div>
            {
                user?.uid ?
                    <Review
                        serviceDetails={serviceDetails}
                    ></Review>
                    :
                    <p className='ml-8'>To add Review please <Link to='/login' className='text-cyan-500'>Login</Link></p>
            }

        </div>
    );
};

export default ServiceDetails;