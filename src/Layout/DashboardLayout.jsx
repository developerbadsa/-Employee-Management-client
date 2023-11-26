import React from 'react';
import Dashboard from '../Pages/Dashboard/Dashboard';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
      return (
            <div>
                  <Dashboard></Dashboard>
                  <Outlet></Outlet>
            </div>
      );
};

export default DashboardLayout;