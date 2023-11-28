import React from 'react';
import { useQuery } from 'react-query';
import useAxiosSecure from './AxiosSecure/useAxiosSecure';

const useEmployee = () => {
const axiosSecure = useAxiosSecure()

      const { data: employeeList, isPending, refetch } = useQuery({
            queryKey: ['employeeListssss'],
            queryFn: async () => {
                  try {
                        return await axiosSecure.get('/employee-list')

                  } catch (err) {
                        console.log(err)
                  }
            }
      })




      return {employeeList, isPending, refetch}
};

export default useEmployee;

