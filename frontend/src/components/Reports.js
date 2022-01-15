import React from "react";
import { useState, useEffect } from "react";
import DailyChart from "./DailyChart";
import { Tabs, Tab, Col, Row, Nav } from "react-bootstrap";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const dailyChartData = {
	labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
	datasets: [
		{
			label: "# of Votes",
			data: [12, 10, 3, 5, 2],
			backgroundColor: [
				"rgba(255, 99, 132, 0.2)",
				"rgba(54, 162, 235, 0.2)",
				"rgba(255, 206, 86, 0.2)",
				"rgba(75, 192, 192, 0.2)",
				"rgba(153, 102, 255, 0.2)",
			],
			borderColor: [
				"rgba(255, 99, 132, 1)",
				"rgba(54, 162, 235, 1)",
				"rgba(255, 206, 86, 1)",
				"rgba(75, 192, 192, 1)",
				"rgba(153, 102, 255, 1)",
			],
			borderWidth: 1,
		},
	],
};

const Reports = () => {
	const [key, setKey] = useState("home");

	return (
		<div className="tabCharts">
			<Tab.Container id="left-tabs-example" defaultActiveKey="first">
				<Row>
					<Col lg={3}>
						<Nav variant="pills" className="flex-column">
							<Nav.Item>
								<Nav.Link eventKey="first">Daily report</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="second">Global report</Nav.Link>
							</Nav.Item>
						</Nav>
					</Col>
					<Col lg={9} sm={12} className="tabChartsContent">
						<Tab.Content className="charts">
							<Tab.Pane eventKey="first">
								<DailyChart chartData={dailyChartData} />
							</Tab.Pane>
							<Tab.Pane eventKey="second">
								<img src="../logo.svg" alt="image1" />
							</Tab.Pane>
						</Tab.Content>
					</Col>
				</Row>
			</Tab.Container>
		</div>
	);
};

export default Reports;
