import Card from "../../common/Card/card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import './ExpenseList.css';

const ExpenseList = (props) => {
  const { expenses } = props;
  return (
    <Card className="expenses">
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
  );
}

export default ExpenseList;
