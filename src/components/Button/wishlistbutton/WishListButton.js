import React from 'react';
import './WishListButton.css';
import { pngs } from '../../../assets';

function WishListButton() {
	return (
		<div className='wishlist-container'>
			<img src={pngs.heart_icon} alt='heart icon' />
			<button className='wishlist-button'>Wishlist</button>
		</div>
	);
}

export default WishListButton;
