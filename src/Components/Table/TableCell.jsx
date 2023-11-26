import React from 'react';

const TableCell = ({ value }) => {
  return (
    <td className="flex items-center px-6 py-3 font-medium">
      {value}
    </td>
  )
};

export default TableCell;
