import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import EditBudget from "./EditBudget";
import ViewBudget from "./ViewBudget";

const Budget = () => {
  const[isEditing, setIsEditing] = useState(false);
  const { budget, dispatch } = useContext(AppContext);

  const handleEditClick = () =>{
    setIsEditing(true);
  }

  const handleSaveClick = (value) => {
		dispatch({
			type: 'SET_BUDGET',
			payload: value,
		});
		setIsEditing(false);
	};
  
  return (
    <div className="bg-emerald-500 text-2xl text-white m-4 p-12 rounded-lg">
    {isEditing ? (<EditBudget handleSaveClick={handleSaveClick} budget={budget}/>) : <ViewBudget handleEditClick={handleEditClick} budget={budget} />}
    </div>
  );
};

export default Budget;
