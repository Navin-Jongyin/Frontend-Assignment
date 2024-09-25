import './Dashboard.css';
import React, { useState, useEffect } from 'react';
import AppHeader from './appHeader';
import UserItem from './userItem';
import UserDetail from './UserDetail';
import userList from '../data/user'; 
import AppSearch from './AppSearch';


interface User {
  title: string;
  profilePicUrl: string;
}

const Dashboard: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null); 
  const [searchText, setSearchText] = useState('');
  const [username, setUsername] = useState<string | null>(null); 

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  function onUserClick(user: User) {
    setSelectedUser(user);
  }

  function closeUserClick() {
    setSelectedUser(null);
  }

  const userItems = userList
    .filter((user) => user.title.toLowerCase().includes(searchText.toLowerCase()))
    .map((user, index) => (
      <UserItem 
        key={index} 
        title={user.title} 
        profilePicUrl={user.profilePicUrl} 
        onClick={() => onUserClick(user)} 
      />
    ));

  return (
    <div className='app'>
      <AppHeader />
      <div className='welcome-message'>
        Welcome, {username || "Guest"}
      </div>
      <div className='app-section'>
        <div className='app-container'>
          <AppSearch value={searchText} onValueChange={setSearchText} />
          <div className='app-grid'>
            {userItems}
          </div>
          {selectedUser && <UserDetail user={selectedUser} onClose={closeUserClick} />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
