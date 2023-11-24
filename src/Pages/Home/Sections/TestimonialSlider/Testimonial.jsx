import React from 'react';

const Testimonial = ({ imageUrl, quote, author, position }) => {
  return (
    <div className="mb-0 overflow-hidden bg-white rounded shadow dark:bg-gray-700">
      <div className="relative overflow-hidden h-72">
        <img className="object-cover w-full h-full transition-all hover:scale-110" src={imageUrl} alt="" />
      </div>
      <div className="relative z-20 p-8 -mt-14">
        <span className="inline-block p-3 mb-3 text-xs text-white bg-blue-500 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-quote" viewBox="0 0 16 16">
            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
          </svg>
        </span>

        <p className="mb-4 text-base leading-7 text-gray-400">{quote}</p>

        <h2 className="text-lg font-bold leading-9 text-black dark:text-white">{author}</h2>
        <span className="block text-xs font-semibold text-blue-500 uppercase dark:text-blue-300">{position}</span>
      </div>
    </div>
  );
};

export default Testimonial;
