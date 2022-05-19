import SearchIcon from '@mui/icons-material/Search';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import React from 'react'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
        {/* <p className="logo">Hotel Admin</p> */}
        <div className="searchInput">
            <input type="text" placeholder='Search' />
            <SearchIcon className='icon'/>
        </div>
        <div className="navbarItems">
            <div className="item">
                <LanguageOutlinedIcon />
                <span>English</span>
            </div>
            <div className="item">
                <DarkModeOutlinedIcon />
            </div>
            <div className="item">
                <FullscreenExitIcon />
            </div>
            <div className="item notification">
                <NotificationsNoneOutlinedIcon />
                <div className="notification-count count">
                    <span>1</span>
                </div>
            </div>
            <div className="item chat">
                <ChatBubbleOutlineOutlinedIcon  />
                <div className="chat-count count">
                    <span>2</span>
                </div>
            </div>
            <div className="item">
                <ListOutlinedIcon />
            </div>
            <div className="item">
                <img src="./assets/img/ProfilePicturePhoto.png" alt="" className='profileImage' />
            </div>
            <div className="item">
                <SettingsOutlinedIcon />
            </div>

        </div>
    </div>
  )
}

export default Navbar