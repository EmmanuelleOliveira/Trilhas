import React from 'react';
import Button from './Button';
import userIcon from '../assets/images/user-icon.png';

function Header() {
    return (
        <header>
            <div className='logo'></div>  
            <div className='nav-bar'>
                <Button className='btn-first-selected' name='Início'></Button>
                <Button className='btn-second' name='Today'></Button>
                <Button className='btn-third' name='Week'></Button>
                <Button className='btn-fourth' name='Monthly'></Button>
            </div>
            <div className='user'>
                <img className='user-img' src={userIcon} alt="User profile" />
            </div>
        </header>
    );
}

export default Header;