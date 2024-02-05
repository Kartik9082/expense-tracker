import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const ExpenseItem = ({name, cost, id}) => {
  const {dispatch} = useContext(AppContext);

  const handleDelete = () =>{
    dispatch({
      type:"DELETE_EXPENSE",
      payload: id,
    })
  }

  return (
    <div className=''>
        <li className="p-5 m-2 bg-gray-200 flex justify-between rounded-lg ">
            {name} 
            <div>
                <span className="bg-blue-500 text-white rounded-lg p-1">
                ${cost}
                </span>
                <button onClick={handleDelete} className='p-2'>❌</button>
                
                </div>
            
          </li>
    
    </div>
  )
}

export default ExpenseItem