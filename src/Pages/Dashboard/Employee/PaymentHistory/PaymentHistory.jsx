
import LoadingSpinner from '../../../../Components/LoadingSpinner/LoadingSpinner';
import TableUsable from '../../../../Components/Table/paymenthistory';
import useAxiosSecure from '../../../../Hooks/AxiosSecure/useAxiosSecure';
import useAuth from '../../../../Hooks/useAuth';
import { useQuery } from 'react-query';

const PaymentHistory = () => {
      const axiosSecure = useAxiosSecure()
      const {user} = useAuth()

      const { data: employeeData, isLoading } = useQuery({
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
          

      const exampleData = [
            {
              month: "",
              paidAmount: "",
              tnxid: ""
            }
          ]

          if (isLoading && !employeeData) {
            return <LoadingSpinner></LoadingSpinner>;
          } else {
            const tableData = employeeData || exampleData; 
          
            return (
              <div className='lg:px-20 py-4'>
                <h3 className='text-2xl font-semibold px-4'>Payment History</h3>
                {!isLoading && <TableUsable tableHead={["Month", "Amount", "Transaction Id"]} tableRow={tableData} />}
              </div>
            );
          }
          
          
    
};

export default PaymentHistory;