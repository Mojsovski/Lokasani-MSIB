import React from 'react';

const TransactionDetailsPopup = ({ onClose }) => {
  // Add your transaction details rendering logic here
  const transactionDetails = {
    id: 1,
    date: '2023-11-29',
    username: 'John Doe',
    total: '$100.00',
    status: 'Paid',
    // Add more details as needed
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-md">
        <h2 className="text-2xl font-bold mb-4">Transaction Details</h2>
        <ul className="list-none p-0 m-0">
          <li className="flex justify-between items-center border-b border-gray-200 py-2">
            <span>ID:</span>
            <span>{transactionDetails.id}</span>
          </li>
          <li className="flex justify-between items-center border-b border-gray-200 py-2">
            <span>Date:</span>
            <span>{transactionDetails.date}</span>
          </li>
          <li className="flex justify-between items-center border-b border-gray-200 py-2">
            <span>Username:</span>
            <span>{transactionDetails.username}</span>
          </li>
          <li className="flex justify-between items-center border-b border-gray-200 py-2">
            <span>Total:</span>
            <span>{transactionDetails.total}</span>
            </li>
            <li className="flex justify-between items-center border-b border-gray-200 py-2">
            <span>Status:</span>
            <span>{transactionDetails.status}</span>
          </li>
          {/* Add more details as needed */}
        </ul>
        <button
          className="bg-[#3653B0] text-white py-[6px] px-4 rounded-md mt-4"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TransactionDetailsPopup;
