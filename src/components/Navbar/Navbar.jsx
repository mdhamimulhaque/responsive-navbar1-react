import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <header className='text-2xl bg-blue-400 text-white h-20 flex justify-between items-center px-20'>
            <div className="logo">
                <h2 className='
                font-bold'>Navbar-1</h2>
            </div>
            <nav className='hidden lg:block'>
                <a className='ml-5 font-semibold duration-500 hover:text-gray-700' href="/home">Home</a>
                <a className='ml-5 font-semibold duration-500 hover:text-gray-700' href="/about">About</a>
                <a className='ml-5 font-semibold duration-500 hover:text-gray-700' href="/services">Services</a>
                <a className='ml-5 font-semibold duration-500 hover:text-gray-700' href="/blog">Blog</a>
                <a className='ml-5 font-semibold duration-500 hover:text-gray-700' href="/contact">Contact</a>
            </nav>
        </header>
    );
};

export default Navbar;