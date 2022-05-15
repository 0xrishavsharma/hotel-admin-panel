import React from 'react'
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <HomeWorkOutlinedIcon  className='icon'/>
            <h2> Hotel Admin</h2>
        </div>
        <hr />
        <div className="sidebar-items">
            <div className="main">
                MAIN
                <div className="mainItems items">
                    <div className="item">
                        <AutoAwesomeMosaicOutlinedIcon className='icon'/>
                        Dashboard
                    </div>
                </div>
            </div>
            <div className="list">
                LIST
                <div className="listItems items">
                    <div className="item">
                        <PersonOutlinedIcon className='icon'/>
                        Users
                    </div>
                    <div className="item">
                        <StoreOutlinedIcon className='icon'/>
                        Products
                    </div>
                    <div className="item">
                        <CreditCardOutlinedIcon className='icon'/>
                        Orders
                    </div>
                    <div className="item">
                        <LocalShippingIcon className='icon'/>
                        Delivery
                    </div>
                </div>
            </div>
            <div className="useful">
                USEFUL
                <div className="usefulItems items">
                    <div className="item">
                        <AssessmentIcon className='icon'/>
                        Stats
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className='icon'/>
                        Notifications
                    </div>
                </div>
            </div>
            <div className="Service">
                SERVICE
                <div className="usefulItems items">
                    <div className="item">
                        <HealthAndSafetyIcon className='icon'/>
                        System Health
                    </div>
                    <div className="item">
                        <FormatListNumberedIcon className='icon'/>
                        Logs
                    </div>
                    <div className="item">
                        <SettingsApplicationsIcon className='icon'/>
                        Settings
                    </div>
                </div>
            </div>
            <div className="user">
                USER
                <div className="userItems items">
                    <div className="item">
                        <AccountBoxIcon className='icon'/>
                        Profile
                    </div>
                    <div className="item">
                        <LogoutIcon className='icon'/>
                        Logout
                    </div>
                </div>
            </div>
            <div className="theme">
                THEME
                <div className="themeItems items">
                    <div className="darkTheme item">
                        
                    </div>
                    <div className="lightTheme item">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar