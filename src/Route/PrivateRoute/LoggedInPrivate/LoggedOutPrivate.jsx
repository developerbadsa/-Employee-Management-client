
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner';

const LoggedOutPrivate = ({children}) => {

      const {user, loading} = useAuth()
      const goto = useNavigate()

      if(loading){
            return <LoadingSpinner></LoadingSpinner>
      }
      if(user){
           return goto('/')
      }

      return children
};

export default LoggedOutPrivate;