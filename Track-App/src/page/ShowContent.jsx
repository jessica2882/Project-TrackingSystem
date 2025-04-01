import React from "react";
import { useState, useEffect } from "react";

const ShowContent = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
    setTransactions(storedTransactions);
  }, []);

  return (
    <div className="page-size overflow-x-auto ">
      <div className="t flex justify-center ">
          <table className="bg-white  ">
            <thead>
              <tr className="bg-gray-100 text-gray-600 uppercase text-sm">
                <th className="py-3 px-6 text-center">Title</th>
                <th className="py-3 px-6 text-center">Date</th>
                <th className="py-3 px-6 text-center">Remark</th>
                <th className="py-3 px-6 text-center">Amount</th>
                <th className="py-3 px-6 text-center">Type</th>
                <th className="py-3 px-6 text-center">Contagory</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((item, index) => (
                <tr key={index} className="border-b hover:bg-blue-50">
                  <td className="py-3 px-6 text-center">{item.title}</td>
                  <td className="py-3 px-6 text-center">{item.date}</td>
                  <td className="py-3 px-6 text-center">{item.remark}</td>
                  <td
                    className={`py-3 px-6 text-center ${
                      item.amount < 0 ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    ${Math.abs(item.amount)}
                  </td>
                  <td className="py-3 px-6 text-center">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded ${
                        item.type === "Income"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {item.type}
                    </span>
                    
                  </td>
                  <td className="py-3 px-6 text-center">{item.contegory}</td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    </div>
  );
};

export default ShowContent;