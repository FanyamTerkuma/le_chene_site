import React, { useState } from 'react';
import DashBoardPop from '../dashboardpopup/DashBoardPop';

function DashBoardInfoBox({ title, count }) {
	const [isOpen, setOpen] = useState(false);

	return (
		<div className='py-3 px-3'>
			<div
				className='flex flex-col items-center gap-10 green-outline-white-bg p-2 w-[18em] h-[14em]  shadow-lg cursor-pointer'
				onClick={() => setOpen(!isOpen)}>
				<span className='font-semibold text-lg'>{title}</span>
				<span className='font-semi-bold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-[#26867B] to-[#24746c] '>
					{count}
				</span>
			</div>
			{isOpen && <DashBoardPop taskStatus={title} onClick={() => setOpen(!isOpen)} />}
		</div>
	);
}

export default DashBoardInfoBox;
