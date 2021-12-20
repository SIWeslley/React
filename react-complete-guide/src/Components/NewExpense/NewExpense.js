import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditing = () => setIsEditing(true)
  const stopEdting = () => setIsEditing(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenses(expenseData);
    setIsEditing(false)
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditing}>Add Expenses</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEdting} />}
    </div>
  );
};

export default NewExpense;
