import AddExpenseForm from "./components/AddExpenseForm";
import Budget from "./components/Budget";
import ExpenseList from "./components/ExpenseList";
import Expenses from "./components/Expenses";
import Remaining from "./components/Remaining";

function App() {
  return (
    <div>
      <div className="flex m-4 justify-around ">
        <Budget />
        <Remaining />
        <Expenses />
      </div>
      <div>
        <h1 className="text-3xl p-4 flex justify-center items-center">
          Expenses
        </h1>
        <div className="m-4 flex justify-center items-center">
          <ExpenseList />
        </div>
      </div>
      <div>
        <h1 className="text-3xl p-4 flex justify-center items-center">
          Add Expense
        </h1>
        <div className="m-4 flex justify-center items-center">
          <AddExpenseForm />
        </div>
      </div>
    </div>
  );
}

export default App;
