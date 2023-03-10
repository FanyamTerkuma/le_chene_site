import React, { useState } from 'react';
import { logoIcon } from '../../assets';
import SideBarLinks from '../sidebarlinks/SideBarLinks';
import Button from '../Button/Button';
import { IoLogOut } from 'react-icons/io5';
import { MdClose, MdMenu } from 'react-icons/md';

function SideBar() {
	const [open, setOpen] = useState(true);
	return (
		<div className='green-outline-white-bg rounded-none p-2 sm:w-1/5 flex flex-col gap-4 justify-between sm:h-screen h-auto'>
			<div className='flex items-center justify-between'>
				<img src={logoIcon} className='h-14 sm:h-16 object-contain' alt='le-cheneIcon' />
				<div className='flex sm:hidden justify-end cursor-pointer' onClick={() => setOpen(!open)}>
					{open ? (
						<div className='flex gap-1 items-center'>
							<p className='font-semibold'>Close</p>
							<MdClose size={22} />
						</div>
					) : (
						<MdMenu size={35} className='text-[#26867B]' />
					)}
				</div>
			</div>
			{open && (
				<div className='flex flex-col sm:justify-around gap-4 sm:gap-0 h-full'>
					<div>
						<SideBarLinks />
					</div>
					<div className='flex items-center sm:justify-center font-semibold'>
						<Button icon={<IoLogOut size={22} />} title='Log out' />
					</div>
				</div>
			)}
		</div>
	);
}

export default SideBar;
