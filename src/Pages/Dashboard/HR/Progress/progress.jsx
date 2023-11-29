import { useQuery } from "react-query";
import TableUsable from "../../../../Components/Table/WorkSheettable";
import useAxiosSecure from "../../../../Hooks/AxiosSecure/useAxiosSecure";
import { Spinner } from "@material-tailwind/react";
import LoadingSpinner from "../../../../Components/LoadingSpinner/LoadingSpinner";


const Progress = () => {
      const axiosSecure = useAxiosSecure()

      const { data: employeeData, isLoading, refetch } = useQuery({
            queryKey: ['tasklists'],
            queryFn: async () => {
                  try {
                        const isEmployeeResponse = await axiosSecure.get('/all-tasks');
                        return isEmployeeResponse.data;
                  } catch (error) {
                        throw new Error('Error fetching payment history: ' + error.message);
                  }
            }
      });


      const exampleData = [
            {
                  month: "d",
                  paidAmount: "d",
                  tnxid: "d"
            }
      ];
      if (isLoading) {
            return <LoadingSpinner></LoadingSpinner>
      }

      return (
            <div>
                  <form >
                        <h4>Filter Your data by </h4>
                        <div>
                              <select name="name" id="" className="h-full px-5 py-2 rounded-md border-0 bg-transparent pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                                    <option value="1">Select Name here for Specefics data</option>
                                  {
                                      employeeData?.map((employee, inx)=>{ 
                                          return <option key={inx} value={employee?.userName}>{employee?.userName}</option>
                                      })
                                  }
                              </select>
                        </div>
                  </form>
                  <TableUsable tableHead={["Task Name", "Worked/Hours", "Date"]} tableRow={employeeData}></TableUsable>
            </div>
      );
};

export default Progress;