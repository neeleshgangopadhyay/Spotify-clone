import React from 'react';
import "./login.css";
import { loginUrl } from './spotify';

function login() {
  return (
    <div className='login'>
       <img src='https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg' alt='Spotify Logo'/>
       <a href= {loginUrl}>Login with Spotify</a>
    </div>
  )
}

export default login
