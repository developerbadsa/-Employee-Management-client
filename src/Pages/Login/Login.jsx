import React from 'react';
import SectionIntro from '../../Components/IntroSection/SectionIntro';
import { Link } from 'react-router-dom';

const Login = () => {

      const handleLogin =(e)=>{
            e.preventDefault()
            const email = e.target.email.value
            const password = e.target.password.value

         const LoginFormData = {
             email, password
         } 

            console.log(LoginFormData)

      }


      return (
            <section className="py-16 bg-gray-100 dark:bg-gray-800">
                  <div className="max-w-4xl px-4 mx-auto ">
                        <div className="p-6 bg-white rounded-md shadow dark:border-gray-800 dark:bg-gray-900">
                              <SectionIntro title={'Login EM'}></SectionIntro>
                              <form onSubmit={handleLogin}>
                                    <div className="container px-4 mx-auto" />
                                    
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
                                    <div className="mb-6">
                                          <label
                                                className="block mb-2 text-sm font-medium dark:text-gray-400"
                                                htmlFor=""
                                          >
                                               Password
                                          </label>
                                          <input
                                                className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                                                type="password"
                                                name="password"
                                                placeholder="password"
                                          />
                                    </div>
                                    
                                    <div className="mt-7">
                                          <div className="flex justify-start space-x-2">
                                                <button
                                                      type="submit"
                                                      className="inline-block px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600"
                                                >
                                                      Login
                                                </button>
                                          </div>
                                          
                                    </div>
                                    <span className='-bottom-3 relative py-3 '>If You dont have Account please <Link to={'/register'} className='text-blue-800 '>Register Now</Link></span>
                              </form>
                        </div>
                  </div>
            </section>
      );
};

export default Login;