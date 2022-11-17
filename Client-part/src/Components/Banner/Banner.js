import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='round'>
            <div className="hero min-h-screen size round" style={{ backgroundImage: `url("https://a.cdn-hotels.com/gdcs/production99/d757/c553b2fd-4e2e-4ffe-926e-4888a9893de6.jpg?impolicy=fcrop&w=1600&h=1066&q=medium")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome TO Tourde!</h1>
                        <p className="mb-5">We provide the world class tourist services.Our services mainly focused to India,Thailand,Indonesia</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;