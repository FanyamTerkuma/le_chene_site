import React from 'react';
const tableData = [
	{
		id: '1',
		customerName: 'staff man',
		date: '29,August, 2023',
		time: '2:00 am',
		action: 'action'
	},
	{
		id: '2',
		customerName: 'staff man 2',
		date: '10,August, 2023',
		time: '5:00 pm',
		action: 'action'
	},
	{
		id: '3',
		customerName: 'staff man 3',
		date: '20,August, 2023',
		time: '12:00 am',
		action: 'action'
	},
	{
		id: '3',
		customerName: 'staff man 3',
		date: '20,August, 2023',
		time: '12:00 am',
		action: 'action'
	},
	{
		id: '3',
		customerName: 'staff man 3',
		date: '20,August, 2023',
		time: '12:00 am',
		action: 'action'
	},
	{
		id: '3',
		customerName: 'staff man 3',
		date: '20,August, 2023',
		time: '12:00 am',
		action: 'action'
	}
];

function DashBoardTable() {
	return (
		<div className='mx-3 green-outline-white-bg rounded-b-none shadow-xl'>
			<p className='font-semibold text-xl text-center w-full'>Order summary</p>
			<hr />
			<table className='text-center w-full'>
				<thead>
					<tr>
						<th>Order ID</th>
						<th>Customer Name</th>
						<th>Date</th>
						<th>Time</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{tableData.map((data, id) => (
						<tr>
							<td>{data.id}</td>
							<td>{data.customerName}</td>
							<td>{data.date}</td>
							<td>{data.time}</td>
							<td>{data.action}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default DashBoardTable;
