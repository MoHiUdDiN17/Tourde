import React from 'react';
import image4 from './image4.jpg';
import image1 from './image1.jpg';
import { Link, useLoaderData } from 'react-router-dom';
import BestService from './BestService';
import './Home.css'
import Banner from '../Banner/Banner';
const Home = () => {
    const services = useLoaderData();
    return (
        <div className='bg-base-200 pt-10'>
            <Banner></Banner>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image4} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">More About Tourde!</h1>
                        <p className="py-6">Tourde is a single person tourist service provider company.This company run by Mohammad Mohiuddin.It provides services around three years.</p>
                    </div>
                </div>
            </div>
            <div className='lg:flex'>
                {
                    services.map(ser => <BestService
                        ser={ser}
                    ></BestService>)
                }
            </div>
            <Link to="/services"><div className='align py-10'><button className="btn btn-outline btn-secondary sizing">See All</button></div></Link>
        </div>
    );
};

export default Home;