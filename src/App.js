import React,{useState} from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyExpenses =  [
    {id:"e1",title: "Car Insurance", amount: 534, date: new Date(2020, 3, 2)},
    {id:"e2",title: "Bag", amount: 452, date: new Date(2020, 4, 20)},
    {id:"e3",title: "Health Insurance", amount: 245, date: new Date(2019, 2, 3)},
    {id:"e4",title: "Pen", amount: 145, date: new Date(2022, 2, 2)}

  ];


const App = () => {
  const [expenses, setExpenses] = useState(dummyExpenses);
  const addExpenseHandler = expense => {
    setExpenses(([expense, ...expenses]));
};

  return (
    <div> 
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App; 
 