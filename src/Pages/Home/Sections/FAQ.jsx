import React, { useState } from 'react';
import SectionIntro from '../../../Components/IntroSection/SectionIntro';

const FaqSection = () => {
  const faqs = [
      {
            question: "How do I add new employees to the system?",
            answer: "To add new employees, navigate to the 'Employees' section in the dashboard. Click on the 'Add Employee' button, and fill in the required information such as name, position, and contact details."
          },
          {
            question: "Can I customize access levels for different employees?",
            answer: "Yes, our system allows you to customize access levels based on roles. In the 'Settings' menu, go to 'Access Control' to define permissions for different user roles."
          },
          {
            question: "Is it possible to track employee attendance and working hours?",
            answer: "Absolutely! Our employee management system includes a robust attendance tracking feature. You can view and manage attendance records in the 'Attendance' section."
          },
          {
            question: "How can employees request time off or vacation?",
            answer: "Employees can request time off by accessing their personal dashboard. There, they will find a 'Time Off Request' feature, allowing them to submit their requests. Managers can then review and approve/reject these requests in the admin dashboard."
          },
          {
            question: "What security measures are in place to protect employee data?",
            answer: "Security is our top priority. We employ industry-standard encryption protocols to safeguard all employee data. Additionally, access controls and authentication mechanisms ensure that only authorized personnel can access sensitive information."
          },
          {
            question: "Is there a mobile app for the employee management system?",
            answer: "Yes, we offer a mobile app for both Android and iOS platforms. Employees can download the app to access their profiles, receive notifications, and manage tasks on the go."
          }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex items-center bg-gray-100 lg:h-screen dark:bg-gray-800">
      <div className="p-4 mx-auto ">
        <div className="text-center mb-14">
        <SectionIntro title='Frequently_Asked Questions' description='(FAQ) section for an employee management website'></SectionIntro>
        </div>
        <div className="max-w-xl">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-2">
              <div
                className="flex flex-col justify-between w-full px-6 py-4 bg-white rounded shadow dark:bg-gray-700 cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold dark:text-white">
                    {faq.question}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className={`text-blue-500 ${openIndex === index ? 'rotate-180' : ''}`}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </div>
              </div>
              {openIndex === index && (
                <div className="flex flex-col justify-between w-full px-6 py-4 mb-2 bg-white rounded shadow dark:bg-gray-700">
                  <div className="text-sm text-gray-500 dark:text-gray-400 answer">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
