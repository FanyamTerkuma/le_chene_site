import React from 'react';
const tableData = [
	{
		id: '1',
		customerName: 'staff man',
		date: new Date(2023, 10, 4),
		time: '2:00 am',
		action: 'action'
	},
	{
		id: '2',
		customerName: 'staff man 2',
		date: new Date(2023, 3, 24),
		time: '5:00 pm',
		action: 'action'
	},
	{
		id: '3',
		customerName: 'staff man 3',
		date: new Date(2023, 9, 21),
		time: '12:00 am',
		action: 'action'
	},
	{
		id: '3',
		customerName: 'staff man 3',
		date: new Date(2023, 1, 31),
		time: '12:00 am',
		action: 'action'
	},
	{
		id: '3',
		customerName: 'staff man 3',
		date: new Date(2023, 5, 9),
		time: '12:00 am',
		action: 'action'
	},
	{
		id: '3',
		customerName: 'staff man 3',
		date: new Date(2023, 7, 7),
		time: '12:00 am',
		action: 'action'
	}
];

function DashBoardTable() {
	return (
		<div className='mx-0 sm:mx-3 green-outline-white-bg rounded-b-none shadow-xl'>
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
							<td>{data.date.toDateString()}</td>
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
