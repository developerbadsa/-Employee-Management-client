import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../AxiosSecure/useAxiosSecure';
import useAuth from '../useAuth';

const useEmployeeCheck = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [isEmployee, setIsEmployee] = useState(false);

  useEffect(() => {
    const checkEmployeeStatus = async () => {
      try {
        const response = await axiosSecure.post('/isEmployee', { email: user?.email });
        const isEmployeeResponse = response.data
        setIsEmployee(isEmployeeResponse);
      } catch (error) {
        console.error('Error checking admin status:', error);
      }
    };

    if (user?.email) {
      checkEmployeeStatus();
    }
  }, [user?.email]);


  return {
    isEmployee
  }
};

export default useEmployeeCheck;
