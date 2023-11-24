import React, { useState } from 'react';
import Testimonial from './Testimonial';
import SectionIntro from '../../../../Components/IntroSection/SectionIntro';

const testimonials = [  {
      imageUrl: 'https://i.postimg.cc/KvrSzTxg/alexandru-zdrobau-dj-RG1v-B1pw-unsplash.jpg',
      quote: "Your employee management system has revolutionized the way we collaborate. It's user-friendly and enhances productivity.",
      author: "Sarah Johnson",
      position: "Marketing Manager"
    },
    {
      imageUrl: 'https://i.postimg.cc/KvrSzTxg/alexandru-zdrobau-dj-RG1v-B1pw-unsplash.jpg',
      quote: "I appreciate the real-time analytics provided by your platform. It's made decision-making smoother and more data-driven.",
      author: "James Anderson",
      position: "CFO"
    },
    {
      imageUrl: 'https://i.postimg.cc/KvrSzTxg/alexandru-zdrobau-dj-RG1v-B1pw-unsplash.jpg',
      quote: "The employee feedback feature has transformed our workplace culture. Our team feels heard, leading to increased morale and engagement.",
      author: "Maria Rodriguez",
      position: "HR Manager"
    },
    {
      imageUrl: 'https://i.postimg.cc/KvrSzTxg/alexandru-zdrobau-dj-RG1v-B1pw-unsplash.jpg',
      quote: "The mobile accessibility of your platform is a game-changer. Managing tasks on the go has never been this seamless.",
      author: "David Carter",
      position: "Operations Director"
    },
    {
      imageUrl: 'https://i.postimg.cc/KvrSzTxg/alexandru-zdrobau-dj-RG1v-B1pw-unsplash.jpg',
      quote: "The training modules have significantly reduced onboarding time for new hires. Our team now adapts quickly and efficiently.",
      author: "Emily Thompson",
      position: "Training Coordinator"
    },
    {
      imageUrl: 'https://i.postimg.cc/KvrSzTxg/alexandru-zdrobau-dj-RG1v-B1pw-unsplash.jpg',
      quote: "Security is paramount for us, and your platform's robust data protection measures give us peace of mind. Trustworthy and reliable!",
      author: "Michael Brown",
      position: "IT Manager"
    }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="flex items-center bg-gray-100 lg:h-screen dark:bg-gray-800">
      <div className="flex flex-wrap gap-4 p-4 mx-auto max-w-7xl">
        <div className="w-full text-center lg:text-left lg:w-[30%] info my-10 lg:my-0 px-4">
          <SectionIntro title= ' Testimonials' description={' Discover what users are saying about our employee management system. Read testimonials from HR professionals, team leads, IT specialists, and more to understand the real-world impact of our platform. Our users share their experiences on how our system has transformed their daily workflows, improved collaboration, enhanced security, and streamlined processes. Join the growing community of satisfied users who have found success in managing their workforce more efficiently and effectively. Your success story could be the next one featured here!'}></SectionIntro>

        </div>
        <div className="flex-1">
          <div className="grid grid-cols-1 gap-4 lg:gap-4 sm:gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={index === currentIndex ? 'block' : 'hidden'}>
                <Testimonial {...testimonial} />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-x-1">
              <button className="p-3 text-white bg-blue-400 rounded" onClick={handlePrevClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                </svg>
              </button>
              <button className="p-3 text-white bg-blue-400 rounded" onClick={handleNextClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
            <div className="flex mr-16 circle gap-x-2">
              {testimonials.map((_, index) => (
                <div key={index} className={`w-2 h-2 ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'} rounded-full`}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
