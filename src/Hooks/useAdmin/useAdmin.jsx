import { useQuery } from 'react-query';
import useAxiosSecure from '../AxiosSecure/useAxiosSecure';
import useAuth from '../useAuth';

const useAdminCheck = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: isAdmin, isLoading, isError } = useQuery(
    ['isAdmin', user?.email],
    async () => {
      const response = await axiosSecure.post('/isAdmin', { email: user?.email });
      return response.data;
    },
    {
      enabled: !!user?.email, 
    }
  );

  return {
    isAdmin,
    isLoading,
     isError,
  };
};

export default useAdminCheck;
