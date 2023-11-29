
import { Navigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner';

const LoggedOutPrivate = ({children}) => {

      const {user, loading} = useAuth()

      if(loading){
            return <LoadingSpinner></LoadingSpinner>
      }
      if(user){
           return <Navigate to='/login'></Navigate>
      }

      return children
};

export default LoggedOutPrivate;