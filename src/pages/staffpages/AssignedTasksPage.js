import React, { useState } from 'react';
import AssignedTasks from '../../components/assignedtasks/AssignedTasks';
import DashBoardInfoBox from '../../components/dashboardinfobox/DashBoardInfoBox';
import Tasks from '../../components/task/Tasks';
import TaskCalendar from '../../components/taskcalendar/TaskCalendar';
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
			taskDetail: 'eligendi at eos harum, facilis, nulla incidunt quasi sed id soluta aliqui.=-',
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
		}
	]
};
function AssignedTasksPage() {
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
		<Tasks
			title='Assigned Task'
			mainContent={
				<>
					{modifyTasks.length > 0 ? (
						modifyTasks.map((task, id) => <AssignedTasks key={id} taskDetail={task.taskDetail} />)
					) : (
						<div className='text-center font-semibold p-4'>No tasks assigned for today</div>
					)}
				</>
			}
			aside={
				<div className='flex flex-col items-center justify-between h-Screen'>
					<TaskCalendar
						handleDateChange={handleDateChange}
						date={date}
						getNotificationCount={getNotificationCount}
					/>
					<DashBoardInfoBox title='Pending Tasks' count={pendingTasks.length} />
					<DashBoardInfoBox title='Completed Tasks' count={completedTasks.length} />
				</div>
			}
		/>
	);
}

export default AssignedTasksPage;
