import React, { useState } from "react";

import Card from "../../common/Card/card";
import Chart from "../Chart/Chart-Component/Chart";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

import "./ExpenseList.css";

const chartData = [
  {
    value: 0,
    label: "Jan",
  },
  {
    value: 0,
    label: "Feb",
  },
  {
    value: 0,
    label: "Mar",
  },
  {
    value: 0,
    label: "Apr",
  },
  {
    value: 0,
    label: "May",
  },
  {
    value: 0,
    label: "Jun",
  },
  {
    value: 0,
    label: "Jul",
  },
  {
    value: 0,
    label: "Aug",
  },
  {
    value: 0,
    label: "Sep",
  },
  {
    value: 0,
    label: "Oct",
  },
  {
    value: 0,
    label: "Nov",
  },
  {
    value: 0,
    label: "Dec",
  },
];

const ExpenseList = (props) => {
  const { expenses } = props;
  const [filterYear, setFilterYear] = useState("2019");

  const filterYearChangeHandler = (filterYearSelected) => {
    setFilterYear(filterYearSelected);
    chartData.forEach(element => {
      element.value=0;
    });

  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );

  filteredExpenses.forEach(expense => {
    chartData[expense.date.getMonth()].value += expense.amount;
  });


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onFilterYearChange={filterYearChangeHandler}
          filterYearSelected={filterYear}
        />
        <Chart data={chartData}/>
        {filteredExpenses.length === 0 && (
          <h2 className="expenses-list__fallback">No data to show</h2>
        )}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => {
            return (
              <ul className="expenses-list">
                <ExpenseItem
                  key={expense.id}
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
