import React, { useState } from 'react';
import Auth from './Auth.jsx';
import Player from './Player.jsx';
import './App.scss';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <>
      <header>
        <img className='logo' src="/src/assets/image/logo.svg" alt="Logo" />
        {isAuth ? (
          <div className='profil__menu'>
            <p>{user?.firstName}</p>
            <button className='Btn_profil_menu'><img src="/src/assets/image/Profile.svg" alt="Profile" /></button>
            <button className='Btn_profil_menu' onClick={() => setIsAuth(false)}><img src="/src/assets/image/Exit.svg" alt="Exit" /></button>
          </div>
        ) : (
          <></>
        )}
      </header>
      {isAuth ? (
        <Player user={user} />
      ) : (
        <Auth setIsAuth={setIsAuth} setUser={setUser} />
      )}
    </>
  );
}

export default App;
