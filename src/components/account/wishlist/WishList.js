import React, { useState, useEffect } from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import MobileNav from '../mobilenavigation/MobileNav';
import WishListItem from './WishListItem';

//dummy data
const product = [
	{
		id: 1,
		description: 'Strapless ball gown with native apparel, beautiful colors and form fit bodice. ',
		price: 6750,
		currency: '₦',
		image: 'https://images.unsplash.com/flagged/photo-1578905326519-3aa98aa6a728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
		date_added: '04 August, 2022'
	},
	{
		id: 2,
		description: 'Strapless ball gown with native apparel, beautiful colors and form fit bodice. ',
		price: 6750,
		currency: '₦',
		image: 'https://images.unsplash.com/photo-1607823489283-1deb240f9e27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YWZyaWNhbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
		date_added: '04 August, 2022'
	},

	{
		id: 3,
		description: 'Strapless ball gown with native apparel, beautiful colors and form fit bodice. ',
		price: 6750,
		currency: '₦',
		image: 'https://images.unsplash.com/photo-1618998584360-10a0c28eec0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFmcmljYW4lMjBkcmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
		date_added: '04 August, 2022'
	}
];

function WishList() {
	const modifyWishlist = (items) => items.map((item) => ({ ...item, isSelected: false }));

	const [wishlist, setWishList] = useState(modifyWishlist(product));
	const [allIsSelected, setAllIsSelected] = useState(false);
	const allCardsAreChecked = wishlist.filter((item) => item.isSelected).length === wishlist.length;

	const removeItem = (id) => {
		const newWishList = wishlist.filter((item) => item.id !== id);
		setWishList(newWishList);
	};

	// this checks a single item
	const selectItem = (id) => {
		setWishList((items) =>
			items.map((item) =>
				item.id === id
					? {
							...item,
							isSelected: !item.isSelected
					  }
					: item
			)
		);
	};

	const selectAll = () => {
		setWishList((items) =>
			items.map((item) => ({
				...item,
				isSelected: allCardsAreChecked ? false : true
			}))
		);
	};
	const clearWishList = () => {
		if (allCardsAreChecked) {
			setWishList([]);
		} else {
			setWishList(wishlist.filter((item) => !item.isSelected));
		}
	};
	useEffect(() => {
		if (allCardsAreChecked) {
			setAllIsSelected(true);
		} else {
			setAllIsSelected(false);
		}
	}, [wishlist]);

	return (
		<>
			<div className='sm:hidden flex'>
				<MobileNav />
			</div>
			<div className='flex flex-col gap-2 p-3'>
				<div className='green-outline-white-bg p-2 flex flex-col gap-4'>
					<p className='font-semibold'>WishList ({wishlist.length})</p>
					<div className='divider'></div>
					<div className='flex justify-between'>
						<span className='flex items-center gap-1'>
							<input
								type='checkbox'
								className='w-5 h-5 accent-green-600 cursor-pointer'
								onClick={selectAll}
								checked={allIsSelected}
							/>
							Mark All
						</span>
						<span
							onClick={clearWishList}
							className='flex gap-1 items-center  rounded text-white bg-red-600 p-1 cursor-pointer hover:shadow-md'>
							<MdDeleteOutline size={28} />
							<p>Delete selected</p>
						</span>
					</div>
				</div>
				{wishlist.map((product) => (
					<WishListItem
						key={product.id}
						product={product}
						selectItem={selectItem}
						handleRemove={() => removeItem(product.id)}
					/>
				))}
			</div>
		</>
	);
}

export default WishList;
