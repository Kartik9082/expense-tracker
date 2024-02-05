import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const Remaining = () => {
  const { expenses, budget } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return total += item.cost;
  }, 0);
  const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";
  return (
    <div className="bg-blue-300 text-2xl text-white m-4 p-12 rounded-lg">
      <div className={`alert ${alertType}`}>
      <span>   Remaining - ${budget - totalExpenses}</span>
      </div>
   
    </div>
  );
};

export default Remaining;
