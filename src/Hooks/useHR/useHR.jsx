import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../AxiosSecure/useAxiosSecure';
import useAuth from '../useAuth';
import { useQuery } from 'react-query';

const useHRCheck = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  // const [isHR, setIsHR] = useState(false);

  // useEffect(() => {
  //   const checkHRStatus = async () => {
  //     try {
  //       const response = await axiosSecure.post('/isHR', { email: user?.email });
  //       const isAdminResponse = response.data
  //       setIsHR(isAdminResponse);
  //     } catch (error) {
  //       console.error('Error checking admin status:', error);
  //     }
  //   };

  //   if (user?.email) {
  //     checkHRStatus();
  //   }
  // }, [user?.email]);



  const { data: isHR, isLoading, isError } = useQuery(
    ['isHR', user?.email],
    async () => {
      const response = await axiosSecure.post('/isHR', { email: user?.email });
      return response.data;
    },
    {
      enabled: !!user?.email,
    }
  );

  return {
    isHR, isLoading
  }
};

export default useHRCheck;
