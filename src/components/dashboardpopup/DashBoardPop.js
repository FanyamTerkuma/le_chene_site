import React from 'react';
import TaskCard from '../taskscard/TaskCard';
const taskslist = [
	{
		task: 'Lorem ipsum dolor sit.',
		taskDescrition: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, quibusdam.',
		dueDate: 'Aug, 30, 2023'
	},
	{
		task: 'Lorem ipsum dolor sit. 2',
		taskDescrition: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, quibusdam.',
		dueDate: 'Aug, 21, 2023'
	},
	{
		task: 'Lorem ipsum dolor sit.3',
		taskDescrition: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, quibusdam.',
		dueDate: 'Aug, 23, 2023'
	}
];

function DashBoardPop({ onClick, taskStatus }) {
	return (
		<div
			className='w-full top-1 left-0 bg-[#FEFDFD] bg-opacity-60 h-full  fixed  z-50 flex justify-center overflow-y-auto hidden-scrollbar '
			onClick={onClick}>
			<div className='flex flex-col items-center gap-3 bg-white w-1/2 rounded-xl p-3 shadow-xl overflow-y-auto hidden-scrollbar'>
				<p className='font-semibold text-xl'>{taskStatus}</p>
				<hr className='w-full' />
				{taskStatus === 'Design Rating' ? (
					<p>Design component</p>
				) : (
					<>
						<p className='w-full font-semibold px-5 flex justify-end'>Due Date</p>
						<div className='flex w-full flex-col gap-2'>
							{taskslist.map((task, id) => (
								<TaskCard
									key={id}
									task={task.task}
									taskDescription={task.taskDescrition}
									dueDate={task.dueDate}
								/>
							))}
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default DashBoardPop;
