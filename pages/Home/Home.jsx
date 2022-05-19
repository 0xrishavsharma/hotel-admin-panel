import React from 'react'
import Navbar from '../../components/Navbar/navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Widget from '../../components/Widget/Widget';
import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
        <Sidebar />
        <div className="homeContainer">
            <Navbar />
            <div className="widgets">
                <Widget type="user"/>
                <Widget type="order"/>
                <Widget type="earning"/>
                <Widget type="balance"/>
            </div>
            <div className="charts">
                <div className="revenue">

                </div>
                <div className="spending">
                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home