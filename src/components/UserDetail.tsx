import './UserDetail.css';
import React from 'react';

interface User {
  title: string;
  profilePicUrl: string;
  position?: string;
  email?:string;
}

interface UserDetailProps {
  user: User;
  onClose: () => void;
}

const UserDetail: React.FC<UserDetailProps> = ({ user, onClose }) => {
  return (
    <div className="user-detail">
      <div className="user-detail-bg" onClick={onClose} />
      <div className="user-detail-content" onClick={(e) => e.stopPropagation()}> 
        <img src={user.profilePicUrl} alt={user.title} />
        <div className='user-text-detail'>
            <h4>{user.title}</h4>
            <h5>{user.position}</h5>
            <h5>{user.email}</h5>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
