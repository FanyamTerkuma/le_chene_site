import React, { useState } from 'react';
import { SearchBar } from '..//index';
import { AiOutlineHeart, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { logoIcon } from '../../assets';
import { useNavigate, Link } from 'react-router-dom';
import { CgMenuLeft } from 'react-icons/cg';
import { MdArrowDropDown, MdOutlineShoppingCart } from 'react-icons/md';
import { useSelector } from 'react-redux';

const Header = () => {
	const [nav, setNav] = useState(false);
	const { cart } = useSelector((state) => state.app);

	const navigation = useNavigate();

	const handleNav = () => {
		setNav(!nav);
	};

	const goHome = () => {
		navigation('/');
	};

	const goToCart = () => {
		navigation('/cart');
	};

	return (
		<div className='flex flex-col w-full'>
			<div className='flex items-center px-3'>
				<div className='flex items-center text-black'>
					<img src={logoIcon} className='h-16 object-contain' alt='le-cheneIcon' />

					<div className='bg-[#3a998e] p-1 rounded-md text-white flex items-center hover:shadow-lg cursor-pointer'>
						<CgMenuLeft />
						<MdArrowDropDown />
					</div>
				</div>

				<ul className='hidden md:flex mx-12 flex-grow space-x-8'>
					<Link className='NavLink'>Home</Link>
					<Link className='NavLink'>Product</Link>
					<Link className='NavLink'>Category</Link>
					<Link className='NavLink'>Blog</Link>
					<Link className='NavLink'>Contact</Link>
				</ul>

				<div className='space-x-4 flex items-center'>
					<div onClick={goToCart} className='relative w-7 h-7 flex cursor-pointer hover:text-green-700'>
						<MdOutlineShoppingCart className='w-full h-full' />
						<span className='absolute left-[65%] bottom-[65%] text-white bg-rose-700 rounded-full text-[10px] px-1'>
							{cart.length}
						</span>
					</div>

					<AiOutlineHeart className='text-2xl text-slate-700' />

					<div className='flex items-center space-x-1'>
						<img
							src={
								'https://images.unsplash.com/flagged/photo-1578905326519-3aa98aa6a728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
							}
							alt='user profile'
							className='w-8 h-8 object-cover rounded-full'
						/>
						<h3 className='font-medium text-gray-800 text-xs'>James Author</h3>
						<MdArrowDropDown />
					</div>

					<button className='bg-[#3A998E] py-2 px-5 shadow-sm shadow-cyan-700 text-sm text-white rounded-md'>
						Login
					</button>
				</div>

				<div onClick={handleNav} className='block md:hidden'>
					{nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
				</div>
			</div>

			<div className='w-full flex justify-end px-3'>
				<SearchBar />
			</div>
		</div>
	);
};

export default Header;
