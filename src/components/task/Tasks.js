import React from 'react';
import AdminHeader from '../../components/adminheader/AdminHeader';
function Tasks({ title, status, mainContent, aside }) {
	return (
		<div className='max-h-[100vh] overflow-hidden overflow-y-scroll hidden-scrollbar'>
			<AdminHeader pageTitle='Tasks' />
			<div>
				<div className=' grid grid-cols-1 sm:grid-cols-3  w-full '>
					<div className='sm:col-span-2 py-4'>
						<div className='grid grid-rows-1'>
							<div className='font-semibold text-lg px-6  flex justify-between '>
								<p>{title}</p>
								{status && <p>Status</p>}
							</div>
							{status ? (
								<div className='grid grid-cols-8'>
									<div className='border h-auto col-span-1'></div>
									<div className='border col-span-7'>{mainContent}</div>
								</div>
							) : (
								<div className='grid grid-cols-8'>
									<div className='border h-auto col-span-1'></div>
									<div className='border col-span-6'>{mainContent}</div>
									<div className='border col-span-1'></div>
								</div>
							)}
						</div>
					</div>
					<div className='flex justify-center sm:block  sm:col-span-1 sm:green-outline-white-bg sm:rounded-none '>
						{aside}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Tasks;
