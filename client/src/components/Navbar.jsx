import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const haddleMunuToggler = () => {
    setIsMenuOpen(!isMenuOpen)
  };

const navItem = [
  {path: "/", title: "Home"},
  {path: "/Search", title: "Available Jobs"},
  {path: "/post-job", title: "Post A Job"},
  {path: "/contactUs", title: "Contact Us"},
  {path: "/contact", title: "Feedback Us"},
  {path: "/about", title: "About Us"},
]

  return (
    <div>

      <header className='cardd'>
      <nav className='flex justify-between items-center py-6'>
        <img draggable="false" src={logo} alt="" />
        
        
        {/* nav items for large devices*/}
        <ul className='hidden md:flex gap-12'>
          {
            navItem.map(({path,title}) =>(
              <li key={path} className="text-base text-primary">
                <NavLink
                    to={path}
                    className={({ isActive }) => isActive  ? "active": ""}
                  >
                    {title}
                </NavLink>
              </li>
            ))
          }
        </ul>

        {/* sign up and login button */}
         <div>
           <Link to="/login" className='login-button-home'>Log in</Link>
           
        </div> 
        {/* <div>
        <Link to="/sign-up" className='px-8 py-3 bg-primary text-xl text-white rounded hover:bg-body hover:text-white transition-all duration-300'>Sign up</Link>
        </div> */}
      {/* mobile menu */}


      </nav>
      </header>
    </div>
  )
}

export default Navbar