import React from 'react';
import './ShowReview.css'
const ShowReview = (props) => {
    const { photoURL, message, email } = props.dt;
    return (
        <div className='flex flex-row items-center'>
            <div className='ml-8'>
                <img src={photoURL} alt='' className='fixx-img' />
            </div>
            <div>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default ShowReview;