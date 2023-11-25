import{ useContext } from 'react';
import { userAuth } from '../AuthProvider/AuthProvider';

const useAuth = () => {
      const {createUser, login, logout, user, updateUserProfile} = useContext(userAuth)
      return  {createUser, login, logout, user, updateUserProfile}
};

export default useAuth;