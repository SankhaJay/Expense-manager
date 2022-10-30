import React from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (expenseDataEntered) => {
    const expenseData = {
      ...expenseDataEntered,
      date: new Date(expenseDataEntered.date),
      id: Math.random().toString(),
    };

    props.onAddExpenseData(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
