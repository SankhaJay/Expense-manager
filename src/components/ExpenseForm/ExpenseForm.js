import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [formState, setFormState] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    setFormState((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    setFormState((prevState) => {
      return { ...prevState, amount: +event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    setFormState((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSaveExpenseData(formState);
    setFormState((prevState) => {
      return { ...prevState, title: "", amount: "", date: "" };
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={formState.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={formState.amount}
            min={0.01}
            step={0.01}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={formState.date}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="cancel" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
