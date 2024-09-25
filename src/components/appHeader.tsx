import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './appHeader.css';

function AppHeader() {
  return (
    <header className='app-header'>
        <i className="fa fa-users" style={{marginRight: '10px', fontSize: '24px'}}/>
        <h2>User Directory</h2>

    </header>
  );
}

export default AppHeader;
