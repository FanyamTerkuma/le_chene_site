import Button from '../../Button/Button';

function WishListItem({ product, handleRemove, selectItem }) {
	return (
		<div className=' flex flex-col gap-2'>
			<div key={product.id} className='green-outline-white-bg p-3 flex flex-col sm:flex-row gap-3'>
				<div className=''>
					<input
						type='checkbox'
						className='w-5 h-5 accent-green-600 cursor-pointer'
						checked={product.isSelected}
						onClick={() => selectItem(product.id)}
					/>
				</div>
				<div className='md:w-48 w-full h-fit   rounded-lg'>
					<img className='rounded-lg' src={product.image} alt='wishlisted item' />
				</div>
				<div className='flex flex-col justify-between'>
					<p>{product.description}</p>
					<p className='font-semibold'>
						{product.currency}
						{product.price}
					</p>
				</div>
				<div className='flex md:flex-col flex-row w-full items-end justify-between '>
					<p className='text-gray-500'>{product.date_added}</p>
					<div>
						<Button title='Remove' onClick={handleRemove} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default WishListItem;
