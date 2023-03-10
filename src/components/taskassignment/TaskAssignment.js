import React from 'react';
import PendingTasks from '../assigntaskinfo/PendingTasks';
import DashBoardInfoBox from '../dashboardinfobox/DashBoardInfoBox';
import Tasks from '../task/Tasks';
import TaskCalendar from '../taskcalendar/TaskCalendar';

const tasks = [
	'lorem nulla incidunt quasi nulla incidunt quasi',
	'eligendi at eos harum, facilis, nulla incidunt quasi sed id soluta aliquid ipsam?',
	' Cupiditate pariatur unde fuga error suscipit? Facere autem reprehenderit ',
	'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
];

function TaskAssignment() {
	return (
		<Tasks
			title='Pending Tasks'
			mainContent={
				<>
					{tasks.map((task) => (
						<PendingTasks task={task} />
					))}
				</>
			}
			aside={
				<>
					<TaskCalendar />
					<DashBoardInfoBox title='Pending Tasks' count={32} />
					<DashBoardInfoBox title='Completed Tasks' count={16} />
				</>
			}
		/>
	);
}

export default TaskAssignment;
