import React, { useState } from "react";

import DateElement from "../DateElement/DateElement";
import Card from "../../common/Card/card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const { title, amount, date } = props;

  return (
    <Card className="expense-item">
      <DateElement date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
