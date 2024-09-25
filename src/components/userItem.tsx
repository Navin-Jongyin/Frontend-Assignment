import './userItem.css';
import React from 'react';

interface UserItemProps {
  title: string;
  profilePicUrl: string;
  onClick: () => void; 
}

const UserItem: React.FC<UserItemProps> = ({ title, profilePicUrl, onClick }) => {
  return (
    <div className='user-item'>
      <img 
        src={profilePicUrl} 
        alt={title} 
        onClick={onClick}
        style={{ cursor: 'pointer' }}
      />
      <h4>{title}</h4>
    </div>
  );
};

export default UserItem;
