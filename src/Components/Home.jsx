import React from 'react';
import '../App.css';

const HomeManagementApp = () => {
  return (
    <div className="container">
      <div className="left-side">
        <img src="https://i.imgur.com/example.jpg" alt="Home Management App" className="top-image" />
        <p className="top-text">Hello Maria!</p>
        <div className="bottom-boxes">
          <div className="bottom-box">
            <h3>Usage</h3>
            <p>325 kWh</p>
          </div>
          <div className="bottom-box">
            <h3>Temperature</h3>
            <p>23 °C</p>
          </div>
          <div className="bottom-box">
            <h3>Devices</h3>
            <p>14 Active</p>
          </div>
        </div>
        <img src="https://i.imgur.com/example.jpg" alt="Home Management App" className="bottom-image" />
      </div>
      <div className="right-side">
        <h2 className="manage-room">Manage Room</h2>
        <div className="room-detail">
          <div className="room-detail-text">Bathroom</div>
          <div className="room-detail-icon">mdi-mdi-bathroom</div>
        </div>
        <div className="room-detail">
          <div className="room-detail-text">Kitchen</div>
          <div className="room-detail-icon">mdi-mdi-kitchen</div>
        </div>
        <div className="room-detail">
          <div className="room-detail-text">Bedroom</div>
          <div className="room-detail-icon">mdi-mdi-bedroom</div>
        </div>
      </div>
    </div>
  );
};

export default HomeManagementApp;
