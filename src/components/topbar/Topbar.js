import React, { useContext } from 'react'
import './topbar.css'
import { Link } from 'react-router-dom'
import { Context } from '../../context/context/context'

function Topbar() {
    const { user, dispatch } = useContext(Context)

    const logout = () => {
        dispatch({ type: 'LOGOUT' })
    }
    return (
        <div className='topbar'>
            <div className='topLeft'>
                <div className='icons'>
                    <i className="topIcon fab fa-facebook-square"></i>
                    <i className="topIcon fab fa-instagram-square"></i>
                    <i className="topIcon fab fa-pinterest-square"></i>
                    <i className="topIcon fab fa-twitter-square"></i>
                </div>
            </div>
            <div className='topCenter'>
                <ul className='center-ul'>
                    <li className='center-ul-li'>
                        <Link className='link' to="/">
                            HOME
                        </Link>
                    </li>
                    <li className='center-ul-li'>ABOUT</li>
                    <li className='center-ul-li'>CONTACT</li>
                    <li className='center-ul-li'>
                        <Link className='link' to="/write">
                            WRITE
                        </Link>
                    </li>
                    <li className='center-ul-li' onClick={logout}>{user && 'LOGOUT'}</li>
                </ul>
            </div>
            <div className='topRight'>
                {user ? (
                    <>
                    <Link to='/settings'>
                        <img

                            className="topImg"
                            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                            />
                    </Link>
                        <i className="topSearchIcon fas fa-search"></i>
                    </>
                ) : (
                    <ul className='center-ul'>
                        <li className='center-ul-li'>
                            <Link to='/register' className='link'>
                                <span>
                                    REGISTER
                                </span>
                            </Link>
                        </li>
                        <li className="center-ul-li">
                            <Link to='/login' className='link'>
                                <span>
                                    LOGIN
                                </span>
                            </Link>
                        </li>
                    </ul>

                )}


            </div>

        </div>
    )
}

export default Topbar
