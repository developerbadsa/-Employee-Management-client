import React, { useEffect } from 'react';
import useAdminCheck from '../../../Hooks/useAdmin/useAdmin';
import useAuth from '../../../Hooks/useAuth';
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner';
import { useNavigate } from 'react-router-dom';

const AdminPrivate = ({ children }) => {
  const { isAdmin, isLoading } = useAdminCheck();
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading) {
      if (!isAdmin) {
        navigate('/');
      }
    }
  }, [isLoading, isAdmin, navigate]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return children;
};

export default AdminPrivate;
