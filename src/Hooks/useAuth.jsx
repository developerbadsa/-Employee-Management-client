import{ useContext } from 'react';
import { userAuth } from '../AuthProvider/AuthProvider';

const useAuth = () => {
      const {createUser, login, logout, user, updateUserProfile, loading, setLoading} = useContext(userAuth)
      return  {createUser, login, logout, user, updateUserProfile, loading, setLoading}
};

export default useAuth;