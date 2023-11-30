import React, { useState } from 'react';
import SectionIntro from '../../../../Components/IntroSection/SectionIntro';
import useAxiosSecure from '../../../../Hooks/AxiosSecure/useAxiosSecure';
import Swal from 'sweetalert2';
import ReactModal from 'react-modal';
import useEmployee from '../../../../Hooks/useEmployee';
import LoadingSpinner from '../../../../Components/LoadingSpinner/LoadingSpinner';
import TableUsable from '../../../../Components/Table/Table';
import EmployeeCard from '../../../../Components/EmployeeCard/EmployeeCard';
import { Button } from '@material-tailwind/react';
import { RxGrid, RxTable } from 'react-icons/rx';

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
      const { employeeList, isPending, refetch } = useEmployee()
      const [tableView, setTableView] = useState(true)

      const handleChange = (e) => {
            setFormData({
                  ...formData,
                  [e.target.name]: e.target.value,
            });
      };

      if (isPending) {
            return <LoadingSpinner></LoadingSpinner>
      }
      if (employeeList?.data?.length == 0 || !employeeList) {
            return <div className='text-2xl py-8 px-4 text-deep-orange-700'>No data to display</div>
      }

      console.log(employeeList.data)
      // const {_id, name, bankAccount, position, Salary, designation, email, photoLink, isVerify}= employeeList?.data[0]

      const tableHead = ["Name", "Payment", "Verified", "Salary", "Details", ""]


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


            axiosSecure.get('/payment-list-check', {
                  params: {
                        formData
                  }
            })
                  .then(res => {
                        if (res.data) {
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
                        } else {
                              Swal.fire({
                                    icon: "warning",
                                    title: `You Have Paid That Employee on ${formData?.month}, you can't twice`,
                                    showConfirmButton: false,
                                    timer: 1500
                              });
                        }
                  })



      };

      const handleDetails = (id) => {
            console.log('details', id)
      }
      const handleSalary = (e) => {
            setSalary(e.target.value)
      }
      const employeeDatas = employeeList?.data;

      console.log(employeeDatas)
      return (
            <div>
                  <SectionIntro title={'All_Employee List'}></SectionIntro>
                  <div className='flex justify-between px-12 my-10 border-b py-4'>
                        <div></div>
                        <div>
                              {!tableView ? <Button onClick={()=>setTableView(true)} className='flex gap-2'>
                                    See Table View <RxTable></RxTable>
                              </Button>:<Button onClick={()=>setTableView(false)} className='flex gap-2'>
                                    See Grid View <RxGrid></RxGrid>
                              </Button>}
                        </div>
                  </div>
                 {tableView && <TableUsable tableHead={tableHead} tableRow={employeeList?.data} setVerify={setVerify} refetch={refetch} handlePay={handlePay} handleDetails={handleDetails}></TableUsable>}
                 {!tableView && <div className='grid lg:grid-cols-3 md:grid-cols-2'>
                        {
                              employeeDatas.map((employee, inx) => <EmployeeCard key={inx} employeeData={employee}></EmployeeCard>)
                        }
                  </div>}

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
                                    <div className='flex justify-between items-center gap-3'>
                                          <span className=' flex-nowrap'>Salary Amount Of Employee</span>
                                          <input onChange={handleSalary} defaultValue={salary} placeholder='Please Write here Pay Amount' className=' flex-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="number" />
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