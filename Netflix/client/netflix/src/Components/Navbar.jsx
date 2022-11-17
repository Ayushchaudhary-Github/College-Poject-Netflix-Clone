import React from 'react'
import "./navbar.scss"
// import Search from '@material-ui/icons/Search';
import { Search, ArrowDropDown, Notifications } from '@material-ui/icons';

const Navbar = () => {
  return (

    <div className='Navbar'>

      <div className='Container'>
        <div className='left'>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.pJUs7cTaLMMANyY7FI4sSAHaEK%26pid%3DApi&f=1&ipt=914fd3152b2396a460a9c88ba73bd75a2c333c0dffcfeadbc57e1f30682349b9&ipo=images" alt=" " />
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