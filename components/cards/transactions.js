import React from "react";
import Transaction from "./Transaction";

function Transactions({ transactions }) {
  return (
    <div className="w-full pt-2 pb-4 ">
      <p className="text-gray-400 mb-2 px-2 text-sm font-semibold">
        Transactions
      </p>
      {transactions.map((transaction) => {
        return (
          <Transaction
          key={transaction.id}
            amount={transaction.amount}
            status={transaction.status}
            type={transaction.type}
            date={transaction.date}
          />
        );
      })}
    </div>
  );
}

export default Transactions;
