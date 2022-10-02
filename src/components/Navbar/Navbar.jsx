import React, { useState } from 'react';
import './Navbar.css';
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const navbarData = [
        {
            id: 1,
            name: "Home",
            path: '/home'
        },
        {
            id: 2,
            name: "About",
            path: '/about'
        },
        {
            id: 3,
            name: "Services",
            path: '/services'
        },
        {
            id: 4,
            name: "Blog",
            path: '/blog'
        },
        {
            id: 5,
            name: "Contact",
            path: '/contact'
        },
    ]


    const [open, setOpen] = useState(false)
    return (
        <header className='text-2xl bg-stone-700 text-white h-20  px-3 flex justify-between items-center'>
            <div className="logo">
                <h2 className='
                font-bold'>Navbar-1</h2>
            </div>
            <nav>
                <ul className={`nav_items_wrapper bg-stone-700 absolute w-full duration-500 ease-in-out lg:static lg:flex ${open ? 'top-20 h-screen' : 'top-[-2000px] h-20'}    `}>
                    {
                        navbarData.map((navItem) =>
                            <li className='ml-5 font-semibold duration-500 hover:text-yellow-400 my-5'
                                key={navItem.id}
                                href={navItem.path}
                            >
                                {navItem.name}</li>
                        )
                    }

                </ul>
            </nav>
            <div className="responsive_menu_icon h-7 w-7 text-white lg:hidden"
                onClick={() => setOpen(!open)}
            >
                {
                    open ?
                        <XMarkIcon />
                        : <Bars4Icon />
                }


            </div>
        </header>
    );
};

export default Navbar;