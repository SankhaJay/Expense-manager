import React, { useState } from "react";

import Card from "../../common/Card/card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  const { expenses } = props;
  const [filterYear, setFilterYear] = useState("2019");

  const filterYearChangeHandler = (filterYearSelected) => {
    setFilterYear(filterYearSelected);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onFilterYearChange={filterYearChangeHandler}
          filterYearSelected={filterYear}
        />
        {filteredExpenses.length === 0 && (
          <h2 className="expenses-list__fallback">No data to show</h2>
        )}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => {
            return (
              <ul className="expenses-list">
                <ExpenseItem
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date}
                />
              </ul>
            );
          })}
      </Card>
    </div>
  );
};

export default ExpenseList;
