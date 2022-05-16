import React from 'react';
import './index.css';
import userIcon from './assets/images/user-icon.png';

function App() {
  return (
    <>
      <header>
        <div className='logo'></div>  
        <div className='nav-bar'>
          <button type='button' className='btn-first-selected'>Início</button>
          <button type='button' className='btn-second'>BTN2</button>
          <button type='button' className='btn-third'>BTN3</button>
          <button type='button' className='btn-fourth'>BTN4</button>
        </div>
        <div className='user'>
          <img className='user-img' src={userIcon} alt="User profile" />
        </div>
      </header> 
      <main></main>
    </>
  );
}

export default App;
