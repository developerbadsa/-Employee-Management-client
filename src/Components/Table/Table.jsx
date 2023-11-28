
const Table = ({ columns, data }) => {
  return (
    // <table>
    //   <thead className="bg-lightGray-50">
    //     <tr className="text-xs text-left text-gray-500 border-b border-gray-200 dark:border-gray-800 ">
    //       {columns.map((column) => (
    //         <th className="flex items-center py-4 pl-6 font-medium dark:text-gray-400">
    //         <span>Name</span>
    //       </th>
    //       ))}
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {data.map((row) => (
    //       <tr key={row.id} >
    //         {columns.map((column) => (
    //           <td key={column.key}>{row[column.key]}</td>
    //         ))}
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>

    <table className="w-full table-auto">
      <thead className="bg-lightGray-50">
        <tr className="text-xs text-left text-gray-500 border-b border-gray-200 dark:border-gray-800">
          <th className="flex items-center py-4 pl-6 font-medium dark:text-gray-400"> 
          {columns.map((column,inx) => (
            <th key={inx} className="flex items-center py-4 pl-6 font-medium dark:text-gray-400">
            <span>Name</span>
          </th>
          ))} </th>
          
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-gray-200 dark:border-gray-800">
          <td className="flex items-center px-6 py-3 font-medium">
            <input className="mr-4" type="checkbox" name="" id="" />
            <div className="flex">
              <img
                className="object-cover w-10 h-10 mr-4 rounded-full"
                src="https://i.postimg.cc/WbPKvgBr/pexels-italo-melo-2379005.jpg"
                alt=""
              />
              <div>
                <p className="text-sm font-medium dark:text-gray-400">
                  John Smith
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  john@gmail.com
                </p>
              </div>
            </div>
          </td>
          <td className="px-6 text-sm font-medium dark:text-gray-400">
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
          </td>
        </tr>
        <tr className="border-b border-gray-200 dark:border-gray-800">
          <td className="flex items-center px-6 py-3 font-medium">
            <input className="mr-4" type="checkbox" name="" id="" />
            <div className="flex">
              <img
                className="object-cover w-10 h-10 mr-4 rounded-full"
                src="https://i.postimg.cc/WbPKvgBr/pexels-italo-melo-2379005.jpg"
                alt=""
              />
              <div>
                <p className="text-sm font-medium dark:text-gray-400">
                  Adam Smith
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  adam@gmail.com
                </p>
              </div>
            </div>
          </td>
          <td className="px-6 text-sm font-medium dark:text-gray-400">
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
          </td>
        </tr>
        <tr className="border-b border-gray-200 dark:border-gray-800">
          <td className="flex items-center px-6 py-3 font-medium">
            <input className="mr-4" type="checkbox" name="" id="" />
            <div className="flex">
              <img
                className="object-cover w-10 h-10 mr-4 rounded-full"
                src="https://i.postimg.cc/WbPKvgBr/pexels-italo-melo-2379005.jpg"
                alt=""
              />
              <div>
                <p className="text-sm font-medium dark:text-gray-400">
                  Adron Anthony
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  adron@gmail.com
                </p>
              </div>
            </div>
          </td>
          <td className="px-6 text-sm font-medium dark:text-gray-400">
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
          </td>
        </tr>
        <tr className="border-b border-gray-200 dark:border-gray-800">
          <td className="flex items-center px-6 py-3 font-medium">
            <input className="mr-4" type="checkbox" name="" id="" />
            <div className="flex">
              <img
                className="object-cover w-10 h-10 mr-4 rounded-full"
                src="https://i.postimg.cc/WbPKvgBr/pexels-italo-melo-2379005.jpg"
                alt=""
              />
              <div>
                <p className="text-sm font-medium dark:text-gray-400">
                  Robin Adren
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  robin@gmail.com
                </p>
              </div>
            </div>
          </td>
          <td className="px-6 text-sm font-medium dark:text-gray-400">
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
              Declined
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
          </td>
        </tr>
      </tbody>
    </table>


  );
};

export default Table;
