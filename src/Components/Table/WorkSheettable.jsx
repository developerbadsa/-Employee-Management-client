import { Card, CardBody, Typography } from "@material-tailwind/react";

export default function TableUsable({ tableHead, tableRow}) {

      const TABLE_HEAD = tableHead;
    
      const TABLE_ROWS = tableRow.slice().reverse();
    console.log(tableRow)
      return (
        <Card className="w-full">
          <CardBody className="overflow-scroll px-0">
            <table className="mt-4 w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head,inx) => (
                    <th
                      key={inx}
                      className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS?.map(
                  ({ task, workedDate, workedHours }, index) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";
    
                    return (
                      <tr key={index}>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {task}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            { workedHours}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {workedDate}
                          </Typography>
                        </td>
                      </tr>
                    );
                  },
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
      );
    }
    