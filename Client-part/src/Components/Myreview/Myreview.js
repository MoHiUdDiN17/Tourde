import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import IndividualReview from './IndividualReview';

const Myreview = () => {
    const { user } = useContext(AuthContext);
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://assignment-11-mohiuddinngbhs-gmailcom.vercel.app/myreview/${user.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('genius-token')}`
                }
            });
            const data = await response.json();
            setData(data);
        }
        fetchData();
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        console.log("mohiuddin")
        if (proceed) {
            fetch(`https://assignment-11-mohiuddinngbhs-gmailcom.vercel.app/myreview/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('genius-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = data.filter(odr => odr._id !== id);
                        setData(remaining);
                    }
                })
        }
    }
    return (
        <div className="overflow-x-auto mb-96">
            {
                data.length > 0 ?
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>Service Name</th>
                                <th>Review</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(dt => <IndividualReview
                                    dt={dt}
                                    handleDelete={handleDelete}
                                ></IndividualReview>)
                            }
                        </tbody>
                    </table>
                    :
                    <h1 className='text-5xl text-center mt-20'>No reviews were added</h1>
            }

        </div>
    );
};

export default Myreview;