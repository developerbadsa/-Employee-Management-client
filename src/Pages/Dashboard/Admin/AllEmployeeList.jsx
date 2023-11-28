import React from 'react';
import useEmployee from '../../../Hooks/useEmployee';
import TableUsable from '../../../Components/Table/Table';
import AdminTable from '../../../Components/Table/AdminTable';

const AllEmployeeList = () => {

const {employeeList, isPending} = useEmployee()







const tableHead = ["Name", "Designation", "Make HR", "Fire"]



const tableRow = [
      {
            img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
            name: "John Michael",
            email: "john@creative-tim.com",

            job: <button className="bg-red-400 p-1 text rounded-lg text-white">Pay</button>,
            bank: "Bank Account",

            online: true,


            date: "1000",
            detailsBtn: <button>Details</button>
      }
]



console.log(employeeList?.data)
if(isPending){
      return
}

      return (
            <div>
                  {/* <TableUsable tableHead={tableHead} tableRow={employeeList?.data} ></TableUsable> */}
                  <AdminTable tableHead={tableHead} tableRow={employeeList?.data}></AdminTable>
            </div>
      )
};

export default AllEmployeeList;