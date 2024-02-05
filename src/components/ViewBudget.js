import React from "react";

const ViewBudget = (props) => {
  return (
    <div>
      <span>Budget: ${props.budget}</span>
        <button className="p-4 m-2 bg-yellow-500 text-white rounded-lg"
        onClick={props.handleEditClick}
        >
          Edit
        </button>
      
    </div>
  );
};

export default ViewBudget;
