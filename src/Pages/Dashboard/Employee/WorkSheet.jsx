import React from 'react';
import TableUsable from '../../../Components/Table/WorkSheettable';
import useAxiosSecure from '../../../Hooks/AxiosSecure/useAxiosSecure';
import useAuth from '../../../Hooks/useAuth';
import { RxCardStackPlus } from 'react-icons/rx';
import Swal from 'sweetalert2';
import { useQuery } from 'react-query';

const WorkSheet = () => {
      const axiosSecure = useAxiosSecure();
      const { user } = useAuth();

      const { data: employeeData, isLoading, refetch } = useQuery({
            queryKey: ['tasklist', user?.email],
            queryFn: async () => {
                  try {
                        const isEmployeeResponse = await axiosSecure.get('/employee-task', { email: user?.email });
                        return isEmployeeResponse.data;
                  } catch (error) {
                        throw new Error('Error fetching payment history: ' + error.message);
                  }
            },
            enabled: !!user?.email,
      });

      const exampleData = [
            {
                  month: "d",
                  paidAmount: "d",
                  tnxid: "d"
            }
      ];
  


      const handleSubmitTask = (e)=>{
            e.preventDefault()
            const task = e.target.task.value;
            const workedHours = e.target.hours.value;
            const workedDate = e.target.workdate.value;
            const userEmail = user?.email
            const userName = user?.displayName

            const employeeTask = {
                  task, workedHours, workedDate, userName, userEmail
            }
            console.log(user.email)
            axiosSecure.post(`/employee-tasks/?email=${userEmail}`, employeeTask)
            .then(res=>{
                  if(res?.data.acknowledged ){
                        refetch()
                        Swal.fire({
                              icon: "success",
                              title: "Your work has been saved",
                              showConfirmButton: false,
                              timer: 1500
                            });
                  }
            })

            console.log(employeeTask)
      }

      if (isLoading && !employeeData) {
            return 'loading';
      } else {
            const tableData = employeeData || exampleData;

            return (
                  <div className='px-40'>

                        <form onSubmit={handleSubmitTask} className='border py-8 px-2'>
                              <h3 className='text-xl font-semibold text-center my-8'>Enter Your Tasks</h3>
                              <div className="flex justify-between items-center w-full relative">
                                    <div className='flex flex-col justify-center'>
                                          <select
                                                id="dropdown" 
                                                name='task'
                                                onChange={(e) => {}}
                                                className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                          >
                                                <option value="c">Please Select Your Task</option>
                                                <option value="Sales">Sales</option>
                                                <option value="Support">Support</option>
                                                <option value="Content">Content</option>
                                                <option value="Paper-work">Paper-work</option>
                                          </select>
                                    </div>
                                    <div>

                                          <input
                                                type="number"
                                                name='hours'
                                                required
                                                className="block p-2.5 z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                                                placeholder="Enter worked Hours"
                                          />
                                    </div>
                                    <div className="relative flex flex items-center gap-2">
                                          <label htmlFor="input">Date:</label>
                                          <input
                                                type="date"
                                                name='workdate'
                                                
                                                required
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Select date"
                                          />
                                    </div>

                                    <div className=''>
                                          <button type="submit" className="absolute text-2xl top-0 end-0 p-2.5 h-full font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
                                                <RxCardStackPlus></RxCardStackPlus>
                                          </button>
                                    </div>
                              </div>
                        </form>
                                                <h4 className='text-xl font-semibold text-center mt-5 border-t'>Your All Tasks</h4>
                        <TableUsable tableHead={["Task Name", "Worked/Hours", "Date"]} tableRow={tableData}></TableUsable>
                  </div>
            );
      }
};

export default WorkSheet;