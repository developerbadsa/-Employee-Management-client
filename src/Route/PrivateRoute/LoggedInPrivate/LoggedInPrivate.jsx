import { Spinner } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const LoggedInPrivate = ({children}) => {

      const goto = useNavigate()

      const {user, loading} = useAuth()

      if(loading){
            return <Spinner className="h-16 w-16 text-gray-900/50" />
      }

      if(!user){
            goto('/login')
            return 
      }


      return children
};

export default LoggedInPrivate;