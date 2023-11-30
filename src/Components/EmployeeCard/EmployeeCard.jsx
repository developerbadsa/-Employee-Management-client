import { Button } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeCard = ({ employeeData }) => {

      console.log(employeeData)

      return (
            <div className="bg-white shadow-md rounded-md p-6 m-4">
                  <img
                        className="w-16 h-16 rounded-full mx-auto mb-4"
                        src={employeeData?.photoLink}
                        alt={employeeData?.name}
                  />
                  <h2 className="text-xl font-semibold text-gray-800">{employeeData?.name}</h2>
                  <p className="text-sm text-gray-600">{employeeData?.designation}</p>
                  <div className="mt-4">
                        <p className="text-gray-700">
                              <span className="font-semibold">Email:</span> {employeeData.email}
                        </p>
                        <p className="text-gray-700">
                              <span className="font-semibold">Bank Account:</span> {employeeData.bankAccount}
                        </p>
                        <p className="text-gray-700">
                              <span className="font-semibold">Position:</span> {employeeData.position}
                        </p>
                        <p className="text-gray-700">
                              <span className="font-semibold">Salary:</span> {employeeData.salary}
                        </p>
                  </div>
                  <div className='flex justify-between items-center my-4'>
                        <div className="">
                              {employeeData.isVerify ? (
                                    <span className="text-green-500 font-semibold">Verified</span>
                              ) : (
                                    <span className="text-red-500 font-semibold">Not Verified</span>
                              )}
                        </div>
                        <Button >
                              <Link to={`/dashboard/details/${employeeData?._id}`}>Details</Link>
                        </Button>
                  </div>
            </div>
      );
};

export default EmployeeCard;
