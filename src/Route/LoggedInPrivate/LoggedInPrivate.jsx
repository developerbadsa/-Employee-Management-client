import useAuth from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const LoggedInPrivate = ({children}) => {

      const goto = useNavigate()

      const {user, loading} = useAuth()

      if(loading){
            return "loading"
      }

      if(!user){
            goto('/login')
            return 
      }


      return children
};

export default LoggedInPrivate;