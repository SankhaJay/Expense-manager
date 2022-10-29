import React from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (expenseDataEntered) => {
    const expenseData = {
      ...expenseDataEntered,
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
