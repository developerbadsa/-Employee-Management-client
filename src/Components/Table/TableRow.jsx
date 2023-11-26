import React from 'react';
import TableCell from './TableCell';

const TableRow = ({ row, columns }) => {
  return (
    // <tr className="border-b border-gray-200 dark:border-gray-800">
    //   {columns.map((column, index) => (
    //     <TableCell key={index} value={row[column.key]} />
    //   ))}
    // </tr>

    <tr className={`grid grid-cols-${columns.length} border-b border-gray-200 dark:border-gray-800 flex`}>

      {columns.map((column, index) => (
        <TableCell key={index} value={row[column.key]} />


      ))}
      {/* <td className="px-6 text-sm font-medium dark:text-gray-400">
        28
      </td>
      <td className="px-6 text-sm font-medium dark:text-gray-400">
        07/01/2022
      </td>
      <td className="px-6 text-sm font-medium dark:text-gray-400">
        Product Designer
      </td>
      <td className="px-6 text-sm font-medium dark:text-gray-400">
        <span className="inline-block px-2 py-1 text-blue-700 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-gray-400">
          Approved
        </span>
      </td>
      <td className="px-6">
        <div className="flex ">
          <a
            href="#"
            className="px-4 py-2 mr-4 text-sm text-gray-600 bg-gray-200 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-300"
          >
            Edit
          </a>
          <a
            href="#"
            className="px-4 py-2 text-sm text-gray-600 bg-gray-200 rounded-md dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-300"
          >
            call
          </a>
        </div>
      </td>
      <td className="px-6 text-sm font-medium">
        <a
          href="#"
          className="text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            className="bi bi-three-dots"
            viewBox="0 0 16 16"
          >
            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
          </svg>
        </a>
      </td> */}
    </tr>
  );
};

export default TableRow;
