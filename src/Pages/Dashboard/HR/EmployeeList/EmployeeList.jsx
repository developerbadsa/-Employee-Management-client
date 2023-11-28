import React, { useState } from 'react';
import SectionIntro from '../../../../Components/IntroSection/SectionIntro';
import useAxiosSecure from '../../../../Hooks/AxiosSecure/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import TableUsable from '../../../../Components/Table/Table'
import Swal from 'sweetalert2';
import ReactModal from 'react-modal';
import { Button } from '@material-tailwind/react';
import useEmployee from '../../../../Hooks/useEmployee';

const EmployeeList = () => {
      const axiosSecure = useAxiosSecure()
      const [showPayModal, setShowPayModal] = useState(false)
      const [payEmail, setPayEmail] = useState('')
      const [salary, setSalary] = useState('')
      const [BankAcc, setBankAccount] = useState('')
      const [name, setName] = useState('')
      const [formData, setFormData] = useState({
            month: '',
            year: '',
      });
      const currentYear = new Date().getFullYear();
      const years = Array.from({ length: 11 }, (_, index) => currentYear + index);
      const {employeeList, isPending, refetch} = useEmployee()

      const handleChange = (e) => {
            setFormData({
                  ...formData,
                  [e.target.name]: e.target.value,
            });
      };


      // const { data: employeeList, isPending, refetch } = useQuery({
      //       queryKey: ['employeeList'],
      //       queryFn: async () => {
      //             try {
      //                   return await axiosSecure.get('/employee-list')

      //             } catch (err) {
      //                   console.log(err)
      //             }
      //       }
      // })

      if (isPending) {
            return 'loading'
      }
      if (employeeList?.data?.length == 0) {
            return <div className='text-2xl py-8 px-4 text-deep-orange-700'>No data to display</div>
      }

console.log(employeeList)
      // const {_id, name, bankAccount, position, Salary, designation, email, photoLink, isVerify}= employeeList?.data[0]

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

      const setVerify = (id) => {

            axiosSecure.put(`/employee-verify-update${id}`)
                  .then(res => {
                        if (res?.data?.modifiedCount) {
                              Swal.fire({
                                    title: "Mark as user Verified",
                                    icon: "success"
                              });
                              refetch()
                        } else if (res?.data?.modifiedCount === 0) {
                              Swal.fire({
                                    title: "Already You have updated",
                                    icon: "question"
                              });
                        }
                  })

      }

      const handlePay = ({ email, Salary, bankAccount, name }) => {
            setShowPayModal(true)
            setPayEmail(email)
            setSalary(Salary)
            setBankAccount(bankAccount)
            setName(name)
      }

      const handlePaySubmit = (e) => {
            e.preventDefault();

            formData.email = payEmail
            formData.paidAmount = salary
            formData.name = name
            formData.tnxid = 'transaction id'



            axiosSecure.post('/pay-to-employee', formData)

                  .then(res => {
                        setShowPayModal(false)
                        if (res.data.acknowledged) {
                              Swal.fire({
                                    icon: "success",
                                    title: `Successfully You have Paid to <span className='font-bold text-green-400'> ${name}</span>`,
                                    showConfirmButton: false,
                                    timer: 1500
                              });
                        }
                  })

      };

      const handleDetails = (id)=>{
            console.log('details', id)
      }


      return (
            <div>
                  <SectionIntro title={'All_Employee List'}></SectionIntro>
                  <TableUsable tableHead={tableHead} tableRow={employeeList.data} setVerify={setVerify} refetch={refetch} handlePay={handlePay} handleDetails={handleDetails}></TableUsable>


                  <ReactModal
                        isOpen={showPayModal}
                        onRequestClose={() => setShowPayModal(false)}
                        shouldCloseOnOverlayClick={true}
                        shouldCloseOnEsc={true}
                        ariaHideApp={false}
                        style={{
                              overlay: {
                                    backgroundColor: 'rgba(2, 0, 0, 0.2)',
                                    backdropFilter: 'blur(2px)'
                              },
                              content: {
                                    width: '450px',
                                    height: '350px',
                                    margin: 'auto',
                                    padding: '35px 5px',
                                    border: '1px solid black'
                              },
                        }} >


                        <div className="w-full flex flex-col justify-center items-center">
                              <h5 className='my-3 text-xl font-medium'>Pay On this Bank <span className='font-bold'>{BankAcc}</span></h5>

                              <form onSubmit={handlePaySubmit} className="bg-white  rounded px-8 pt-10 ">
                                    <div className='flex gap-5'>
                                          <div className="mb-5">
                                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="month">
                                                      Month
                                                </label>
                                                <select
                                                      id="month"
                                                      name="month"
                                                      value={formData.month}
                                                      onChange={handleChange}
                                                      required
                                                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                >
                                                      <option value="" disabled>Select a month</option>
                                                      <option value="January">January</option>
                                                      <option value="February">February</option>
                                                      <option value="March">March</option>
                                                      <option value="April">April</option>
                                                      <option value="May">May</option>
                                                      <option value="June">June</option>
                                                      <option value="July">July</option>
                                                      <option value="August">August</option>
                                                      <option value="September">September</option>
                                                      <option value="October">October</option>
                                                      <option value="November">November</option>
                                                      <option value="December">December</option>
                                                </select>
                                          </div>
                                          <div className="mb-6">
                                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="year">
                                                      Year
                                                </label>
                                                <select
                                                      id="year"
                                                      required
                                                      name="year"
                                                      value={formData.year}
                                                      onChange={handleChange}
                                                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                >
                                                      <option value="" disabled>Select a year</option>
                                                      {years.map((year) => (
                                                            <option key={year} value={year}>
                                                                  {year}
                                                            </option>
                                                      ))}
                                                </select>
                                          </div>
                                    </div>
                                    <div className="flex items-end justify-between mt-4">
                                          <button
                                                type="submit"
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                          >
                                                Pay Now
                                          </button>
                                          <button className="btn" onClick={() => setShowPayModal(false)}>
                                                Close
                                          </button>
                                    </div>
                              </form>

                        </div>
                  </ReactModal>
            </div>
      );
};

export default EmployeeList;