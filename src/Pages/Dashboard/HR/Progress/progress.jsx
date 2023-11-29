import { useQuery } from "react-query";
import TableUsable from "../../../../Components/Table/WorkSheettable";
import useAxiosSecure from "../../../../Hooks/AxiosSecure/useAxiosSecure";
import { Spinner } from "@material-tailwind/react";
import LoadingSpinner from "../../../../Components/LoadingSpinner/LoadingSpinner";
import { useEffect, useState } from "react";


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
      const monthsArray = [
            { name: 'January', value: 1 },
            { name: 'February', value: 2 },
            { name: 'March', value: 3 },
            { name: 'April', value: 4 },
            { name: 'May', value: 5 },
            { name: 'June', value: 6 },
            { name: 'July', value: 7 },
            { name: 'August', value: 8 },
            { name: 'September', value: 9 },
            { name: 'October', value: 10 },
            { name: 'November', value: 11 },
            { name: 'December', value: 12 }
      ];
      const exampleData = [
            {
                  month: "d",
                  paidAmount: "d",
                  tnxid: "d"
            }
      ];
      const [names, setNames] = useState(exampleData)

      useEffect(() => {
            setNames(employeeData)
      }, [employeeData])



      if (isLoading || !names) {
            return <LoadingSpinner></LoadingSpinner>
      }




      const handleName = (e) => {
            const name = e.target.value

            const arr = employeeData.filter(emplopyeeName => emplopyeeName?.userName === name)

            setNames(arr)

      }

      const handleMonth = (e) => {
            const month = e.target.value

            const arr = employeeData.filter(employeeMonth =>{

                  // return console.log(Number(employeeMonth?.workedDate.split('-')[1])==month, Number(employeeMonth?.workedDate.split('-')[1]))


                 return Number(employeeMonth?.workedDate.split('-')[1])==month
            })

            setNames(arr)
            
            console.log(arr)
      }

      return (
            <div>
                  <form >
                        <h4 >Filter Your data by </h4>
                        {/* filter name */}
                        <div className="flex items-center">
                              <div >
                                    <select onChange={handleName} name="name" id="" className="h-full px-5 py-2 rounded-md border-0 bg-transparent pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                                          <option value="1">Select Name here for Specefics data</option>
                                          {
                                                employeeData?.map((employee, inx) => {
                                                      return <option key={inx} value={employee?.userName}>{employee?.userName}</option>
                                                })
                                          }
                                    </select>
                              </div>


                              {/* filter Month */}
                              <div>
                                    <select onChange={handleMonth} id="" className="h-full px-5 py-2 rounded-md border-0 bg-transparent pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                                          <option>Select Month for Show Only</option>
                                          {
                                                monthsArray?.map((month, inx) => {

                                                      return <option key={inx} value={month.value} >{month.name}</option>
                                                })
                                          }
                                    </select>
                              </div>
                        </div>
                  </form>
                  <TableUsable tableHead={["Task Name", "Worked/Hours", "Date"]} tableRow={names}></TableUsable>
            </div>
      );
};

export default Progress;