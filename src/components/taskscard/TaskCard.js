import React from 'react';

function TaskCard({ task, taskDescription, dueDate }) {
	return (
		<div className='w-full flex justify-between pr-5  gap-2'>
			<div className='green-outline-white-bg p-2 w-4/5'>
				<p className='font-semibold'>{task}</p>
				<p className='truncate'>{taskDescription}</p>
			</div>
			{dueDate && <div className='flex items-center font-semibold'>{dueDate}</div>}
		</div>
	);
}

export default TaskCard;
