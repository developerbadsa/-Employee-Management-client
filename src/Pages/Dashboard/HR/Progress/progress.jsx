import { useQuery } from "react-query";
import TableUsable from "../../../../Components/Table/WorkSheettable";
import useAxiosSecure from "../../../../Hooks/AxiosSecure/useAxiosSecure";


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
if(isLoading){
      return "loading"
}
console.log(employeeData)

      return (
            <div>
                  <TableUsable tableHead={["Task Name", "Worked/Hours", "Date"]} tableRow={ employeeData}></TableUsable> 
            </div>
      );
};

export default Progress;