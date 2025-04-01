import React, { useState, useEffect } from "react";

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [startDate, setStartDate] = useState("");

  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
    setTransactions(storedTransactions);
    setFilteredTransactions(storedTransactions);
  }, []);

  // Filter by selected date
  const filterByDate = () => {
    if (!startDate) return;
    const filtered = transactions.filter(
      (item) => new Date(item.date).toDateString() === new Date(startDate).toDateString()
    );
    setFilteredTransactions(filtered);
  };

  // Calculate Income, Outcome, Balance
  const totalIncome = filteredTransactions
    .filter((item) => item.type === "Income")
    .reduce((sum, item) => sum + parseFloat(item.amount), 0);

  const totalOutcome = filteredTransactions
    .filter((item) => item.type === "Outcome")
    .reduce((sum, item) => sum + parseFloat(item.amount), 0);

  const totalBalance = totalIncome - totalOutcome;

  return (
    <div className="p-6">
      {/* Summary Section */}
      <div className="bg-white shadow-md p-6 rounded-lg mb-6 max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-2">Summary</h2>
        <p className="text-lg">Total Income: <span className="text-green-500">${totalIncome.toFixed(2)}</span></p>
        <p className="text-lg">Total Outcome: <span className="text-red-500">${totalOutcome.toFixed(2)}</span></p>
        <p className="text-lg">Total Balance: <span className="font-bold">${totalBalance.toFixed(2)}</span></p>
      </div>
     {/* Search bar */}
      <div className="flex justify-center mb-4">
        <div className="flex space-x-2 max-w-7xl w-full justify-center items-center">
          <input 
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border p-2 rounded-md h-10"
          />
          <button 
            onClick={filterByDate} 
            className="bg-blue-500 text-white px-4 py-2 rounded-md h-10"
          >
            Search
          </button>
        </div>
      </div>


      {/* Transactions Table */}
      {/* <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-md"> */}
      <div className="flex justify-center overflow-x-auto">
      <table className="w-full max-w-12xl border-collapse bg-white shadow-md mx-auto">
        <thead>
              <tr className="bg-blue-500 text-white uppercase text-sm">
                <th className="py-3 px-6 text-center">Title</th>
                <th className="py-3 px-6 text-center">Date</th>
                <th className="py-3 px-6 text-center">Amount</th>
                <th className="py-3 px-6 text-center">Remark</th>
                <th className="py-3 px-6 text-center">Type</th>
                <th className="py-3 px-6 text-center">Contagory</th>
              </tr>
            </thead>
          <tbody>
            {filteredTransactions.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="py-3 px-6 text-center">{item.title}</td>
                <td className="py-3 px-6 text-center">{item.date}</td>
                <td className={`py-3 px-6 text-center ${item.type === "Outcome" ? "text-red-500" : "text-green-500"}`}>
                  ${parseFloat(item.amount).toFixed(2)}
                </td>
                <td className="py-3 px-6 text-center">{item.remark}</td>
                <td className="py-3 px-6 text-center">{item.type}</td>
                <td className="py-3 px-6 text-center">{item.contegory}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsPage;

