import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

const Table = ({ columns, data }) => {
  return (
    <table className="w-full table-auto">
      <TableHead columns={columns} />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
