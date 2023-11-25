import{ useContext } from 'react';
import { userAuth } from '../AuthProvider/AuthProvider';

const useAuth = () => {
      const {createUser, login, logout, user} = useContext(userAuth)
      return  {createUser, login, logout, user}
};

export default useAuth;