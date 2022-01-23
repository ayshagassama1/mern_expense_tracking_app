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

const labels = ["January", "February", "March", "April", "May", "June"];
const datas = [10, 45, 60, 83, 5, 13];
const datas1 = [71, 5, 0, 8, 51, 8];
const datas2 = [11, 4, 40, 18, 31, 28];
const datas3 = [31, 45, 10, 78, 41, 38];
export const data = {
	labels,
	datasets: [
		{
			label: "Commute",
			data: datas1,
			backgroundColor: "rgba(54, 162, 235, 0.8)",
		},
		{
			label: "Groceries",
			data: datas,
			backgroundColor: "rgba(75, 255, 192, 0.8)",
		},
		{
			label: "Eating-out",
			data: datas2,
			backgroundColor: "rgba(255, 206, 86, 0.8)",
		},
		{
			label: "Others",
			data: datas3,
			backgroundColor: "rgba(255, 99, 132, 0.8)",
		},
	],
};

export default function GlobalChart() {
	return <Bar options={options} data={data} />;
}
