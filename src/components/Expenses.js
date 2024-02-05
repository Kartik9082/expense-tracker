import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const Expenses = () => {
  const { expenses } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  return (
    <div className="bg-rose-300 text-white m-4 p-12 rounded-lg">
      <h1 className="text-2xl"> Spent so far - ${totalExpenses}</h1>
    </div>
  );
};

export default Expenses;
