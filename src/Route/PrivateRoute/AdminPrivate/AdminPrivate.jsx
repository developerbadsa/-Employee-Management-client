import React from 'react';
import useAdminCheck from '../../../Hooks/useAdmin/useAdmin';
import useAuth from '../../../Hooks/useAuth';
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner';
import { useNavigate } from 'react-router-dom';

const AdminPrivate = ({ children }) => {
      const { isAdmin } = useAdminCheck()
      const goto = useNavigate()
      const {user, loading} = useAuth()


      if(loading){
            return <LoadingSpinner></LoadingSpinner>
      }
      if (isAdmin) {

            return children

      }
      return goto('/')
};

export default AdminPrivate;