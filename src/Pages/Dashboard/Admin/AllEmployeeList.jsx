import React from 'react';
import useEmployee from '../../../Hooks/useEmployee';
import TableUsable from '../../../Components/Table/Table';
import AdminTable from '../../../Components/Table/AdminTable';
import useAxiosSecure from '../../../Hooks/AxiosSecure/useAxiosSecure';

const AllEmployeeList = () => {

const {employeeList, isPending, refetch} = useEmployee()
const axiosSecure = useAxiosSecure()







const tableHead = ["Name", "Designation", "Make HR", "Fire"]



// const tableRow = [
//       {
//             img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
//             name: "John Michael",
//             email: "john@creative-tim.com",

//             job: <button className="bg-red-400 p-1 text rounded-lg text-white">Pay</button>,
//             bank: "Bank Account",

//             online: true,


//             date: "1000",
//             detailsBtn: <button>Details</button>
//       }
// ]

const handleMakeHR = (id)=>{

      axiosSecure.put('/users/makeHR', {id})
      .then(res=>{
            refetch()
            console.log(res)
      })
      .catch(err=>console.log(err))

      // console.log('ctHR', id)
}

const handleUserFire = (id)=>{
      console.log('ctHR', id)
}



if(isPending){
      return
}

      return (
            <div>
                  {/* <TableUsable tableHead={tableHead} tableRow={employeeList?.data} ></TableUsable> */}
                  <AdminTable tableHead={tableHead} tableRow={employeeList?.data} handleUserFire={handleUserFire} handleMakeHR={handleMakeHR}></AdminTable>
            </div>
      )
};

export default AllEmployeeList;