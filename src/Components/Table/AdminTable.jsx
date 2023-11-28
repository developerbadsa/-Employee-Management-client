import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
      Card,
      CardHeader,
      Input,
      Typography,
      Button,
      CardBody,
      Chip,
      CardFooter,
      Tabs,
      TabsHeader,
      Tab,
      Avatar,
      IconButton,
      Tooltip,
} from "@material-tailwind/react";
import { useState } from "react";
import { RxCheck, RxCross1, RxTrash } from "react-icons/rx";
import { Link } from "react-router-dom";



export default function AdminTable({ tableHead, tableRow, setVerify, handlePay, handleDetails }) {

      const TABLE_HEAD = tableHead;

      const TABLE_ROWS = tableRow;

      return (
            <Card className=" w-full">

                  <CardBody className="overflow-scroll px-0">
                        <table className="mt-4 w-full min-w-max table-auto text-left">
                              <thead>
                                    <tr>
                                          {TABLE_HEAD.map((head) => (
                                                <th
                                                      key={head}
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
                                          ({ photoLink, name,  designation, email, isVerify, _id }, index) => {
                                                const isLast = index === TABLE_ROWS.length - 1;
                                                const classes = isLast
                                                      ? "p-4"
                                                      : "p-4 border-b border-blue-gray-50";

                                                return (
                                                      <tr key={email}>
                                                            <td className={classes}>
                                                                  <div className="flex items-center gap-3">
                                                                        {photoLink && <Avatar src={photoLink} alt={name} size="sm" />}
                                                                        <div className="flex flex-col">
                                                                              <Typography
                                                                                    variant="small"
                                                                                    color="blue-gray"
                                                                                    className="font-normal"
                                                                              >
                                                                                    {name}
                                                                              </Typography>
                                                                              <Typography
                                                                                    variant="small"
                                                                                    color="blue-gray"
                                                                                    className="font-normal opacity-70"
                                                                              >
                                                                                    {email}
                                                                              </Typography>
                                                                        </div>
                                                                  </div>
                                                            </td>
                                                            <td className={classes}>
                                                                  <div className="flex flex-col">
                                                                        <Typography
                                                                              variant="small"
                                                                              color="blue-gray"
                                                                              className="font-normal"
                                                                        >

                                                                        </Typography>
                                                                        <Typography
                                                                              variant="small"
                                                                              color="blue-gray"
                                                                              className="font-normal opacity-70"
                                                                        >
                                                                             {designation}
                                                                        </Typography>
                                                                  </div>
                                                            </td>
                                                            <td className={classes}>
                                                                  <Typography
                                                                        variant="small"
                                                                        color="blue-gray"
                                                                        className="font-normal"
                                                                  >
                                                                        make HR
                                                                  </Typography>
                                                            </td>
                                                            <td className={classes}>
                                                                  <Typography
                                                                        variant="small"
                                                                        color="blue-gray"
                                                                        className="font-normal text-red-600 text-xl"
                                                                  >
                                                                        <RxTrash></RxTrash>
                                                                  </Typography>
                                                            </td>
                                                      </tr>
                                                );
                                          },
                                    )}
                              </tbody>
                        </table>
                  </CardBody>
                  {/* <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </div>
      </CardFooter> */}
            </Card>
      );
}