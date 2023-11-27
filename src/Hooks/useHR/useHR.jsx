import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../AxiosSecure/useAxiosSecure';
import useAuth from '../useAuth';

const useHRCheck = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [isHR, setIsHR] = useState(false);

  useEffect(() => {
    const checkHRStatus = async () => {
      try {
        const response = await axiosSecure.post('/isHR', { email: user?.email });
        const isAdminResponse = response.data
        setIsHR(isAdminResponse);
      } catch (error) {
        console.error('Error checking admin status:', error);
      }
    };

    if (user?.email) {
      checkHRStatus();
    }
  }, [user?.email]);

  console.log(isHR)
  return {
    isHR
  }
};

export default useHRCheck;
