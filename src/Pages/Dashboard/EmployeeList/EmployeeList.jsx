import React from 'react';
import SectionIntro from '../../../Components/IntroSection/SectionIntro';
import useAxiosSecure from '../../../Hooks/AxiosSecure/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import TableUsable from './../../../Components/Table/Table'
import Swal from 'sweetalert2';

const EmployeeList = () => {
      const axiosSecure = useAxiosSecure()

      const { data: employeeList ,isPending, refetch } = useQuery({
            queryKey: ['employeeList'],
            queryFn: async () => {
                try{
                  return await axiosSecure.get('/employee-list')
                 
                }catch(err){
                  console.log(err)
                }
            }
        })

      if(isPending){
            return 'loading'
      }
      if(employeeList.data.length===0){
            return <div className='text-2xl py-8 px-4 text-deep-orange-700'>No data to display</div>
      }


      // const {_id, name, bankAccount, position, Salary, designation, email, photoLink, isVerify}= employeeList?.data[0]


console.log(employeeList.data)
      const tableHead = ["Name", "Payment", "Verified", "Salary", "Details", ""]
        
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

          const setVerify=(id)=>{

            axiosSecure.put(`/employee-verify-update${id}`)
            .then(res=>{
                  if(res?.data?.modifiedCount){
                        Swal.fire({
                              title: "Mark as user Verified",
                              icon: "success"
                            });
                            refetch()
                  }else if(res?.data?.modifiedCount===0){
                        Swal.fire({
                              title: "Already You have updated",
                              icon: "question"
                            });
                  }
            })

          }
          const handlePay=(email)=>{
            console.log('paying', email)
          }


      return (
            <div>
                  <SectionIntro title={'All_Employee List'}></SectionIntro>
                  <TableUsable tableHead={tableHead} tableRow={employeeList.data} setVerify={setVerify} refetch={refetch} handlePay={handlePay}></TableUsable>
                  
            </div>
      );
};

export default EmployeeList;