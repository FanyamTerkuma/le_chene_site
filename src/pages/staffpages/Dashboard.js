import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../../components/adminheader/AdminHeader';
import DashBoardInfoBox from '../../components/dashboardinfobox/DashBoardInfoBox';
import DashBoardTable from '../../components/dashboardtable/DashBoardTable';
import TaskCard from '../../components/taskscard/TaskCard';
import TaskCalendar from '../../components/taskcalendar/TaskCalendar';

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
const taskList = {
	'Sat Feb 04 2023': [
		{
			id: 1,
			taskDetail: 'lorem nulla incidunt quasi nulla incidunt quasi',
			status: 'Completed'
		},
		{
			id: 2,
			taskDetail: 'eligendi at eos harum, facilis, nulla incidunt quasi sed id soluta aliquid ipsam?',
			status: 'Pending'
		},
		{
			id: 3,
			taskDetail: 'eligendi at eos harum, facilis, nulla incidunt quasi sed id soluta aliquid ipsam!',
			status: 'Completed'
		}
	],
	'Fri Feb 24 2023': [
		{
			id: 1,
			taskDetail: 'lorem nulla incidunt quasi nulla incidunt quasi',
			status: 'Completed'
		},
		{
			id: 2,
			taskDetail: 'eligendi at eos harum, facilis, nulla incidunt quasi sed id soluta aliquid ipsam?',
			status: 'Pending'
		},
		{
			id: 3,
			taskDetail: 'eligendi at eos harum, facilis, nulla incidunt quasi sed id soluta aliquid ipsam!',
			status: 'Completed'
		},
		{
			id: 4,
			taskDetail: 'eligendi at eos harum, facilis, nulla incidunt quasi sed id soluta aliqui.',
			status: 'Pending'
		},
		{
			id: 5,
			taskDetail: 'eligendi at eos harum, facilis, nulla incidunt quasi sed id soluta aliqui.#',
			status: 'Pending'
		},
		{
			id: 6,
			taskDetail: 'eligendi at eos harum, facilis, nulla incidunt quasi sed id soluta $',
			status: 'Completed'
		},
		{
			id: 7,
			taskDetail: 'eligendi at eos harum, facilis, nulla incidunt quasi sed id soluta aliqui.',
			status: 'Pending'
		}
	],
	'Thu Feb 02 2023': [
		{
			id: 6,
			taskDetail: 'eligendi at eos harum, facilis, nulla incidunt quasi sed id soluta $',
			status: 'Completed'
		},
		{
			id: 7,
			taskDetail: 'eligendi at eos harum, facilis, nulla incidunt quasi sed id soluta aliqui.',
			status: 'Pending'
		}
	],
	'Thu Feb 23 2023': [
		{
			id: 6,
			taskDetail: 'eligendi at eos harum, facilis, nulla incidunt quasi sed id soluta $',
			status: 'Completed'
		},
		{
			id: 7,
			taskDetail: 'eligendi at eos harum, facilis, nulla incidunt quasi sed id soluta aliqui.',
			status: 'Pending'
		},

		{
			id: 8,
			taskDetail: 'eligendi at eos harum, facilis, nulla incidunt quasi sed id soluta aliqui.0',
			status: 'Pending'
		},
		{
			id: 9,
			taskDetail: 'eligendi at eos harum, facilis, nulla incidunt quasi sed id soluta aliqui.%',
			status: 'Pending'
		},
		{
			id: 9,
			taskDetail: 'eligendi at eos harum, facilis, nulla incidunt quasi sed id soluta aliqui.%',
			status: 'Pending'
		}
	]
};
function Dashboard() {
	const navigate = useNavigate();
	const [date, setDate] = useState(new Date());
	const [key, setKey] = useState(date.toDateString());
	const [modifyTasks, setModifyTasks] = useState(key in taskList ? taskList[key] : []);
	const [pendingTasks, setPendingTasks] = useState(
		modifyTasks.length > 0 ? modifyTasks.filter((task) => task.status === 'Pending') : []
	);
	const [completedTasks, setCompletedTasks] = useState(
		modifyTasks.length > 0 ? modifyTasks.filter((task) => task.status === 'Completed') : []
	);

	const handleDateChange = (selectedDate) => {
		navigate('/tasks');
		setKey(selectedDate.toDateString());
		if (key in taskList) {
			setModifyTasks(taskList[key]);
			setPendingTasks(modifyTasks.filter((task) => task.status === 'Pending'));
			setCompletedTasks(modifyTasks.filter((task) => task.status === 'Completed'));
		} else {
			setModifyTasks([]);
			setPendingTasks([]);
			setCompletedTasks([]);
		}
		setDate(selectedDate);
	};
	const getNotificationCount = (date) => {
		return taskList[date.toDateString()] ? taskList[date.toDateString()].length : 0;
	};

	return (
		<div className='max-h-[100vh] overflow-hidden overflow-y-auto hidden-scrollbar'>
			<AdminHeader pageTitle='Dashboard' />
			<div className='flex flex-col gap-4 items-center w-full sm:flex-row pt-2 h-screen overflow-y-auto hidden-scrollbar'>
				<div className=' w-fit sm:w-2/3 sm:overflow-y-auto sm:max-h-screen sm:hidden-scrollbar'>
					<div className='grid grid-cols-2 w-full'>
						{dashboardInfoList.map((item, index) => (
							<DashBoardInfoBox key={index} title={item.title} count={item.count} />
						))}
						{/* work on this */}
					</div>
					<DashBoardTable />
				</div>
				<div className='flex flex-col items-centers w-full sm:justify-between sm:w-1/3 sm:max-h-[100vh] sm:overflow-hidden sm:overflow-y-auto hidden-scrollbar'>
					<TaskCalendar
						date={date}
						handleDateChange={handleDateChange}
						getNotificationCount={getNotificationCount}
					/>
					<div className='p-2 flex flex-col gap-2 sm:items-center'>
						<p className='font-semibold text-xl text-center'>Assigned Tasks for the day</p>
						{modifyTasks.length > 0 ? (
							modifyTasks.map((task, id) => <TaskCard key={id} taskDescription={task.taskDetail} />)
						) : (
							<div className='text-center font-semibold p-4'>No tasks assigned for today</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
