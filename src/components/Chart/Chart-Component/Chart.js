import ChartBar from "../Chart-Bar/ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const { data } = props;
  const maxValue = Math.max(...data.map((element) => element.value));
  return (
    <div className="chart">
      {data.map((element) => {
        return (
          <ChartBar
            key={element.label}
            value={element.value}
            maxValue={maxValue}
            label={element.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
