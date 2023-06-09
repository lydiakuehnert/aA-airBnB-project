import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    return (
        <ul className='nav-bar'>
            <li>
                <NavLink id="logo" exact to="/">AirRnR</NavLink>
            </li>
            {isLoaded && (
                <li className='li-nav-bar'>
                    {sessionUser && <NavLink exact to="/spots/new" className="create-spot-link">Create a New Spot</NavLink>}
                    <ProfileButton user={sessionUser} />
                </li>
            )}
        </ul>
    );
}

export default Navigation;