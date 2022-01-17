import React from "react";
import DailyChart from "./DailyChart";
import GlobalChart from "./GlobalChart";
import { Tab, Col, Row, Nav } from "react-bootstrap";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const dailyChartData = {
	labels: ["Commute", "Eating-out", "Groceries", "Others"],
	datasets: [
		{
			label: "# of Votes",
			data: [12, 10, 3, 5],
			backgroundColor: [
				"rgba(54, 162, 235, 0.5)",
				"rgba(255, 206, 86, 0.5)",
				"rgba(75, 255, 192, 0.5)",
				"rgba(255, 99, 132, 0.5)",
			],
			borderColor: [
				"rgba(54, 162, 235, 1)",
				"rgba(255, 206, 86, 1)",
				"rgba(75, 255, 192, 1)",
				"rgba(255, 99, 132, 1)",
			],
			borderWidth: 1,
		},
	],
};

const Reports = () => {
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
							<Tab.Pane className="doughnut" eventKey="first">
								<DailyChart chartData={dailyChartData} />
							</Tab.Pane>
							<Tab.Pane eventKey="second">
								<GlobalChart />
							</Tab.Pane>
						</Tab.Content>
					</Col>
				</Row>
			</Tab.Container>
		</div>
	);
};

export default Reports;
