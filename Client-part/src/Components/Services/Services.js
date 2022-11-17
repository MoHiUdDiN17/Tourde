import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BestService from '../Home/BestService';

const Services = () => {
    const services = useLoaderData();
    console.log(services);
    return (
        <div className='py-5 bg-base-200 grid lg:grid-cols-3 md:grid-cols-2 gap-1'>
            {
                services.map(ser => <BestService
                    ser={ser}
                ></BestService>)
            }
        </div>
    );
};

export default Services;