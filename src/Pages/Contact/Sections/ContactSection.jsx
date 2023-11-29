import React from 'react';
import SectionIntro from '../../../Components/IntroSection/SectionIntro';

const ContactSection = () => {
      return (
            <section className="flex items-center bg-gray-100 lg:h-screen font-poppins dark:bg-gray-800 my-44">
                  <div className="justify-center flex-1  px-4 py-4 mx-auto lg:py-11 md:px-6">
                        <div className="border border-gray-200 shadow-md bg-gradient-to-l dark:border-gray-900  via-gray-50 dark:via-gray-900 from-blue-100 to-blue-100 dark:to-gray-900 dark:from-gray-900 py-11">
                              {/* <SectionIntro title={'Contact Us'} description={'Have questions or need assistance? Feel free to reach out to us. Were here to help!'}></SectionIntro> */}
                              <div className="flex flex-col-reverse flex-wrap lg:flex-row">
                                    <div className="w-full px-4 lg:w-1/2 ">
                                          <h2 className="px-6 text-xl font-semibold dark:text-gray-400">
                                                Please fill your credentials for further information.
                                          </h2>
                                          <form action="" className="p-6 ">
                                                <div className="mb-6">
                                                      <input
                                                            type="text"
                                                            placeholder="Name"
                                                            required=""
                                                            className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border rounded-md bg-gray-50 lg:mb-0 dark:text-gray-400 dark:placeholder-gray-500 dark:border-gray-800 dark:bg-gray-800 "
                                                      />
                                                </div>
                                                <div className="mb-6 ">
                                                      <input
                                                            type="text"
                                                            placeholder="Email"
                                                            required=""
                                                            className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border border-gray-200 rounded-md bg-gray-50 dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 "
                                                      />
                                                </div>
                                                <div className="mb-6 ">
                                                      <textarea
                                                            type="message"
                                                            placeholder="Message"
                                                            required=""
                                                            className="block w-full px-4 pt-4 leading-tight text-gray-700 border border-gray-200 rounded-md bg-gray-50 dark:placeholder-gray-500 pb-7 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 "
                                                            defaultValue={""}
                                                      />
                                                </div>
                                                <button className="w-full px-4 py-3 font-medium text-gray-100 bg-blue-600 rounded-md shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-700">
                                                      Send
                                                </button>
                                          </form>
                                    </div>
                                    <div className="w-full px-4 lg:w-1/2 mb-11 lg:mb-0">
                                          <h2 className="px-6 pb-6 text-3xl font-semibold text-gray-600 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                                                Get In Touch with us
                                          </h2>
                                          <div className="p-6">
                                                <div className="flex mb-6 text-gray-400 dark:text-gray-400">
                                                      <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={16}
                                                            height={16}
                                                            fill="currentColor"
                                                            className="text-gray-600 w-7 h-7 dark:text-gray-400 bi bi-geo-alt"
                                                            viewBox="0 0 16 16"
                                                      >
                                                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                      </svg>
                                                      <div className="max-w-xl ml-4 text-lg font-semibold tracking-wide text-gray-500 dark:text-gray-400">
                                                            123 Tech Avenue
                                                            Cityville, State 56789
                                                            Country
                                                      </div>
                                                </div>
                                                <div className="flex mb-6 text-gray-400 dark:text-gray-400">
                                                      <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={16}
                                                            height={16}
                                                            fill="currentColor"
                                                            className="text-gray-600 w-7 h-7 bi bi-telephone dark:text-gray-400"
                                                            viewBox="0 0 16 16"
                                                      >
                                                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                                      </svg>
                                                      <div className="max-w-xl ml-4 text-lg font-semibold tracking-wide text-gray-500 dark:text-gray-400">
                                                            <span> +1 (555) 123-4567 ,</span> <span> +977-014151678</span>
                                                      </div>
                                                </div>
                                                <div className="flex text-gray-400 dark:text-gray-400">
                                                      <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={16}
                                                            height={16}
                                                            fill="currentColor"
                                                            className="text-gray-600 w-7 h-7 dark:text-gray-400 bi bi-envelope"
                                                            viewBox="0 0 16 16"
                                                      >
                                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                                      </svg>
                                                      <div className="max-w-xl ml-4 text-lg font-semibold tracking-wide text-gray-500 dark:text-gray-400">
                                                            support@employeemanagement.com
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section >

      );
};

export default ContactSection;