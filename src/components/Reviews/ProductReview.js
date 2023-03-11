import { Rating } from "@mui/material";
import React from "react";
import PropertyHeader from "../Products/PropertyHeader";

const ProductReview = ({ reviewData }) => {
	return (
		<div className='space-y-3 py-8'>
			<div className='flex items-center space-x-6'>
				<h3 className='font-semibold'>{reviewData?.name}</h3>

				<div className='flex items-center space-x-2'>
					<PropertyHeader title='Rating' val={reviewData?.rating} />
					{/* <Rating readOnly value={3.5} size="small" /> */}
				</div>

				<PropertyHeader title='Size' val={reviewData?.size} />
				<PropertyHeader title='Colour' val={reviewData?.color} />
				<PropertyHeader title='Logistics' val={reviewData?.logistics} />
			</div>

			<div className='flex items-center font-light text-sm space-x-2 text-gray-600'>
				<h4 className='text-gray-700 font-normal'>
					Thanks so much I received my dress so fast and it’s a perfect fit.{' '}
				</h4>
				<p>&bull;</p>
				<p className='text-xs'>20 july 2022</p>
			</div>
		</div>
	);
};

export default ProductReview;
