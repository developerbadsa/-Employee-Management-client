import React from 'react';
import TableRow from './TableRow';

const TableBody = ({ data, columns }) => {
      return (
            <tbody>
                  {data.map((row) => (
        <TableRow key={row.id} row={row} columns={columns} />
      ))}

                 
                  
            </tbody>
      );
};

export default TableBody;
