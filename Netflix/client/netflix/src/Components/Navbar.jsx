import React from 'react'
import "./navbar.scss"
import { useState } from 'react';
// import Search from '@material-ui/icons/Search';
import { Search, ArrowDropDown, Notifications } from '@material-ui/icons';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return() =>(window.onscroll = null); 
  };

  console.log(isScrolled);
    return (
    <div className={isScrolled ? "Navbar scrolled" : "Navbar"}>

      <div className='Container'>
        <div className='left'>
          <img src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456" alt=" " />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New & Popular</span>
          <span>My List</span>
        </div>

        <div className='right ' >
          <Search className='icon' />
          <span>AYUSH</span>
          < Notifications className='icon' />
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2xCvKg3PXCG0cDUHKYXJBgHaEo%26pid%3DApi&f=1&ipt=3e3d3be3b94bc77ca05c1271829fb63512225c3824de848d589f73c010f63da9&ipo=images" alt="" />

          <div className='profile'>
            <ArrowDropDown className='icon' />
            <div className="options">
              <span>Settings</span>
              <span>Log out</span>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar