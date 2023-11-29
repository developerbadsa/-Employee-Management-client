import useAuth from '../../../Hooks/useAuth';
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner';
import { Navigate, useNavigate } from 'react-router-dom';
import useEmployeeCheck from '../../../Hooks/useEmployee/useEmployee';

const EmployeePrivate = ({ children }) => {
      const { isEmployee, isLoading } = useEmployeeCheck()
      const { loading} = useAuth()


      if(loading || isLoading){
            return <LoadingSpinner></LoadingSpinner>
      }
      if (isEmployee) {

            return children

      }
      return <Navigate to="/"  replace></Navigate>
};

export default EmployeePrivate;