import React, { useEffect } from 'react';
import TableUsable from '../../../../Components/Table/paymenthistory';
import useAxiosSecure from '../../../../Hooks/AxiosSecure/useAxiosSecure';
import useAuth from '../../../../Hooks/useAuth';
import { useQuery } from 'react-query';

const PaymentHistory = () => {
      const axiosSecure = useAxiosSecure()
      const {user} = useAuth()

      const { data: employeeData, isLoading, isError } = useQuery({
            queryKey: ['employeeList', user?.email],
            queryFn: async () => {
              try {
                const isEmployeeResponse = await axiosSecure.post('/payment-history', { email: user?.email });
                return isEmployeeResponse.data;
              } catch (error) {
                throw new Error('Error fetching payment history: ' + error.message);
              }
            },
            enabled: !!user?.email, // Only execute the query when user.email is truthy
          });
          
      console.log(employeeData)


      // useEffect(() => {
      //       const EmployeeData = async () => {
      //         try {
      //           const response = await axiosSecure.post('/isEmployee', { email: user?.email });
      //           const isEmployeeResponse = response.data
      //           setIsEmployee(isEmployeeResponse);
      //         } catch (error) {
      //           console.error('Error checking admin status:', error);
      //         }
      //       };
        
      //       if (user?.email) {
      //         EmployeeData();
      //       }
      //     }, [user?.email]);

      const exampleData = [
            {
              month: "",
              paidAmount: "",
              tnxid: ""
            }
          ]

          console.log(employeeData)
          if (isLoading && !employeeData) {
            return 'loading';
          } else {
            const tableData = employeeData || exampleData; 
          
            return (
              <div className='px-20 py-4'>
                <h3 className='text-2xl font-semibold'>Payment History</h3>
                {!isLoading && <TableUsable tableHead={["Month", "Amount", "Transaction Id"]} tableRow={tableData} />}
              </div>
            );
          }
          
          
    
};

export default PaymentHistory;