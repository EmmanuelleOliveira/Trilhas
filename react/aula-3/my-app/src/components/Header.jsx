import React from 'react';
import Button from './Button';
import userIcon from '../assets/images/user-icon.png';

function Header() {
    return (
        <header>
            <div className='logo'></div>  
            <div className='nav-bar'>
                <Button className='btn-first-selected' name='Início'></Button>
                <Button className='btn-second' name='BTN2'></Button>
                <Button className='btn-third' name='BTN3'></Button>
                <Button className='btn-fourth' name='BTN4'></Button>
            </div>
            <div className='user'>
                <img className='user-img' src={userIcon} alt="User profile" />
            </div>
        </header>
    );
}

export default Header;