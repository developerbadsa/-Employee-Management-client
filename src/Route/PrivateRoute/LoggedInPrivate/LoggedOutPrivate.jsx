import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Spinner } from '@material-tailwind/react';
import useAuth from '../../../Hooks/useAuth';

const LoggedOutPrivate = ({children}) => {

      const {user, loading} = useAuth()
      const goto = useNavigate()

      if(loading){
            return <Spinner className="h-16 w-16 text-gray-900/50" />
      }
      if(user){
           return goto('/')
      }

      return children
};

export default LoggedOutPrivate;