import React, { useState } from 'react';
import AdminHeader from '../../components/adminheader/AdminHeader';
import DashBoardInfoBox from '../../components/dashboardinfobox/DashBoardInfoBox';
import DashBoardTable from '../../components/dashboardtable/DashBoardTable';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import TaskCard from '../../components/taskscard/TaskCard';

const dashboardInfoList = [
	{
		title: 'Pending Task',
		count: 16
	},
	{
		title: 'Completed Task',
		count: 32
	},
	{
		title: 'Confrimed For Delivery',
		count: 40
	},
	{
		title: 'Design Rating',
		count: 80
	}
];
const taskslist = [
	{
		task: 'Lorem ipsum dolor sit.',
		taskDescrition: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, quibusdam.'
	},
	{
		task: 'Lorem ipsum dolor sit. 2',
		taskDescrition: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, quibusdam.'
	},
	{
		task: 'Lorem ipsum dolor sit.3',
		taskDescrition: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, quibusdam.'
	}
];

function Dashboard() {
	const startyear = 2023;
	const endyear = 2023;
	const startmonth = 0;
	const endmonth = 0;
	const startday = 12;
	const endday = 15;
	const [date, setDate] = useState([new Date(startyear, startmonth, startday), new Date(endyear, endmonth, endday)]);

	return (
		<div className='max-h-[100vh] overflow-hidden overflow-y-auto hidden-scrollbar'>
			<div className='shadow-lg sticky top-0 z-50'>
				<AdminHeader pageTitle='Dashboard' />
			</div>
			<div className='flex'>
				<div className=' w-2/3 overflow-y-auto max-h-screen hidden-scrollbar'>
					<div className=' flex flex-wrap '>
						{dashboardInfoList.map((item, index) => (
							<DashBoardInfoBox key={index} title={item.title} count={item.count} />
						))}
					</div>
					<DashBoardTable />
				</div>
				<div className='flex flex-col  justify-between w-1/3 h-screen'>
					<Calendar className='bg-white rounded-lg p-2 ' value={date} />
					<div className='p-2 flex flex-col  gap-2 items-center'>
						<p className='font-semibold text-xl text-center'>Assigned Tasks for the day</p>
						{taskslist.map((task, id) => (
							<TaskCard key={id} task={task.task} taskDescription={task.taskDescrition} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
