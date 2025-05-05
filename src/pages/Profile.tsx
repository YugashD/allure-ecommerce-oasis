import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Redirect } from 'react-router-dom';

const Profile: React.FC = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container mt-5">
      <h2>Welcome, {user.name}</h2>
      <p>Email: {user.email}</p>
      <button onClick={logout} className="btn btn-danger">
        Logout
      </button>
    </div>
  );
};

export default Profile;
