import React from 'react';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/AxiosSecure/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import BarChart from '../../Components/BarChart/BarChart';



const UserDetails = (userId) => {

      const axiosSecure = useAxiosSecure()

      const {id} = useParams() || userId
      const { data: employeeDetails ,isPending, refetch } = useQuery({
            queryKey: ['employeeDetails'],
            queryFn: async () => {
                const data =await axiosSecure.get(`/employee-list/${id}`)
                return await data.data;
            }
        })

        const { data: chartData, isPending: paymentLoading } = useQuery({
            queryKey: [`payments`, employeeDetails?.email],
            queryFn: async () => {
                if (!isPending && employeeDetails && employeeDetails.email) {
                    try {
                        const data = await axiosSecure.get(`/payment-list/${employeeDetails.email}`);
                        console.log("Payment data:", data?.data);
                        return data?.data || [];
                    } catch (error) {
                        console.error("Error fetching payment data:", error);
                        return [];
                    }
                } else {
                    console.log("Returning default value...");
                    return [];
                }
            },
        });
        
        
        
      //   console.log(chartData)

      // const chartData = [
      //       { month: 'January', year: 2022, paidAmount: 5000 },
      //       { month: 'February', year: 2022, paidAmount: 5500 },
      //       { month: 'March', year: 2022, paidAmount: 9000 },
      //     ];

      // console.log(paymentLoaing ,chartData)



      return (
            <section className="pb-24 ">
                  <div className="relative mb-20 h-96">
                        <img
                              className="object-cover w-full h-full"
                              src="https://png.pngtree.com/thumb_back/fh260/back_our/20190617/ourmid/pngtree-corporate-culture-employee-style-poster-background-material-image_125216.jpg"
                              alt=""
                        />
                        <img
                              className="absolute bottom-0 left-0 object-cover w-40 h-40 ml-4 -mb-16 rounded-full lg:ml-12 lg:-mb-24 lg:w-60 lg:h-60"
                              src={employeeDetails?.photoLink}
                              alt=""
                        />
                  </div>
                  <div className="max-w-3xl px-4 mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-700 mb-14 lg:text-5xl dark:text-gray-400">
                             {employeeDetails?.name}
                        </h2>
                        <div className="inline-flex items-center mb-10 lg:mb-14">
                              <div className="text-left">
                                    <h2 className="mb-1 text-2xl font-normal text-gray-700 dark:text-gray-400">
                                         Designation: <span className='capitalize text-3xl font-bold'>{employeeDetails?.designation}</span>
                                    </h2>
                                    <p className="text-gray-700 dark:text-gray-400">Email: {employeeDetails?.email}</p>
                              </div>
                        </div>
                  
                  </div>
                  { !paymentLoading && <BarChart data={chartData}></BarChart>}

            </section>

      );
};

export default UserDetails;