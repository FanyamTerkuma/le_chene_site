import { pngs } from '../../assets';
//dummy data
const products = [
	{
		image: `${pngs.attire}`
	},
	{
		image: `${pngs.attire}`
	},
	{
		image: `${pngs.attire}`
	},
	{
		image: `${pngs.attire}`
	},
	{
		image: `${pngs.attire}`
	},
	{
		image: `${pngs.attire}`
	},
	{
		image: `${pngs.attire}`
	},
	{
		image: `${pngs.attire}`
	}
];

const ProductCard = ({ children, productInfo }) => {
	return products.map((product) => {
		return (
			<div className='flex flex-col'>
				<div className='grid row-span-3 relative '>
					<div className='row-span-2 bg-[#D9D9D9] rounded-xl shadow-custom-shadow shadow-[#D9D9D9]'>
						<img
							className='object-cotain rounded-xl w-full h-full'
							src={product.image}
							alt='displayed product'
						/>
					</div>
					<div className='row-span-1 w-[45vw] md:w-[300px] absolute bottom-0 z-10'>{children}</div>
				</div>
				{productInfo === undefined ? null : (
					<div className=' md:w-[300px] mt-[10px] h-[10em]'>
						<div>{productInfo}</div>
					</div>
				)}
			</div>
		);
	});
};

export default ProductCard;
