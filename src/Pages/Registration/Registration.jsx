import { useState } from 'react';
import SectionIntro from '../../Components/IntroSection/SectionIntro';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hooks/useAxiosPublic/useAxiosPublic';

const Registration = () => {
      const [imgUrl, setImgUrl] = useState(null)
      const { createUser, user, loading, setLoading, updateUserProfile } = useAuth()
      const goto = useNavigate()
      const axiosPublic = useAxiosPublic()

      const handleImg = (e) => {
            const file = e.target.files[0];

            if (file) {
                  const reader = new FileReader();

                  reader.onloadend = () => {
                        setImgUrl(reader.result);
                  };

                  reader.readAsDataURL(file);
            } else {
                  setImgUrl(null);
            }
      }

      const handleRegister = async (e) => {
            e.preventDefault()
            const name = e.target.name.value
            const bankAccount = e.target.Bank.value
            const position = e.target.Position.value
            const Salary = e.target.salary.value
            const designation = e.target.designation.value
            const email = e.target.email.value
            const password = e.target.password.value
            const photo = e.target.photo.files[0]
            setLoading(false)


            const imgApiSecret = import.meta.env.VITE_IMGAPI
            const imgApi = `https://api.imgbb.com/1/upload?key=${imgApiSecret}`


            try {

                  // post image and get link to imagebb
                  const res = await axios.post(imgApi, { image: photo }, {
                        headers: {
                              'content-type': 'multipart/form-data'
                        }
                  })
                  const photoLink = res?.data?.data?.url
                  const RegisterFormData = {
                        name, bankAccount, position, Salary, designation, email, photoLink
                  }


                  const hasUppercase = /[A-Z]/.test(password);
                  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

                  if (password.length < 6) {
                        Swal.fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Password Lenth At least 6 characters",
                        })
                  } else if (!hasUppercase) {
                        Swal.fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Password  At least One Uppercase",
                        })
                  } else if (!hasSpecialChar) {
                        Swal.fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Password  At  One Special Characters",
                        })
                  } else if (!position) {
                        Swal.fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Please select your position",
                        })
                  }
                  else {

                        try {

                              await createUser(email, password)
                                    .then(async () => {

                                          await updateUserProfile(name, photoLink)

                                          const FormDataRes = await axiosPublic.post('/users', RegisterFormData)
                                          if (FormDataRes.data.insertedId) {
                                                Swal.fire({
                                                      icon: "success",
                                                      title: "Registration Success",
                                                      showConfirmButton: false,
                                                      timer: 1500
                                                })
                                                goto('/dashboard/profile')

                                                window.location.reload()
                                          } else {
                                                Swal.fire({
                                                      icon: "warning",
                                                      title: `Essue with register`,
                                                      showConfirmButton: false,
                                                      timer: 1500
                                                })
                                          }


                                    }
                                    )


                        } catch (error) {
                              Swal.fire({
                                    icon: 'warning',
                                    title: `${error?.code}`,
                                    showConfirmButton: false,
                                    timer: 1500
                              })
                        }


                  }


            } catch (err) {
                  Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Error While registration",
                  })
            }






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
                                                Full Name <span className='text-red-900 text-xl'>*</span>
                                          </label>
                                          <input
                                                className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                                                type="text"
                                                name="name"
                                                placeholder=" Full name"
                                                required
                                          />
                                    </div>
                                    <div className="mb-6">
                                          <label className="block mb-2 text-sm font-medium dark:text-gray-400"
                                                htmlFor=""  >
                                                Position <span className='text-red-900 text-xl'>*</span>
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
                                                Bank Account Number <span className='text-red-900 text-xl'>*</span>
                                          </label>
                                          <input
                                                className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                                                type="number"
                                                name="Bank"
                                                placeholder="Enter Bank Account Number"
                                                required
                                          />
                                    </div>
                                    <div className="mb-6">
                                          <label
                                                className="block mb-2 text-sm font-medium dark:text-gray-400"
                                                htmlFor=""
                                          >
                                                salary <span className='text-red-900 text-xl'>*</span>
                                          </label>
                                          <input
                                                className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                                                type="number"
                                                name="salary"
                                                placeholder="Enter salary"
                                                required
                                          />
                                    </div>
                                    <div className="mb-6">
                                          <label
                                                className="block mb-2 text-sm font-medium dark:text-gray-400"
                                                htmlFor=""
                                          >
                                                designation <span className='text-red-900 text-xl'>*</span>
                                          </label>
                                          <input
                                                className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                                                type="text"
                                                name="designation"
                                                placeholder="Your Designation"
                                                required
                                          />
                                    </div>
                                    <div className="mb-6">
                                          <label
                                                className="block mb-2 text-sm font-medium dark:text-gray-400"
                                                htmlFor=""
                                          >
                                                Your Email <span className='text-red-900 text-xl'>*</span>
                                          </label>
                                          <input
                                                className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                                                type="email"
                                                name="email"
                                                placeholder="Your Designation"
                                                required
                                          />
                                    </div>
                                    {/* Password field */}
                                    <div className="mb-6">
                                          <label
                                                className="block mb-2 text-sm font-medium dark:text-gray-400"
                                                htmlFor=""
                                          >
                                                Password <span className='text-red-900 text-xl'>*</span>
                                          </label>
                                          <input
                                                className="block w-full px-4 py-3 mb-2 text-sm placeholder-gray-500 bg-white border rounded dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800"
                                                type="text"
                                                name="password"
                                                placeholder="password"
                                                required
                                          />
                                    </div>
                                    <div className="mb-6 ">
                                          <label
                                                className="block mb-2 text-sm font-medium dark:text-gray-400"
                                                htmlFor=""
                                          >
                                                Upload Your Photo <span className='text-red-900 text-xl'>*</span>
                                          </label>
                                          <div className="py-2 shrink-0">
                                                {imgUrl && <img
                                                      className="object-cover w-16 h-16 rounded-full"
                                                      src={imgUrl}
                                                      alt="Current profile photo"
                                                />}
                                          </div>
                                          <label className="block pt-2">
                                                <span className="sr-only ">Choose profile photo</span>
                                                <input
                                                      onChange={handleImg}
                                                      type="file"
                                                      name='photo'
                                                      required
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
                                    <span className='-bottom-3 relative py-3 '>If You have Account please <Link to={'/login'} className='text-blue-800 '>Login Now</Link></span>
                              </form>
                        </div>
                  </div>
            </section>

      );
};

export default Registration;