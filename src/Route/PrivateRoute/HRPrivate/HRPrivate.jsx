import useAuth from '../../../Hooks/useAuth';
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner';
import { useNavigate } from 'react-router-dom';
import useHRCheck from '../../../Hooks/useHR/useHR';

const HRPrivate = ({ children }) => {
      const { isHR } = useHRCheck()
      const goto = useNavigate()
      const {user, loading} = useAuth()


      if(loading){
            return <LoadingSpinner></LoadingSpinner>
      }
      if (isHR) {

            return children

      }
      return goto('/')
};

export default HRPrivate;