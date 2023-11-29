import React from 'react';
import AdminTable from '../../../Components/Table/AdminTable';
import useAxiosSecure from '../../../Hooks/AxiosSecure/useAxiosSecure';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';

const AllEmployeeList = () => {
      const axiosSecure = useAxiosSecure()




      const { data: employeeList, isPending, refetch } = useQuery({
            queryKey: ['employeeListverified'],
            queryFn: async () => {
                  try {
                        const response = await axiosSecure.get('/employee-list/verified');
                        return response;
                      } catch (err) {
                        console.error('Error fetching data:', err);
                        throw err;
                      }
            }
      })


      const tableHead = ["Name", "Designation", "Make HR", "Fire"]



      const handleMakeHR = (id) => {

            axiosSecure.put('/users/makeHR', { id })
                  .then(() => {
                        refetch()
                        Swal.fire({
                              icon: "success",
                              title: "Marked Done as HR",
                              showConfirmButton: false,
                              timer: 1500
                            });
                  })
                  .catch(err => console.log(err))

      }

      const handleUserFire = (id, name) => {

            Swal.fire({
                  title: `Are You sure? You want to delete ${name}`,
                  showCancelButton: true,
                  confirmButtonText: "Fire"
            }).then(async (result) => {
                  /* Read more about isConfirmed, isDenied below */
                  if (result.isConfirmed) {

                       await axiosSecure.delete('/users/fire', { data: { userID: id } })
                              .then( async(res) => {
                                    refetch()
                                    Swal.fire("Fired!", "", "success");
                                    
                              })
                              .catch(err => console.log(err))
                        
                  }
            });


      }



      if (isPending) {
            return
      }

      return (
            <div>
                  <AdminTable tableHead={tableHead} tableRow={employeeList?.data} handleUserFire={handleUserFire} handleMakeHR={handleMakeHR}></AdminTable>
            </div>
      )
};

export default AllEmployeeList;