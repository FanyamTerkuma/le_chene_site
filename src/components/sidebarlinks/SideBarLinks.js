import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { MdSpaceDashboard } from 'react-icons/md';
import { TbChartPie2, TbChecklist, TbReport } from 'react-icons/tb';
import { CiWallet } from 'react-icons/ci';
import { NavLink } from 'react-router-dom';

const links = [
	{
		title: 'Home',
		icon: <AiOutlineHome size={25} />,
		path: '/'
	},
	{
		title: 'DashBoard',
		icon: <MdSpaceDashboard size={25} />,
		path: '/dashboard'
	},
	{
		title: 'Tasks',
		icon: <TbChecklist size={25} />,
		path: '/tasks'
	},
	{
		title: 'Progress Report',
		icon: <TbChartPie2 size={25} />,
		path: '/progressreport'
	},
	{
		title: 'Orders',
		icon: <TbReport size={25} />,
		path: '/orders'
	},
	{
		title: 'My Payroll Log',
		icon: <CiWallet size={25} strokeWidth={0.7} />,
		path: '/payroll'
	}
];

function SideBarLinks() {
	return (
		<div>
			<ul className='flex flex-col justify-evenly gap-3'>
				{links.map((link, index) => (
					<li key={index}>
						<NavLink to={link.path} className={({ isActive }) => (isActive ? 'text-[#26867B]' : '')} end>
							<div className='flex items-center gap-2 cursor-pointer font-semibold'>
								<div>{link.icon}</div>
								<div>{link.title}</div>
							</div>
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
}

export default SideBarLinks;
