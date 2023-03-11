import React, { useState } from 'react';
function MyOrdersNav({ tabs }) {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<div>
			<div className=' text-sm md:text-base w-full flex gap-2 justify-between green-outline-white-bg p-3 font-semibold'>
				{tabs.map((tab, tabIndex) => (
					<button
						key={tabIndex}
						onClick={() => setActiveTab(tabIndex)}
						className={activeTab === tabIndex ? 'selected-tab ' : ''}>
						{tab.header}
					</button>
				))}
			</div>

			<div className='pt-2'>{tabs[activeTab].component}</div>
		</div>
	);
}

export default MyOrdersNav;
