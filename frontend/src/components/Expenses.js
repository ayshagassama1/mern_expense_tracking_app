import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Table } from "react-bootstrap";
import {
	faPlusSquare,
	faHome,
	faMoneyBill,
	faCarrot,
	faCar,
	faUtensils,
} from "@fortawesome/free-solid-svg-icons";

const Expenses = () => {
	return (
		<>
			<div className="p-3 bg-white">
				<ul className=" w-full  p-2">
					<table className="table w-100  ">
						<tbody>
							<tr>
								<th>Category</th>
								<th>Sum</th>
								<th>Date</th>
							</tr>

							<tr>
								<td className="colorSuccess">
									<FontAwesomeIcon icon={faCarrot} />
									&nbsp;Groceries
								</td>
								<td>$ 40</td>
								<td>7/7/2031</td>
							</tr>
							<tr>
								<td className="colorPrimary">
									<FontAwesomeIcon icon={faCar} />
									&nbsp;Commute
								</td>
								<td>$ 58</td>
								<td>7/7/2031</td>
							</tr>
							<tr>
								<td className="colorWarning">
									<FontAwesomeIcon icon={faUtensils} />
									&nbsp;Eating-out
								</td>
								<td>$ 58</td>
								<td>7/7/2031</td>
							</tr>
							<tr>
								<td className="colorDanger">
									<FontAwesomeIcon icon={faMoneyBill} />
									&nbsp;&nbsp;Others
								</td>
								<td>$ 58</td>
								<td>7/7/2031</td>
							</tr>
						</tbody>
					</table>
				</ul>
			</div>
		</>
	);
};

export default Expenses;
