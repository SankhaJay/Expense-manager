import React, {useState} from "react";

import Card from "../../common/Card/card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  const { expenses } = props;
  const [filterYear, setFilterYear] = useState('2019');

  const filterYearChangeHandler = (filterYearSelected) => {
    setFilterYear(filterYearSelected);
  }

  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter onFilterYearChange={filterYearChangeHandler} filterYearSelected={filterYear}/>
        {expenses.map((expense) => {
          return (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default ExpenseList;
