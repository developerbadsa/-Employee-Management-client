import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../AxiosSecure/useAxiosSecure';
import useAuth from '../useAuth';

const useAdminCheck = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkEmployeeStatus = async () => {
      try {
        const response = await axiosSecure.post('/isAdmin', { email: user?.email });
        const isAdminResponse = response.data
        setIsAdmin(isAdminResponse);
      } catch (error) {
        console.error('Error checking admin status:', error);
      }
    };

    if (user?.email) {
      checkEmployeeStatus();
    }
  }, [user?.email]);


  return {
    isAdmin
  }
};

export default useAdminCheck;
