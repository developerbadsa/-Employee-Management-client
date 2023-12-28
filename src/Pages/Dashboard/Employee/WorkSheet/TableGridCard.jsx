import React from 'react';
import {
      Card,
      CardBody,
      CardFooter,
      Typography,
      Button,
    } from "@material-tailwind/react";
     
//     {task, workedDate, workedHours}
const TableGridCard = ({data}) => {
      const {task, workedDate, workedHours} = data;

     return (
        <Card className="mt-6 w-96">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
             Work Name: {task}
            </Typography>
            <Typography>
              Your Work Date: {workedDate}
            </Typography>
            <Typography>
              Your Work Hours: {workedHours}
            </Typography>
          </CardBody>
        </Card>
      );
};

export default TableGridCard;

