import React from 'react';
import { logoIcon } from '../../assets';
import SideBarLinks from '../sidebarlinks/SideBarLinks';
import Button from '../Button/Button';
import { IoLogOut } from 'react-icons/io5';

function SideBar({title}) {
	return (
		<div className='flex flex-row w-[100%]'>
			<div className='green-outline-white-bg rounded-none p-2 sm:w-1/5 flex flex-col justify-between h-screen w-[20vw}'>
				<img src={logoIcon} className='h-16 object-contain' alt='le-cheneIcon' />
				<div className=' h-1/4'>
					<SideBarLinks />
				</div>
				<div className='flex items-center justify-center h-2/4 font-semibold'>
					<Button icon={<IoLogOut size={25} />} title='Log out' />
				</div>
				
			</div>
			<div className='w-[100%] h-[8vh] border border-[#3A998E] text-xl flex '>
			<h2 className='text-[#26867B] font-bold text-3xl p-2 mt-2'>{title}</h2>
		</div>
		</div>
			
	);
}

export default SideBar;
