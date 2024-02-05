import React, { useContext, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../Context/AppContext";

const ExpenseList = () => {
  const [text, setText] = useState("");
  // const expenses = [
  //   { id: 1, name: "Shopping", cost: 400 },
  //   { id: 2, name: "Grocery", cost: 500 },
  //   { id: 3, name: "Travel", cost: 1500 },
  //   { id: 4, name: "Child Care", cost: 800 },
  // ];
  const { expenses } = useContext(AppContext);

  const filterExpense = expenses.filter(
    (exp) => exp.name.toLowerCase().includes(text.toLowerCase())
    //  return newArray
  );

  return (
    <div className="m-4 w-1/2">
      {!filterExpense.length==0  ?  <input
        type="text"
        placeholder="Search"
        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
        value={text}
        onChange={(e) => setText(e.target.value)}
      /> :
      <h1 className="text-red-500">*No Expenses</h1>
      
      }
      <ul className="m-2  ">
        {filterExpense &&
          filterExpense.map((exp) => (
            <ExpenseItem id={exp.id} name={exp?.name} cost={exp?.cost} />
          ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
