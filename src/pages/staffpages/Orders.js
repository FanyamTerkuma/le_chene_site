import React from 'react';
import SideBar from '../../components/sidebar/SideBar';
import { ordered } from '../../data/data'
import Tables from './Tables';


const Orders = () => {

		const columns = [
			{
				field: 'id', header: '#',
			},
			{
				field: 'product_name', header: 'Product Name',
			},
			{
				field: 'dateOrdered', header: 'Date Ordered',
			},
	
		]
	return (
		<div className='flex flex-row relative border border-rose-600'>
		<div className='w-[100%]'>
			<SideBar title='Orders' />

				
		</div>
		<div className='absolute left-[21rem] top-8 w-[80%]'>
		<div className='w-[100%] mt-16'>
                <Tables data={ordered} columns={columns} />
				</div>



		</div>
		</div>

	)
}


export default Orders;
