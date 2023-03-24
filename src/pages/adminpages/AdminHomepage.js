import React from 'react';
import { IoHome } from 'react-icons/io5';
import { logoIcon } from '../../assets';
import { HiOutlineBell } from 'react-icons/hi2';
import { HiOutlineLogout } from 'react-icons/hi';

import Button from '../../components/Button/Button';
import AdminSideBar from '../../components/adminsidebar/AdminSideBar';
import { Outlet } from 'react-router-dom';

function AdminHomepage({ match }) {
	return (
		<div>
			<nav className='flex justify-between items-center  px-2 py-1 border-b border-dark-teal '>
				<img src={logoIcon} className='h-14 sm:h-16 object-contain' alt='le-cheneIcon' />
				<span className='flex justify-center gap-6 items-center '>
					<IoHome className='cursor-pointer' size={22} />
					<HiOutlineBell className='cursor-pointer' size={22} />
					<Button title='Logout' icon={<HiOutlineLogout size={22} />} />
				</span>
			</nav>
			<div className='grid grid-cols-4  h-screen'>
				<aside className='col-span-1 border-r border-dark-teal px-2 py-4 '>
					<AdminSideBar />
				</aside>
				<main className='col-span-3  px-2 py-4 w-full '>
					<Outlet />
				</main>
			</div>
		</div>
	);
}

export default AdminHomepage;
