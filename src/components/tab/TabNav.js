import React, { useState } from 'react';
function TabNav({ tabs, className }) {
	const [activeTab, setActiveTab] = useState(0);
	const changeTab = (tabIndex) => {
		setActiveTab(tabIndex);
	};

	return (
		<div>
			<div className={`flex gap-10  w-full justify-center font-semibold md:text-2xl ${className} `}>
				{tabs.map((tab, tabIndex) => (
					<button
						key={tabIndex}
						onClick={() => changeTab(tabIndex)}
						className={`text-base font-semibold capitalize ${
							activeTab === tabIndex ? 'selected-tab' : ''
						}`}>
						{tab.header}
					</button>
				))}
			</div>

			<div className='hidden-scrollbar flex w-full max-w-6xl mt-6 space-x-4 mx-auto px-4  overflow-x-scroll  scroll-smooth '>
				{tabs[activeTab].component}
			</div>
		</div>
	);
}

export default TabNav;
