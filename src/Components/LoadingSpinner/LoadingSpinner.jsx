import { Spinner } from '@material-tailwind/react';
import React from 'react';

const LoadingSpinner = () => {
      return (
            <div className="h-[70vh] flex justify-center items-center">
                  <Spinner className="h-32 w-32 text-gray-900/50" />
            </div>
      );
};

export default LoadingSpinner;