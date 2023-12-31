import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
    <nav>
        <h1>ASHU.TECH</h1>
        <main>
            <Link to={'/'}>Home</Link>
            <Link to={'/contact'}>Contact</Link>
            <a href={'/#about'}>About</a>
            <a href={'/#brands'}>Brands</a>
            <Link to={'/services'}>Services</Link>
        </main>
    </nav>
</>
  );
}

export default Header;