import React from 'react';
import { TabNav } from '../../../components';
import ProductUpload from './ProductUpload';
import ViewProducts from './ViewProducts';

const tabs = [
	{
		header: 'Upload New Products',
		component: <ProductUpload />
	},
	{
		header: 'Existing Products',
		component: <ViewProducts />
	}
];
function AdminProducts() {
	return (
		<div>
			<TabNav className='border border-dark-teal py-2' tabs={tabs} />
		</div>
	);
}

export default AdminProducts;
