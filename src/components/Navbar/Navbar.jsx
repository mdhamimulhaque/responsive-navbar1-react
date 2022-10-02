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
        <header className='text-2xl bg-blue-400 text-white h-20 flex justify-between items-center px-20'>
            <div className="logo">
                <h2 className='
                font-bold'>Navbar-1</h2>
            </div>
            <nav className='hidden lg:block'>
                {
                    navbarData.map((navItem) =>
                        <a className='ml-5 font-semibold duration-500 hover:text-gray-700'
                            key={navItem.id}
                            href={navItem.path}
                        >
                            {navItem.name}</a>
                    )
                }

            </nav>
            <div className="responsive_menu_icon lg:hidden"
                onClick={() => setOpen(!open)}
            >
                {
                    open ?
                        <XMarkIcon className="h-7 w-7 text-white" />
                        : <Bars4Icon className="h-7 w-7 text-white" />
                }


            </div>
        </header>
    );
};

export default Navbar;