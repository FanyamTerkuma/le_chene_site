import React, { useState } from 'react';
import { IoExitOutline } from 'react-icons/io5';

const Account = ({ tabs }) => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<div className='w-full h-[100vh]  flex'>
			<div className='green-outline-white-bg  ml-1 p-2  w-[22em] md:w-[18em] h-fit sm:block hidden'>
				<h1 className='font-bold'>Account</h1>
				<div className='flex flex-col gap-4 w-max  '>
					{tabs.map((tab, tabIndex) => (
						<div
							key={tabIndex}
							className={activeTab === tabIndex ? 'active-tab flex gap-1 pl-2' : 'flex gap-1 pl-2'}
							onClick={() => setActiveTab(tabIndex)}>
							<i>{tab.icon}</i>
							<button>{tab.header}</button>
						</div>
					))}
					<div className='flex gap-1 pl-2 cursor-pointer'>
						<IoExitOutline size={25} />
						<p>Log out</p>
					</div>
				</div>
			</div>
			<div className=' w-full overflow-y-scroll hidden-scrollbar  p-3 '>{tabs[activeTab].component}</div>
		</div>
	);
};

export default Account;
