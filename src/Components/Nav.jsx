import React from 'react';
import {headerLogo} from '../assets/image';
import {hamburger} from '../assets/image';


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