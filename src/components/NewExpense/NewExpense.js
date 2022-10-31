import React, { useState } from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [isFormVisible, setFormVisible] = useState(false);

  const saveExpenseDataHandler = (expenseDataEntered) => {
    const expenseData = {
      ...expenseDataEntered,
      date: new Date(expenseDataEntered.date),
      id: Math.random().toString(),
    };

    props.onAddExpenseData(expenseData);
  };

  const addExpenseButtonHandler = () => {
    setFormVisible((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className="new-expense">
      {!isFormVisible && (
        <button onClick={addExpenseButtonHandler}>Add New Expense</button>
      )}
      {isFormVisible && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={addExpenseButtonHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
