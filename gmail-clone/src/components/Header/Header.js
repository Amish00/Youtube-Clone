import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/logo1.png'
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "../Header/styles.css";

const Header = () => {
  return (
    <div className='header'>
      <div className='header__left'>
        <MenuIcon className='header__menuicon' />
          <img className='header__logo' src={logo} alt=' Youtube' />
        </div>

        <form className='header__center'>
          <input className='header__input' placeholder='Search' />
          <Button className='header__btn'>
            <SearchIcon className="header__searchIcon" />
          </Button>
        </form>

        <div className='header__right'>
          <VideoCallIcon />
          <AppsIcon />
          <NotificationsIcon />
          <AccountCircleIcon />
        </div>
    </div>
  )
}

export default Header
