import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AppContext } from "../Context/AppContext";

const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  return (
    <form className="w-1/2 h-40" onSubmit={onSubmit}>
      <div className="grid m-2">
        <label for="input-label" class="block text-sm font-medium mb-2 ">
          Expense
        </label>
        <input
        required="required"
          type="text"
          id="input-label"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
          placeholder="Expense"
        />
      </div>
      <div className="grid m-2">
        <label for="input-label" class="block text-sm font-medium mb-2 ">
          Expense
        </label>
        <input
        required="required"
          type="text"
          id="input-label"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
          placeholder="Cost"
        />
      </div>
      <button className="m-2 p-2 bg-blue-800 text-white rounded-sm">
        Save
      </button>
    </form>
  );
};

export default AddExpenseForm;
