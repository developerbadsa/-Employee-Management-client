import React, { useState, useEffect } from 'react';
import useAuth from '../../Hooks/useAuth';

const UserProfile = () => {
  const {user} = useAuth()

  return (
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">User Profile</h2>

      {user && (
        <div className="flex items-center space-x-4">
          <img
            src={user.photoURL}
            alt="User Avatar"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <p className="text-lg font-semibold">{user.displayName}</p>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
