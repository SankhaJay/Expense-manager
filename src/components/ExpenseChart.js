import Chart from "./Chart/Chart-Component/Chart";

const ExpensesChart = (props) => {
  const {filteredExpenses, chartData} = props;

  filteredExpenses.forEach(expense => {
    chartData[expense.date.getMonth()].value += expense.amount;
  });

  return <Chart data={chartData}/>
};

export default ExpensesChart;
