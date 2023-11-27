import React from 'react';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/AxiosSecure/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const UserDetails = (userId) => {

      const axiosSecure = useAxiosSecure()

      const {id} = useParams() || userId
      const { data: employeeDetails ,isPending,refetch } = useQuery({
            queryKey: ['employeeDetails'],
            queryFn: async () => {
                const data =await axiosSecure.get(`/employee-list/${id}`)
                return await data.data;
            }
        })

      console.log(employeeDetails)
      return (
            <section className="pb-24 ">
                  <div className="relative mb-20 h-96">
                        <img
                              className="object-cover w-full h-full"
                              src="https://i.postimg.cc/Y23w2gc1/pexels-ricardo-esquivel-1586298.jpg"
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
            </section>

      );
};

export default UserDetails;