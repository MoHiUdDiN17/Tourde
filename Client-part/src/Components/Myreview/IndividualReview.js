import React from 'react';
import { Link } from 'react-router-dom';

const IndividualReview = (props) => {
    const { _id, serviceName, message, service } = props.dt;
    const { handleDelete } = props;
    return (
        <tr>
            <th>{serviceName}</th>
            <td>{message}</td>
            <td><Link to={`/update/${_id}`}>Update</Link></td>
            <td><i onClick={() => handleDelete(_id)} class="fa-solid fa-trash"></i></td>
        </tr>
    );
};

export default IndividualReview;