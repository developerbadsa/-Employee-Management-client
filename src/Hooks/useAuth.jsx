import{ useContext } from 'react';
import { userAuth } from '../AuthProvider/AuthProvider';

const useAuth = () => {
      const {createUser} = useContext(userAuth)
      return (
            [createUser]
      );
};

export default useAuth;