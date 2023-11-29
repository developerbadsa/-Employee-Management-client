import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../AxiosSecure/useAxiosSecure';
import useAuth from '../useAuth';
import { useQuery } from 'react-query';

const useEmployeeCheck = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  // useEffect(() => {
  //   const checkEmployeeStatus = async () => {
  //     try {
  //       const response = await axiosSecure.post('/isEmployee', { email: user?.email });
  //       const isEmployeeResponse = response.data
  //       setIsEmployee(isEmployeeResponse);
  //     } catch (error) {
  //       console.error('Error checking admin status:', error);
  //     }
  //   };

  //   if (user?.email) {
  //     checkEmployeeStatus();
  //   }
  // }, [user?.email]);


  
  const { data: isEmployee, isLoading, isError } = useQuery(
    ['isEmployee', user?.email],
    async () => {
      const response =  await axiosSecure.post('/isEmployee', { email: user?.email })
      return response.data;
    },
    {
      enabled: !!user?.email, 
    }
  );


  return {
    isEmployee, isLoading
  }
};

export default useEmployeeCheck;
