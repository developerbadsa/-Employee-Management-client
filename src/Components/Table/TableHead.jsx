import React from 'react';

const TableHead = ({ columns }) => {
  return (
    <thead className="bg-lightGray-50">
      <tr className={`text-xs  text-gray-500 border-b border-gray-200 dark:border-gray-800 grid grid-cols-${columns.length}`}>
        {columns.map((column, index) => (
          <th key={index} className="flex items-center py-4 pl-6 font-medium dark:text-gray-400">
            <span>{column.title}</span>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
