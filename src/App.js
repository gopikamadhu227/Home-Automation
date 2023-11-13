import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="HomePage">
      <div className="HelloMaria">Hello Maria!</div>
      <div className="YourHomeIsLocked">Your Home is Locked</div>
      {/* Add other components here */}
      <div className="SecureManageThrive">Secure,Manage,Thrive</div>
      <div className="Rectangle37"></div>
      <div className="ManageSecurity">
        <span style={{ color: '#534100', fontSize: '32px', fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word' }}>Manage Security!</span>
        <span style={{ color: '#534100', fontSize: '35px', fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word' }}> </span>
      </div>
    </div>
  );
};

export default App;
