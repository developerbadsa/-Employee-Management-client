
import {
      Card,
      CardBody,
      Typography,
    } from "@material-tailwind/react";

const TableGridCard = ({data}) => {
      const {task, workedDate, workedHours} = data;

     return (
        <Card className="mt-6 ">
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

