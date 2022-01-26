import React, { Component, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default class Spend extends Component {
	render() {
		return (
			<div className="u-spent">
				<h2 className="border-bottom">You've spent</h2>
				<div className="spent-details">
					<div>
						<div className="my-container">
							<img src="mai.jpg" alt="image" className="img-fluid w-50"></img>
							<h2 className="centered">1000$</h2>
						</div>
					</div>
					<div className="recent-spent">
						<div className="bloc-spent">
							<span className="sum-spent">$20</span> yesterday
						</div>
						<div className="bloc-spent">
							<span className="sum-spent">$15</span> today
						</div>
						<div className="text-center text-secondary">
							<a href="/expenses">See more</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
