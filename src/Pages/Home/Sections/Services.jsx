
import SectionIntro from '../../../Components/IntroSection/SectionIntro';

const Services = () => {

      const servicesCard = [
            {
              name: 'Human Resource Information System (HRIS)',
              description: "Our cutting-edge HRIS is the cornerstone of efficient employee management. Centralize all employee data, streamline workflows, and gain real-time insights into your workforce. From onboarding to performance reviews, we've got you covered.",
              iconUrl: 'https://i.ibb.co/z2nJ5tP/1853614-200-removebg-preview.png',
            },
            {
              name: 'Attendance and Time Tracking',
              description: "Bid farewell to manual attendance tracking. Our automated system ensures accuracy, eliminates discrepancies, and provides a clear view of employee attendance patterns. Save time, reduce errors, and optimize resource allocation.",
              iconUrl: 'https://i.ibb.co/tYN1z3h/download-removebg-preview.png',
            },
            {
              name: 'Performance Management',
              description: "Empower your team to excel with our performance management tools. Set goals, track progress, and provide meaningful feedback. Foster a culture of continuous improvement and recognize achievements that drive your organization forward.",
              iconUrl: 'https://i.ibb.co/J5hcKMx/calendar-checkmark-icon.png',
            },
            {
              name: 'Employee Self-Service Portal',
              description: "Give your employees the autonomy they deserve. Our user-friendly self-service portal allows individuals to manage personal information, access paystubs, request time off, and more. Boost engagement and satisfaction with a seamless and interactive interface.",
              iconUrl: 'https://i.ibb.co/N7n2NKs/chart-arrow-up-icon.png',
            },
            {
              name: 'Communication and Collaboration Hub',
              description: "Strengthen the fabric of your organization with our communication and collaboration tools. Facilitate transparent communication, encourage collaboration across teams, and create a positive work environment where ideas flow effortlessly.",
              iconUrl: 'https://i.ibb.co/Jvgz0pq/5639568-removebg-preview.png',
            },
            {
              name: 'Training and Development',
              description: "Invest in the growth of your employees with our training and development modules. Identify skill gaps, create personalized learning paths, and track progress. Ensure your workforce is equipped with the skills needed to navigate the challenges of today and tomorrow.",
              iconUrl: 'https://i.ibb.co/MhTnNM1/training-icon.jpg',
            },
          ];
          


      return (
            <section className="flex items-center justify-center bg-gray-100 dark:bg-gray-800  py-6">
                  <div className="px-4 py-20 mx-auto max-w-7xl">
                  <SectionIntro title='Employee Management' description='At Employee Management , we understand that your employees are the heartbeat of your organization. Our suite of Employee Management services is meticulously designed to streamline your HR processes, enhance communication, and cultivate a workplace culture that breeds success.'></SectionIntro>
                        <div className="grid grid-cols-1 gap-x-4 gap-y-6 lg:gap-x-8 lg:gap-y-8 md:grid-cols-2 lg:grid-cols-3">


                              {
                                    servicesCard.map((Service, inx)=>(


                                          <div key={inx} className="w-full p-8 mb-5 text-center transition-all bg-white rounded shadow dark:bg-gray-700 hover:shadow-lg">
                                    <div className="inline-block p-4 mb-6 -mt-16 bg-blue-400 rounded-full">
                                         <img className='w-16 p-1' src={Service.iconUrl} alt="" />
                                    </div>
                                    <h3 className="mb-4 text-2xl font-semibold dark:text-white">
                                          {" "}
                                         {Service?.name}{" "}
                                    </h3>
                                    <p className="text-base text-gray-500 dark:text-gray-400">
                                    {Service?.description}
                                    </p>
                              </div>
                                    ))

                              }
                        </div>
                  </div>
            </section>

      );
};

export default Services;