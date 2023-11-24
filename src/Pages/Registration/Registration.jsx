import React from 'react';
import SectionIntro from '../../Components/IntroSection/SectionIntro';

const Registration = () => {
      const handleRegister =(e)=>{
            e.preventDefault()
            const name = e.target.name.value
            const bankAccount = e.target.Bank.value
            const position = e.target.Position.value
            const Salary = e.target.salary.value
            const designation = e.target.designation.value
            const email = e.target.email.value
            const photo = e.target.photo.value

         const RegisterFormData = {
            name, bankAccount, position, Salary, designation, email, photo
         } 

            console.log(RegisterFormData)

      }



      return (
            <section className="py-16 bg-gray-100 dark:bg-gray-800">
                  <div className="max-w-4xl px-4 mx-auto ">
                        <div className="p-6 bg-white rounded-md shadow dark:border-gray-800 dark:bg-gray-900">
                              <SectionIntro title={'Registration EM'}></SectionIntro>
                              <form onSubmit={handleRegister}>
                                    <div className="container px-4 mx-auto" />
                                    <div className="mb-6">
                                          <label
                                                className="block mb-2 text-sm font-medium dark:text-gray-400"
                                                htmlFor=""
                                          >
                                                Full Name
                                          </label>
                                          <input
                                                className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                                                type="text"
                                                name="name"
                                                placeholder=" Full name"
                                          />
                                    </div>
                                    <div className="mb-6">
                                          <label className="block mb-2 text-sm font-medium dark:text-gray-400"
                                                htmlFor=""  >
                                                Position
                                          </label>
                                          <div className="relative">
                                                <select
                                                      className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded appearance-none dark:text-gray-400 dark:border-gray-900 dark:bg-gray-800"
                                                      name="Position" required
                                                >
                                                      <option>Employee </option>
                                                      <option>HR</option>
                                                      <option>Admin</option>
                                                </select>
                                                <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 pointer-events-none">
                                                      <svg
                                                            className="w-4 h-4 fill-current"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                      >
                                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                                                      </svg>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="mb-6">
                                          <label
                                                className="block mb-2 text-sm font-medium dark:text-gray-400"
                                                htmlFor=""
                                          >
                                               Bank Account Number
                                          </label>
                                          <input
                                                className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                                                type="number"
                                                name="Bank"
                                                placeholder="Enter Bank Account Number"
                                          />
                                    </div>
                                    <div className="mb-6">
                                          <label
                                                className="block mb-2 text-sm font-medium dark:text-gray-400"
                                                htmlFor=""
                                          >
                                               salary
                                          </label>
                                          <input
                                                className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                                                type="number"
                                                name="salary"
                                                placeholder="Enter salary"
                                          />
                                    </div>
                                    <div className="mb-6">
                                          <label
                                                className="block mb-2 text-sm font-medium dark:text-gray-400"
                                                htmlFor=""
                                          >
                                               designation
                                          </label>
                                          <input
                                                className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                                                type="text"
                                                name="designation"
                                                placeholder="Your Designation"
                                          />
                                    </div>
                                    <div className="mb-6">
                                          <label
                                                className="block mb-2 text-sm font-medium dark:text-gray-400"
                                                htmlFor=""
                                          >
                                               Your Email
                                          </label>
                                          <input
                                                className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                                                type="email"
                                                name="email"
                                                placeholder="Your Designation"
                                          />
                                    </div>
                                    <div className="mb-6 ">
                                          <label
                                                className="block mb-2 text-sm font-medium dark:text-gray-400"
                                                htmlFor=""
                                          >
                                                Upload Your Photo
                                          </label>
                                          <div className="py-2 shrink-0">
                                                <img
                                                      className="object-cover w-16 h-16 rounded-full"
                                                      src="https://i.postimg.cc/bNyr5cJq/pexels-anastasia-shuraeva-5704720.jpg"
                                                      alt="Current profile photo"
                                                />
                                          </div>
                                          <label className="block pt-2">
                                                <span className="sr-only ">Choose profile photo</span>
                                                <input
                                                      type="file"
                                                      name='photo'
                                                      className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold dark:file:bg-gray-600 dark:file:text-gray-200 dark:hover:file:bg-gray-700 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 "
                                                />
                                          </label>
                                    </div>
                                    <div className="mt-7">
                                          <div className="flex justify-start space-x-2">
                                                <button
                                                      type="submit"
                                                      className="inline-block px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600"
                                                >
                                                      Registration
                                                </button>
                                          </div>
                                    </div>
                              </form>
                        </div>
                  </div>
            </section>

      );
};

export default Registration;