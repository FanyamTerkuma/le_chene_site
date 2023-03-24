import React from 'react';
import { FiPackage } from 'react-icons/fi';
import { IoIosPeople } from 'react-icons/io';
import { GoGear } from 'react-icons/go';
import { VscGraphLine } from 'react-icons/vsc';
import { NavLink } from 'react-router-dom';
import { FaShippingFast } from 'react-icons/fa';
const links = [
	{
		path: '/adminpage/products',
		label: 'Products',
		icon: <FiPackage size={22} />
	},
	{
		path: '/adminpage/orders',
		label: 'Orders',
		icon: <FaShippingFast size={22} />
	},
	{
		path: '/adminpage/reports',
		label: 'Reports',
		icon: <VscGraphLine size={22} />
	},
	{
		path: '/adminpage/designers',
		label: 'Designers',
		icon: <IoIosPeople size={22} />
	},
	{
		path: '/adminpage/settings',
		label: 'Settings',
		icon: <GoGear size={22} />
	}
];

function AdminSideBar() {
	return (
		<ul className='border border-dark-teal rounded-md px-16 py-4'>
			{links.map(({ path, icon, label }) => (
				<li key={path} className='mb-2'>
					<NavLink
						className={({ isActive }) =>
							`p-2 w-fit flex justify-between items-center gap-2 font-semibold  ${
								isActive ? 'text-dark-teal' : ''
							}`
						}
						to={path}
						end>
						<i>{icon}</i>
						<p>{label}</p>
					</NavLink>
				</li>
			))}
		</ul>
	);
}

export default AdminSideBar;
