import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import './Header.css'
import image from './picture.jpg'
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1 ml-3">
                    <div className='flex'><img className='fixing-img' src={image} alt="" /></div>
                    <div>
                        <Link to='/'>
                            <h1 className='text-3xl text-orange-600'> Tourde</h1>
                        </Link>
                    </div>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <div className='mr-3'><Link to='/'><li>Home</li></Link></div>
                        <div className='mr-3'><Link to='/services'><li>Services</li></Link></div>
                        <div className='mr-3'><Link to='/Blog'><li>Blog</li></Link></div>

                        {
                            user?.uid ?
                                <div className='flex'>
                                    <div className='mr-3'><Link to='/myreview'><li>My Reviews</li></Link></div>
                                    <div className='mr-3'><Link to='/addservice'><li>Add Services</li></Link></div>
                                    <div><img className='fix-img' src={user.photoURL} data-toggle="tooltip" data-placement="top" title={user.displayName} alt="" /></div>
                                    <div className="nav-link" onClick={handleLogOut}><Link className='dec' to='/login'>Logout</Link></div>
                                </div>
                                :
                                <div className="nav-link"><Link className='dec' to='/login'>Login</Link></div>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;