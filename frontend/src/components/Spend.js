import React from "react";

const Spend = (props) => {
	return (
		<div>
			<div className="u-spent">
				<h2 className="border-bottom">You've spent</h2>
				<div className="spent-details">
					<div>
						<div className="my-container">
							<img src="mai.jpg" alt="image" className="img-fluid w-50"></img>
							<h2 className="centered">{props.monthlyExpenses}$</h2>
						</div>
					</div>
					<div className="recent-spent">
						<div className="bloc-spent">
							<span className="sum-spent">${props.yesterdayExpenses}</span> yesterday
						</div>
						<div className="bloc-spent">
							<span className="sum-spent">${props.dailyExpenses}</span> today
						</div>
						<div className="text-center text-secondary">
							<a href="/expenses">See more</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Spend;
