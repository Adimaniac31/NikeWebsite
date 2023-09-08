import React from 'react';
import {headerLogo} from '../assets/assets/images';
import {hamburger} from '../assets/assets/icons';


const Nav = () => {
  return (
    <header>
        <nav>
            <a href="/">
                <img 
                    src={headerLogo}
                />   
            </a>
        </nav>
    </header>
  )
}

export default Nav