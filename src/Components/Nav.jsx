import React from 'react';
import {headerLogo} from '../assets/assets/images';
import {hamburger} from '../assets/assets/icons';
import { navLinks } from '../Constants';

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full bg-blue-100'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img 
                    src={headerLogo}
                    alt="Logo"
                    width={130}
                    height={29}
                />   
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:'>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a 
                            href={item.href}
                            className=' font-montserrat 
                                        leading-normal
                                        text-lg
                                        text-slate-gray'
                        >
                            {item.label}
                        </a>                       
                    </li>
                ))}
            </ul>
            <div>
                <img
                    src={hamburger}
                    alt="Hamburger"
                    width={25}
                    height={25}
            </div>
        </nav>
    </header>
  )
}

export default Nav