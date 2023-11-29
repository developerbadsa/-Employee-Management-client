
import { Navigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner';

const LoggedInPrivate = ({ children }) => {
      const { user, loading } = useAuth();
    

    
      if (loading ) {
        return <LoadingSpinner></LoadingSpinner>
      } 
      if(user){
            return children
      }
      return <Navigate to="/login"  replace></Navigate>
    };
    

export default LoggedInPrivate;
