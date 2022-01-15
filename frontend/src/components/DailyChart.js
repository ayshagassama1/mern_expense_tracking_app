import React from "react";
import { Doughnut } from "react-chartjs-2";

const DailyChart = (props) => {
	return (
		<div>
			<Doughnut data={props.chartData} />
		</div>
	);
};

export default DailyChart;
