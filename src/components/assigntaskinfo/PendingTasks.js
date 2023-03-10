import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Button from '../Button/Button';
import AvailableStaff from './AvailableStaff';
const availableStaff = [
	{
		staffAvatar: '',
		staffName: 'staff name'
	},
	{
		staffAvatar: '',
		staffName: 'staff name1'
	},
	{
		staffAvatar: '',
		staffName: 'staff name2'
	}
];

function PendingTasks({ task }) {
	const [open, setOpen] = useState(false);
	return (
		<div className='grid grid-cols-3'>
			<p className='col-span-1 flex items-center justify-center font-semibold border-r'> Aug, 12, 2023</p>
			<div className='col-span-2'>
				<div className='flex items-center justify-between gap-1 p-1'>
					<p className='overflow-truncate max-w-sm'>{task}</p>
					<Button
						width={16}
						title={
							<div className='flex items-center gap-1' onClick={() => setOpen(!open)}>
								<p>Asign</p>
								{open ? <IoIosArrowUp size={16} /> : <IoIosArrowDown size={16} />}
							</div>
						}
					/>
				</div>
				{open && (
					<div className='relative' onMouseLeave={() => setOpen(!open)}>
						<AvailableStaff availableStaff={availableStaff} />
					</div>
				)}
			</div>
		</div>
	);
}

export default PendingTasks;
