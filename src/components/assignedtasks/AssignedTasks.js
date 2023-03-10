import React from 'react';
import Button from '../Button/Button';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';

function AssignedTasks({ taskStatus, taskDetail, onUpdate, admin = false }) {
	return (
		<>
			{admin ? (
				<div className='grid grid-cols-5'>
					<div className='col-span-4'>
						<div className='flex items-center justify-between gap-1 p-1'>
							<p className='overflow-truncate max-w-sm p-2'>{taskDetail}</p>
							<div className='cursor-pointer'>
								{taskStatus === 'Completed' ? (
									<BsToggleOn size={24} onClick={onUpdate} color='#26867B' />
								) : (
									<BsToggleOff size={24} onClick={onUpdate} color='#26867B' />
								)}
							</div>
						</div>
					</div>
					<div className='cols-span-1 border-l flex items-center justify-center font-semibold '>
						{taskStatus}
					</div>
				</div>
			) : (
				<div className='grid grid-cols-4'>
					<div className='col-span-4'>
						<div className='flex items-center justify-between gap-1 p-1'>
							<p className='overflow-truncate max-w-sm'>{taskDetail}</p>
							<Button width={16} title='submit' />
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default AssignedTasks;
