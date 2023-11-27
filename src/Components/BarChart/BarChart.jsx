import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const SalaryChart = ({ data }) => {

      console.log(data)
  return (
    <BarChart
      width={600}
      height={400}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Salary" fill="#8884d8" />
    </BarChart>
  );
};

export default SalaryChart;
