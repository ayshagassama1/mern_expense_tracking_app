import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
	plugins: {
		title: {
			display: true,
			text: "Global expenses report",
		},
	},
	responsive: true,
	scales: {
		x: {
			stacked: true,
		},
		y: {
			stacked: true,
		},
	},
};

export default function GlobalChart(props) {
	let chartData = props.chartData;
	let labels = [];

	for (let i = 4; i < chartData.length; i++) {
		switch (chartData[i]) {
			case "01":
				labels.push("Janvier");
				break;
			case "02":
				labels.push("Février");
				break;
			case "03":
				labels.push("Mars");
				break;
			case "04":
				labels.push("Avril");
				break;
			case "05":
				labels.push("Mai");
				break;
			case "06":
				labels.push("Juin");
				break;
			case "07":
				labels.push("Juillet");
				break;
			case "08":
				labels.push("Août");
				break;
			case "09":
				labels.push("Septembre");
				break;
			case "10":
				labels.push("Octobre");
				break;
			case "11":
				labels.push("Novembre");
				break;
			case "12":
				labels.push("Décembre");
				break;
			default:
				labels.push("Années précédentes");
		}
	}
	const data = {
		labels,
		datasets: [
			{
				label: "Commute",
				data: chartData[0],
				backgroundColor: "rgba(54, 162, 235, 0.8)",
			},
			{
				label: "Groceries",
				data: chartData[1],
				backgroundColor: "rgba(75, 255, 192, 0.8)",
			},
			{
				label: "Eating-out",
				data: chartData[2],
				backgroundColor: "rgba(255, 206, 86, 0.8)",
			},
			{
				label: "Others",
				data: chartData[3],
				backgroundColor: "rgba(255, 99, 132, 0.8)",
			},
		],
	};

	return <Bar options={options} data={data} />;
}
