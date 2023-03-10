import React from 'react';
import MobileNav from '../mobilenavigation/MobileNav';
import { CompletedOrders, OrdersToBeShipped, ShippedOrders } from './components/';
import IndisputeOrders from './components/indispute/IndisputeOrders';
import MyOrdersNav from './MyOrdersNav';

//tabs on in the my orders component
const tabs = [
	{
		header: 'To be shipped',
		component: <OrdersToBeShipped />
	},
	{
		header: 'Shipped',
		component: <ShippedOrders />
	},
	{
		header: 'In dispute',
		component: <IndisputeOrders />
	},
	{
		header: 'Completed',
		component: <CompletedOrders />
	}
];

function MyOrders() {
	return (
		<div className='p-3'>
			<div className='sm:hidden flex'>
				<MobileNav />
			</div>
			<MyOrdersNav tabs={tabs} />
		</div>
	);
}

export default MyOrders;
