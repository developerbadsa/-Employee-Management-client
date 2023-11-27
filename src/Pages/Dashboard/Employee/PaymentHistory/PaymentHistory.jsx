import React from 'react';
import TableUsable from '../../../../Components/Table/paymenthistory';

const PaymentHistory = () => {

      const exampleData = [
            {
              month: "January",
              amount: "$500",
              transactionId: "ABC123",
              _id: "1",
            },
            {
              month: "February",
              amount: "$750",
              transactionId: "DEF456",
              _id: "2",
            },
            {
              month: "March",
              amount: "$600",
              transactionId: "GHI789",
              _id: "3",
            },
            {
                  month: "February",
                  amount: "$750",
                  transactionId: "DEF456",
                  _id: "2",
                },
                {
                  month: "March",
                  amount: "$600",
                  transactionId: "GHI789",
                  _id: "3",
                },
            // Add more data entries as needed
          ];
          
      return (
            <div className='px-20 py-4'>


                        <h3 className='text-2xl font-semibold'>Payment History</h3>
                  <TableUsable tableHead={["Month", "Amount", "Transaction Id"]} tableRow={exampleData} />
            </div>
      );
};

export default PaymentHistory;